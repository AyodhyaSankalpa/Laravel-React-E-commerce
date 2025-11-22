import React, { useEffect, useState } from 'react'
import Layout from '../../common/Layout'
import Sidebar from '../../common/Sidebar'
import { Link } from 'react-router-dom'
import Loader from '../../common/Loader'
import Nostate from '../../common/Nostate'
import { adminToken, apiUrl } from '../../common/http'

const Users = () => {

    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(false);

    const fetchUsers = async () => {
        setLoader(true)
        const res = await fetch(`${apiUrl}/users`,{
            method: 'GET',
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${adminToken()}`
            }
        })
        .then(res => res.json())
        .then(result => {
            setLoader(false)
            if (result.status == 200) {
                setUsers(result.data);
            } else {
                console.log("Something went wrong")
            }
            
        })
    }


    useEffect(() => {
        fetchUsers();
    },[])

  return (
    <Layout>        
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between mt-5 pb-3">
              <h3 className="h4 pb-0 mb-0">Users</h3>
            </div>
            <div className="col-md-3">
              <Sidebar/>
            </div>
            <div className="col-md-9">
                <div className="card shadow">
                    <div className="card-body p-4">

                        {
                            loader == true && <Loader/>
                        }

                        {
                            loader == false && users.length == 0 &&  <Nostate text="Users not found"/>
                        }

                        {
                            users && users.length > 0 &&
                        
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                            users.map(user => {
                                            return (
                                                <tr>
                                                    <td>{user.id}</td>                                                    
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>                                                    
                                                    <td>{user.mobile}</td>
                                                    <td>{user.address}</td>
                                                    
                                                    {/* <td>
                                                        
                                                        <Link onClick={() => deleteProduct(user.id)} className='text-danger ms-2'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg>
                                                        </Link>
                                                    </td> */}
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </table>

                        }

                    </div>
                </div>                
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Users