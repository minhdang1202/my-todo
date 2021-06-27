import React from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import './Booking.css'
const Booking = () => {
    return(
        <section className = 'section section-book purple darken-2 white-text center'>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col s12 center'>
                    <a href='!#' class="waves-effect waves-light purple-text btn-large white"><i class="material-icons left">send</i>Book Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Booking