import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ContentBar() {
  const routes = [
    {
      usepath: '/',
      className: 'about_us',
      title: 'About Us'
    },
    {
      usepath: '/resume',
      className: 'resume',
      title: 'Resume'
    },
    {
      usepath: '/projects',
      className: 'projects',
      title: 'Projects'
    },
    {
      usepath: '/chat',
      className: 'chat',
      title: 'Chat'
    },
    {
      usepath: '/contact',
      className: 'contact',
      title: 'Contact'
    }
  ]
  return (
    <div>
      {/* <h2>gello</h2> */}
      <div className='route-names-div'>
        {routes.map(eachRoute => (
          <div className='route-title'>
          <NavLink
            to={eachRoute.usepath}
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            {eachRoute.title}
          </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}
