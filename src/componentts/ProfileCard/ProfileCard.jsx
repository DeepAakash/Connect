import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/myPhoto.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="Cover Photo"/>
            <img src={Profile} alt="Profile Photo" />
        </div>
        <div className="ProfileName">
            <span>Aakash Deep</span>
            <span>Electronics & Computer Engineer</span>
        </div>
        <div className="followStatus">
            <hr/>
            <div>
                <div className="follow">
                    <span>525</span>
                    <span>Following</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>501</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr/>
        </div>
        <span>My Profie</span>
    </div>
  )
}

export default ProfileCard
