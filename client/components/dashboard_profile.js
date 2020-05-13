import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DashboardProfile = () => {
  const { user } = useParams()
  return (
    <div>
      <div id="title"> PROFILE </div>
      <div id="username"> {user} </div>
      <Link to="/dashboard/main"> Go To Main </Link>
      <h2>
        <Link to="/dashboard"> Go To Root </Link>
      </h2>
    </div>
  )
}

DashboardProfile.propTypes = {}

export default DashboardProfile