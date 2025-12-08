import React from 'react'
import "./AppDownload.css";
import { assets } from '../../assets/assets'  

export const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>

      <div className="app-download-text">
        <h2>For Better Experience Download</h2>
        <h1>Tomato App</h1>
      </div>

      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>

    </div>
  )
}
