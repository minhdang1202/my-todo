import React from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'

const Explore = () => {
    return (
    <section id='explore' className = 'section section-icons grey lighten-4 center'>
        <div className = 'container'>
            <div className ='row'>
                <h4 className = 'center'>
                    <span className = 'purple-text darken-1' >Explore</span> Minh Đăng
                </h4>
                <div className = 'col s6 m3'>
                    <div className = 'card-panel'>
                        <i className = 'material-icons medium purple-text'>hotel</i>
                        <h4>Hotel</h4>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Consequuntur excepturi a
                            t nobis </p>

                    </div>
                </div>
                <div className = 'col s6 m3'>
                    <div className = 'card-panel'>
                        <i className = 'material-icons medium purple-text'>restaurant</i>
                        <h4>Restaurent</h4>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Consequuntur excepturi a
                            t nobis </p>

                    </div>
                </div>
                <div className = 'col s6 m3'>
                    <div className = 'card-panel'>
                        <i className = 'material-icons medium purple-text'>local_cafe</i>
                        <h4>Cafe</h4>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Consequuntur excepturi a
                            t nobis </p>

                    </div>
                </div>
                <div className = 'col s6 m3'>
                    <div className = 'card-panel'>
                        <i className = 'material-icons medium purple-text'>add_shopping_cart</i>
                        <h4>Shopping</h4>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Consequuntur excepturi a
                            t nobis </p>

                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Explore