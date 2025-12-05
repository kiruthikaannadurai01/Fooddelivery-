import React from 'react'
import "./AppDownload.css";
import { assets } from '../../assets/assets'  

export const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>

      <div className="app-download-text">
        <h1>For Better Experience Download</h1>
        <h1>Tomato App</h1>
      </div>

      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>

    </div>
  )
}
