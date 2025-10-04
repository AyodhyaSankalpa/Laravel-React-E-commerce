import React from 'react'
import ProductOneImage from '../../assets/images/f1.jpg';
import ProductTwoImage from '../../assets/images/f2.jpg';

const FeaturedProducts = () => {
  return (
    <section className="section-2 py-5">
                <div className="container">
                    <h2>Featured Products</h2>                
                    <div className="row mt-4 m-1">
                      <div className="col-md-3 col-6 p-1">
                        <div className="product card border-0 shadow">
                          <div className="card-img">
                              <img src={ProductOneImage} alt="" className='w-100' />
                          </div>
                          <div className="card-body">
                            <a href="">Men's Shirt</a>
                            <div className="price">
                              $50 <span className='text-decoration-line-through'>$80</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 p-1">
                        <div className="product card border-0 shadow">
                          <div className="card-img">
                              <img src={ProductTwoImage} alt="" className='w-100' />
                          </div>
                          <div className="card-body">
                            <a href="">Men's Shirt</a>
                            <div className="price">
                              $50 <span className='text-decoration-line-through'>$80</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 p-1">
                        <div className="product card border-0 shadow">
                          <div className="card-img">
                              <img src={ProductOneImage} alt="" className='w-100' />
                          </div>
                          <div className="card-body">
                            <a href="">Men's Shirt</a>
                            <div className="price">
                              $50 <span className='text-decoration-line-through'>$80</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 p-1">
                        <div className="product card border-0 shadow">
                          <div className="card-img">
                              <img src={ProductTwoImage} alt="" className='w-100' />
                          </div>
                          <div className="card-body">
                            <a href="">Men's Shirt</a>
                            <div className="price">
                              $50 <span className='text-decoration-line-through'>$80</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
        </section>
  )
}

export default FeaturedProducts