import React, { useState } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import './Gallery.css'
const Photo = ({img , alt}) => {
    return (
        <div className = 'col s12 m3 marg'>
            <img className = 'materialboxed responsive-img'  width="650" src = {img} alt = {alt}></img>
        </div>
    )
}

function PhotoGallery () {
    const [photos, setphotos] = useState([
        {
            id : 1 , 
            img : 'https://source.unsplash.com/1600x900/?hotel',
            atl : 'hotel'
        },
        {
            id : 2 , 
            img : 'https://source.unsplash.com/1600x900/?restaurent',
            atl : 'restaurent'
        },
        {
            id : 3 , 
            img : 'https://source.unsplash.com/1600x900/?nature',
            atl : 'nature'
        },
        {
            id : 4 , 
            img : 'https://source.unsplash.com/1600x900/?beach',
            atl : 'beach'
        },
        {
            id : 5 , 
            img : 'https://source.unsplash.com/1600x900/?travel',
            atl : 'travel'
        },
        {
            id : 6 , 
            img : 'https://source.unsplash.com/1600x900/?city',
            atl : 'city'
        },
        {
            id : 7 , 
            img : 'https://source.unsplash.com/1600x900/?adventure',
            atl : 'adventure'
        },
        {
            id : 8 , 
            img : 'https://source.unsplash.com/1600x900/?sea',
            atl : 'sea'
        },
        {
            id : 9 , 
            img : 'https://source.unsplash.com/1600x900/?building',
            atl : 'building'
        },
        {
            id : 10 , 
            img : 'https://source.unsplash.com/1600x900/?climbing',
            atl : 'climbing'
        },
        {
            id : 11, 
            img : 'https://source.unsplash.com/1600x900/?forest',
            atl : 'forest'
        },
        {
            id : 12, 
            img : 'https://source.unsplash.com/1600x900/?resort',
            atl : 'resort'
        }
    ]);

    return(
        <div className ='row'>
            {photos.map(gal => {
               return <Photo key ={gal.id} img={gal.img} alt = {gal.atl} />
            })}
        </div>
    )
}

 const Gallery = () => {
        return (
            <section id ='gallery' className = 'section section-gallery scrollspy'>
                <div className = 'container'>
                    <h4 className = 'center'>
                        <span className = 'purple-text text-darker-1'>Photo</span> Gallery
                    </h4>
                    <PhotoGallery/>
                </div>

            </section>
        )
    
}


export default Gallery;