import React from 'react'

const Logs = ({ logs }) => {

  const logsList = logs.map(log => (
    <tr key={log._id}>
      <td>{log.event}</td>
      <td>{log.time.toDateString()}</td>
      <td>{log.notes}</td>
    </tr>
  ))

  const noLogs = (
    <tr>
      <td><p className="center">No logs...</p></td>
    </tr>
  )

  return (
    <table className="centered striped">
      <thead>
        <tr>
          <th>Event</th>
          <th>Date</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {(logsList.length) ? logsList : noLogs}
      </tbody>
    </table>
  )
}

export default Logs
