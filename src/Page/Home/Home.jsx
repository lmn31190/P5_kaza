import React, { useEffect, useState } from 'react'
import './home.scss';
import axios from 'axios';
import logements from '../../logement.json'

const Home = () => {

  const [data, setData] = useState('');

  return (
    <div className='home'>
       <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
       </div>

       <div className="gallery">
        <div className="container">
          <div className="wrapper">
            {
              logements.slice(0,6).map(logement => {
                return(
                  <div className="card">
                    <h3>{logement.title}</h3>
                  </div>
                )
              })
            }
          </div>
        </div>
       </div>
    </div>
  )
}

export default Home