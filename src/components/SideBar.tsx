import React from 'react'
import portfolio from '../icons/portfolio-pic.webp';
export default function SideBar() {
  return (
    <div className='side-bar-avatar'>
      <img src={portfolio}
        alt='profile-avatar'
        className='avatar-sty'
      />
      <div className='side-bar-details'>
        <h3 className='text-style'>Ramesh Inumula</h3>
        <p className='text-style-p'>Front-end Developer</p>
      </div>
      <div className='side-bar-details'>
          <p>Email:</p>
          <span>inumularamesh@gmail.com</span>
      </div>
      <div className='side-bar-details'>
        <p>Phone:</p>
        <span>+91 7285978169</span>
      </div>
      <div className='side-bar-details'>
        <p>Address:</p>
        <span>Visakhapatanam</span>
      </div>
    </div>
  )
}
