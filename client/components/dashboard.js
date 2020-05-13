import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title"> Dashboard </div>
      <Link to="/dashboard/profile/a445db04-269d-4173-9740-fb3db0638a19"> Go To Profile </Link>
      <h2>
        <Link to="/dashboard/main"> Go To Main </Link>
      </h2>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
