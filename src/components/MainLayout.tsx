import React from 'react'
import SideBar from './SideBar'
import ContentBar from './ContentBar'

export default function MainLayout() {
  return (
    <div>
      {/* <h2>hello</h2> */}
      <div className='main_layout'>
        <div className='side-bar'>
          <SideBar />
        </div>
        <div className='content-bar'>
          <ContentBar />
        </div>
      </div>
    </div>
  )
}
