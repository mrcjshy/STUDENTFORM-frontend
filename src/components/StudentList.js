import React from "react";

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="card p-4 shadow-sm mt-4" style={{ backgroundColor: "#FFFFFF", borderRadius: "8px" }}>
      <h2 className="text-center mb-3" style={{ color: "#2D5F2E", fontWeight: "bold" }}>Student List</h2>
      {students.length === 0 ? (
        <p className="text-center">No students added yet.</p>
      ) : (
        <ul className="list-group">
          {students.map((student, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{student.name} - {student.course}</span>
              <button
                className="btn btn-sm"
                style={{ backgroundColor: "#D32F2F", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }}
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
