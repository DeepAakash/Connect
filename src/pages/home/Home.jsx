import React from 'react'
import PostSide from '../../componentts/PostSide/PostSide'
import ProfileSide from '../../componentts/ProfileSide/ProfileSide'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide/>
        <PostSide/>
        <div className='rightSide'>Right Side</div>
      
    </div>
  )
}

export default Home
