import React from 'react'
import './single.css'
import Post from '../../post/post'
import Sidebar from '../../sidebar/sidebar'
import Singlepost from '../../singlepost/singlepost'

export default function Single() {
  return (
    <div className='single'>
        {/* <Post/> */}
        <Singlepost/>
        <Sidebar/>
    </div>
  )
}
