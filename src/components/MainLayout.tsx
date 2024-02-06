import React from 'react'
import SideBar from './SideBar'

export default function MainLayout() {
  return (
    <div>
      {/* <h2>hello</h2> */}
      <div className='main_layout'>
        <div className='side-bar'>
          <SideBar />
        </div>
        <div className='content-bar'>
          <h3>content bar</h3>
        </div>
      </div>
    </div>
  )
}
