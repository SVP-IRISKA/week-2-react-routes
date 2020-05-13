import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title"> Main </div>
      <Link to="/dashboard/profile/a445db04-269d-4173-9740-fb3db0638a19"> Go To Profile </Link>
      <h2>
        <Link to="/dashboard"> Go To Root </Link>
      </h2>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
