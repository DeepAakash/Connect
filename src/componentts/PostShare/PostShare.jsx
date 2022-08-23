import React, {useState, useRef}  from 'react'
import './PostShare.css'
import ProfileImage from  '../../img/myPhoto.jpg'
import {UilScenery} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilAward} from '@iconscout/react-unicons'
import {UilTimes} from '@iconscout/react-unicons'

const PostShare = () => {
  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const onImageChange = (event) => {
    if(event.target.files && event.target.files[0]){
      let img = event.target.files[0]
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  }

  return (
    <div className='PostShare'>
      <img src={ProfileImage} alt="Profile Pic" />
      <div>
        <input type="text" placeholder="What's on Your Mind?"/>
        <div className="PostOptions">
            <div className="option" style={{color: "var(--photo)"}} onClick={()=>imageRef.current.click()}><UilScenery/>Photo</div>
            <div className="option" style={{color: "var(--video)"}}><UilPlayCircle/>Video</div>
            <div className="option" style={{color: "var(--testimonial)"}}><UilAward/>Testimonial</div>
            <button className="button  ps-button">Share</button>
            <div style={{display: "none"}}>
              <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
            </div>
          </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={()=>setImage(null)}/>
            <img src={image.image} alt="Error in Loading" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare
