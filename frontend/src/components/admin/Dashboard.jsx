import React, { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import Sidebar from '../common/Sidebar';
import { adminToken, apiUrl } from '../common/http';

const Dashboard = () => {

  const [stats, setStats] = useState({
    users: 0,
    orders: 0,
    products: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const res = await fetch(`${apiUrl}/dashboard/stats`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${adminToken()}`
      }
    });

    const result = await res.json();
    if (result.status === 200) {
      setStats(result.data);
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5 pb-3">
            <h3 className="h4 pb-0 mb-0">Dashboard</h3>
          </div>

          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <div className="row">

              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body">
                    <h2>{stats.users}</h2>
                    <span>Users</span>
                  </div>
                  <div className="card-footer">
                    <a href="#">View Users</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body">
                    <h2>{stats.orders}</h2>
                    <span>Orders</span>
                  </div>
                  <div className="card-footer">
                    <a href="/admin/orders">View Orders</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body">
                    <h2>{stats.products}</h2>
                    <span>Products</span>
                  </div>
                  <div className="card-footer">
                    <a href="/admin/products">View Products</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Dashboard;
