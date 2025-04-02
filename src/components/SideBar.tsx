import React from 'react'
import portfolio from '../icons/portfolio-pic.webp';
export default function SideBar() {
  return (
    <div className='side-bar-avatar'>
      <img src={portfolio}
        alt='profile-avatar'
        className='avatar-sty'
      />
      <div>
        <div className='side-bar-details'>
          <h3 className='text-style'>Ramesh Inumula</h3>
          <p className='text-style-p'>Front-end Developer</p>
        </div>
        <div className='side-bar-details'>
            <p>Email: inumularamesh@gmail.com</p>
        </div>
        <div className='side-bar-details'>
          <p>Phone: +91 7285978169</p>
        </div>
        <div className='side-bar-details'>
          <p>Address: Visakhapatanam Andhra Pradesh, 530002</p>
        </div>
      </div>
    </div>
  )
}
