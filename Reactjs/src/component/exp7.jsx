import React from 'react'

function Exp7({ student }) {
  return (
    <div>
      {student.map((s, index) => (
        <div key={index}>
          <h2>{s.name}</h2>
          <h2>{s.rollno}</h2>
          <h2>{s.course}</h2>
        </div>
      ))}
    </div>
  )
}

export default Exp7