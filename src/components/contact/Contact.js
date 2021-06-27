import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import './Contact.css'
export default class Contact extends Component {
    render() {
        return (
            <section id = 'contact' className = 'section section-contact scrollspy'>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col s12 m6'>
                            <div className = 'card-panel purple white-text center'>
                                <i className = 'material-icons'>email</i>
                                <h5> Minh Đăng Address</h5>
                                <p>Loren ipsasdklsnjkfkhakjshdkjhhakshdjhkqhuikajsbfkjabjkshfjkahsjkdhahskjdjk</p>
                            </div>
                            <ul className = 'collection with-header'>
                                <li className = 'collection-header'>
                                    <h4>Main Office</h4>
                                </li>
                                <li className = 'collection-item'>Minh Đăng Booking</li>
                                <li className = 'collection-item'><i class="fas fa-map-marker-alt"></i>Nam Dinh, Viet Nam</li>
                                <li className = 'collection-item'><i class="fas fa-mobile-alt"></i>0963889106</li>
                                <li className = 'collection-item'><i class="fas fa-envelope-open"></i>vuminhdang20@gmail.com</li>
                            </ul>
                        </div>
                        <div className = 'col s12 m6'>
                            <div className = 'card-panel grey lighten-3'>
                                <h5>Please fill out this form</h5>
                                <form>
                                    <div className = 'input-field'>
                                        <input type = 'text' id='name' className = 'validate'/>
                                        <label for = 'name' className = 'purple-text' >Name</label>
                                    </div>
                                    <div className = 'input-field'>
                                        <input type = 'text' id='email' className = 'validate'/>
                                        <label for = 'email' className = 'purple-text' >Email</label>
                                    </div>
                                    <div className = 'input-field'>
                                        <input type = 'text' id='phone' className = 'validate'/>
                                        <label for = 'phone' className = 'purple-text' >Phone</label>
                                    </div>
                                    <div className = 'input-field'>
                                        <textarea type = 'text' id='message' className="materialize-textarea" data-length="120"></textarea>
                                        <label for = 'message' className = 'purple-text' >Message</label>
                                    </div>
                                    <input type = 'submit' className = 'btn purple' value = 'Submit'></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>                
            </section>
        )
    }
}
