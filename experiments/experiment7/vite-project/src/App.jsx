
import React from "react";
import Student from "./Student";
import "./App.css";

function App() {

  const students = [
    { id: 1, name: "Amandeep", course: "BCA", marks: 85 },
    { id: 2, name: "Rohit", course: "B.Tech", marks: 92 },
    { id: 3, name: "Priyanshu", course: "Btech", marks: 78 },
    { id: 4, name: "Ranjeet", course: "MCA", marks: 88 }
  ];

  return (
    <div className="container">
      <h1>Student Details</h1>

      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          course={student.course}
          marks={student.marks}
        />
      ))}

    </div>
  );
}

export default App;

