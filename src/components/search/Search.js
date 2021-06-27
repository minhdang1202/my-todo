import React, { Component } from 'react'
import './Search.css'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
export default class Search extends Component {
    render() {
        return (
            <section id='search' className='section section-search blue accent-2 white-text center scrollspy'>
                <div className = 'container'> 
                    <div className = 'row col s12' >
                            <div className = 'input-field'>
                                <input className = 'white grey-text autocomplete' placeholder='Search for placeds, hotels, ects' type = 'text'  id = 'autocomplete-input'></input>

                            </div>
                    </div>
                </div>
                
            </section>
        )
    }
}
