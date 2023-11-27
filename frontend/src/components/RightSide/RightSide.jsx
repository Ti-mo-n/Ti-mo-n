import React from 'react'
import './RightSide.css'
import Notifications from '../Notifications/Notifications'
import StudentReview from '../StudentReview/StudentReview'

const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h3>Notifications</h3>
            <Notifications />
        </div>
        <div>
            <h3>Hostel Reviews</h3>
            <StudentReview />

        </div>
    </div>
  )
}

export default RightSide
