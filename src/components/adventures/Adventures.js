import React, { Component } from 'react'
import Resort1 from '../../images/cuba.jpg'
import Resort2 from '../../images/halong.jpg'
import Resort3 from '../../images/costa.jpg'
import { HashLink as Link} from 'react-router-hash-link'
import './Adventures.css'

export default class Adventures extends Component {
    render() {
        return (
            <section id='adventure' className = 'section section-adventure scrollspy'>
                <div className = 'container'>
                    <div className = 'row'>
                        <h4 className= 'center'>
                            <span className='purple-text darker-1'>Minh Đăng </span>Adventures
                        </h4>
                        <div className = 'col s12 m4'>
                            <div className = 'card'>
                                <div className = 'card-image'>
                                    <img src = {Resort1} alt='Cuba'/>
                                    <span className = 'card-title'>Cuba</span>
                                    <Link className='btn-floating activator halfway-fab waves-effect waves-light purple'>
                                        <i class="material-icons">add</i>
                                    </Link>
                                </div>
                                <div className = 'card-content'>
                                    <p>Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Consequuntur excepturi a
                                    t nobis </p>
                                </div>
                                <div className = 'card-reveal'>
                                    <span className = 'card-title grey-text text-darken-4'>Cuba<i class="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'col s12 m4'>
                            <div className = 'card'>
                                <div className = 'card-image'>
                                    <img src = {Resort2} alt='Halong'/>
                                    <span className = 'card-title'>Ha Long</span>
                                    <Link className='btn-floating activator halfway-fab waves-effect waves-light purple'>
                                        <i class="material-icons">add</i>
                                    </Link>
                                </div>
                                <div className = 'card-content'>
                                    <p>Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Consequuntur excepturi a
                                    t nobis </p>
                                </div>
                                <div className = 'card-reveal'>
                                    <span className = 'card-title grey-text text-darken-4'>Ha Long<i class="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>
                        <div className = 'col s12 m4'>
                            <div className = 'card'>
                                <div className = 'card-image'>
                                    <img src = {Resort3} alt='Costa Rica'/>
                                    <span className = 'card-title'>Costa Rica</span>
                                    <Link className='btn-floating activator halfway-fab waves-effect waves-light purple'>
                                        <i class="material-icons">add</i>
                                    </Link>
                                </div>
                                <div className = 'card-content'>
                                    <p>Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Consequuntur excepturi a
                                    t nobis </p>
                                </div>
                                <div className = 'card-reveal'>
                                    <span className = 'card-title grey-text text-darken-4'>Costa Rica<i class="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
