import React from 'react'


const Footer = () => {
    return (
        <footer style={footerStyle}>
          <div>
            <h3>Your App Name</h3>
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul style={listStyle}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </footer>
      );
}
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

export default Footer