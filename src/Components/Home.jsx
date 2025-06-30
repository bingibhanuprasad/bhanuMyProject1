import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-white">
        <div className="text-center hero-content">
          <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">Bhanu Agro Farms</h1>
          <p className="lead animate__animated animate__fadeInUp">Fresh • Organic • Sustainable</p>
          <button className="btn btn-outline-light btn-lg mt-3">Explore Products</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">About Us</h2>
          <p className="text-center about-text mx-auto">
            At Bhanu Agro Farms, we blend traditional farming wisdom with modern organic practices to bring you the freshest and healthiest produce. Rooted in sustainability and transparency, our mission is to nourish lives while nurturing the earth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 section-title">What We Offer</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="service-card shadow">
                <i className="fas fa-carrot fa-3x text-success mb-3"></i>
                <h5>Organic Vegetables</h5>
                <p>Hand-picked, chemical-free vegetables straight from our farm.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card shadow">
                <i className="fas fa-apple-alt fa-3x text-danger mb-3"></i>
                <h5>Fresh Fruits</h5>
                <p>Sweet and juicy seasonal fruits grown with love and care.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="service-card shadow">
                <i className="fas fa-tractor fa-3x text-warning mb-3"></i>
                <h5>Farm Tours</h5>
                <p>Experience eco-farming by visiting our lush green fields.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 section-title">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-box shadow">
                <p>“Bhanu Agro’s veggies taste amazing! We order every week.”</p>
                <h6>- Lakshmi, Hyderabad</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-box shadow">
                <p>“We loved the farm tour! So much knowledge and fun.”</p>
                <h6>- Rahul, Guntur</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-box shadow">
                <p>“Reliable service, eco-friendly practices, and super fresh food!”</p>
                <h6>- Ayesha, Vijayawada</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center text-white py-3">
        © 2025 Bhanu Agro Farms. Grown with Love 🌱
      </footer>

    </div>
  );
};

export default Home;
