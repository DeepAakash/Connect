import React from 'react'
import './Post.css'
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import {GoCommentDiscussion} from 'react-icons/go'
import { GrSend } from 'react-icons/gr';

const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />
        <div className="PostReact">
          <span>{data.liked?<FaHeart/>:<FaRegHeart/>}</span>
          <span><GoCommentDiscussion/></span>
          <span style={{color: '#e91c23'}}><GrSend/></span>
        </div>
        <span>{data.likes}likes</span>
        <div className="detail">
          <span><b>{data.name}</b></span>
          <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post
