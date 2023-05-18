
import './Default.css'

import { Sidebar } from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Default() {

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Default
