import React from 'react'

export default function SideBar() {
  return (
    <div className='side-bar-avatar'>
      <img src="https://img.freepik.com/premium-vector/young-man-face-avater-vector-illustration-design_968209-13.jpg"
        alt='profile-avatar'
        className='avatar-sty'
      />
      <div className='side-bar-details'>
        <h3>Ramesh Inumula</h3>
        <p>React js Developer</p>
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
