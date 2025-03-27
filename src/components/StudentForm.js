import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surname, setSurname] = useState("");
  const [course, setCourse] = useState("");

  // List of courses
  const courses = [
    "BS Information Technology",
    "BS Office Administration",
    "Certificate in Office Administration",
    "Certificate in Computer Science",
    "Associate in Business Administration",
    "Associate in Accounting Information System",
    "Associate in Human Resource Development",
    "Associate in Hotel and Restaurant Techonology",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !surname || !course) return;

    // Combine the full name
    const fullName = `${firstName} ${middleName ? middleName + " " : ""}${surname}`;

    addStudent(fullName, course);
    setFirstName("");
    setMiddleName("");
    setSurname("");
    setCourse("");
  };

  return (
    <div className="card p-4 shadow-sm" style={{ backgroundColor: "#F5F5F5", borderRadius: "8px", padding: "20px" }}>
      
      {/* PTC Logo */}
      <div className="text-center mb-3">
        <img src="/logo-ptc.png" alt="PTC Logo" style={{ width: "80px" }} />
      </div>

      <h2 className="text-center mb-3" style={{ color: "#2D5F2E", fontWeight: "bold" }}>Student Name</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Middle Name (Optional)"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="" disabled>Select a course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-100" style={{ backgroundColor: "#2D5F2E", color: "white", border: "none", padding: "10px", borderRadius: "5px" }}>
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
