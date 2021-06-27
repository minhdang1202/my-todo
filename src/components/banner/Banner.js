import React from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import Imgone from '../../images/banner1.jpg'
import Imgtwo from '../../images/banner2.jpg'
import Imgthree from '../../images/banner3.jpg'
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return(
        <section className='slider' id = 'home'>
            <ul className='slides'>
                <li>
                    <img src = {Imgone} alt = 'Vacation' />
                    <div className = 'caption center-align'>
                        <h2>Pick Your Destination</h2>
                        <h5 className = "light grey-text text-lighten-3 hide-on-small-only">
                            Loren ipsasdklsnjkfkhakjshdkjhhakshdjhkqhuikajsbfkjabjkshfjkahsjkdhahskjdjk
                        </h5>
                        <Link to="#" className = 'btn btn-large purple'>Learn More</Link>
                    </div>
                </li>
                <li>
                    <img src = {Imgtwo} alt = 'Budgets' />
                    <div className = 'caption left-align'>
                        <h2>Book Your Trip</h2>
                        <h5 className = "light grey-text text-lighten-3 hide-on-small-only">
                            Loren ipsasdklsnjkfkhakjshdkjhhakshdjhkqhuikajsbfkjabjkshfjkahsjkdhahskjdjk
                        </h5>
                        <Link to="#" className = 'btn btn-large purple'>Learn More</Link>
                    </div>
                </li>
                <li>
                    <img src = {Imgthree} alt = 'Vacation' />
                    <div className = 'caption right-align'>
                        <h2>Relax And Enjoy</h2>
                        <h5 className = "light grey-text text-lighten-3 hide-on-small-only">
                            Loren ipsasdklsnjkfkhakjshdkjhhakshdjhkqhuikajsbfkjabjkshfjkahsjkdhahskjdjk
                        </h5>
                        <Link to="#" className = 'btn btn-large purple'>Learn More</Link>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Banner