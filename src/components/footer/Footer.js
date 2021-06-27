import React from 'react'
import '../../../node_modules/materialize-css/dist/js/materialize'
import '../../../node_modules/jquery/dist/jquery'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return(
        <section className = 'section section-footer purple darkent-2 white-text center scrollspy'>
            <div className = 'row'>
                <div className = 'col s12'>
                    <h4>Follow Us</h4>
                    <p>Check out social media for special offers</p>
                </div>
                <Link to = 'https://www.facebook.com/profile.php?id=100011710546224' className = 'white-text' target ='blank'>
                    <i className="icon fab fa-facebook-f "></i>
                </Link>
                <Link to = 'https://www.facebook.com/profile.php?id=100011710546224' className = 'white-text' target ='blank'>
                    <i className="icon fab fa-twitter"></i>
                </Link>
                <Link to = 'https://www.facebook.com/profile.php?id=100011710546224' className = 'white-text' target ='blank'>
                    <i className="icon fab fa-youtube"></i>
                </Link>
                <Link to = 'https://www.facebook.com/profile.php?id=100011710546224' className = 'white-text' target ='blank'>
                    <i className="icon fab fa-pinterest"></i>
                </Link>
            </div> 
        </section>
    )
}

export default Footer