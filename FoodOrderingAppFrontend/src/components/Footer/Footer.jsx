import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="Company logo" width={200} height={80}/>
            <p>Welcome to Our Food Ordering App! We are committed to provide you with the best culinary experience, offering a wide range of delicious dishes crafted with care and quality ingredients. Whether you're craving a hearty meal, a quick snack, or something sweet, we've got you covered. Explore our menu, place your order, and get ready to indulge in mouthwatering flavors delivered right to your doorstep. Bon appétit!</p>
            <div className="footer-social-icons">
              <a href="https://github.com/Amodjha01"><img src={assets.github_icon} alt="Github" /></a>
              <a href="https://twitter.com/Amod__jha"><img src={assets.twitter_icon} alt="Twitter" /></a>
              <a href="https://www.linkedin.com/in/amod-kumar-jha"><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
            </div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 7992371671</li>
                <li>amoddss01@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Amod Kumar Jha- All Right Reserved.</p>
    </div>
  )
}

export default Footer
