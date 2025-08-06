import React from 'react'

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Tests</h3>
          <p>0</p>
        </div>
        <div className="stat-card">
          <h3>Passed Tests</h3>
          <p>0</p>
        </div>
        <div className="stat-card">
          <h3>Failed Tests</h3>
          <p>0</p>
        </div>
        <div className="stat-card">
          <h3>Success Rate</h3>
          <p>0%</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard