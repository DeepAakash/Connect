import React from 'react'
import './TrendCard.css'
import {TrendData} from '../../Data/TrendData.js'

const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Events'23</h3>
        {TrendData.map((trend)=>{
            return(
                <div className="trend">
                    <span style={{fontWeight: "bold"}}>#{trend.name}</span>
                    <span style={{fontSize: "13px"}}>{trend.shares} shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard
