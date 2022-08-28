import React from 'react'
import './RightSide.css'
import {FaHome} from 'react-icons/fa'
import {MdNotificationsActive} from 'react-icons/md'
import { AiOutlineComment } from 'react-icons/ai';
import {FcSettings} from 'react-icons/fc'
import TrendCard from '../TrendCard/TrendCard'

const RightSide = () => {
  return (
    <div className='RightSide'>
      <div className="navIcons">
        <span style={{color: "#dc143c"}}><FaHome/></span>
        <span style={{color: "#ff4800"}}><MdNotificationsActive/></span>
        <span style={{color: "green"}}><AiOutlineComment/></span>
        <span><FcSettings/></span>
      </div>
      <TrendCard/>
      <button className="button r-button">
        Share
      </button>
    </div>
  )
}

export default RightSide
