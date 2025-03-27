import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const API_URL = "https://studentform-entg.onrender.com/api/students"; 

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addStudent = async (name, course) => {
    try {
      await axios.post(API_URL, { name, course });
      fetchStudents();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 className="text-center mb-4" style={{ color: "#38E54D", fontWeight: "bold", fontFamily: "roboto, serif"}}>
        PATEROS TECHNOLOGICAL COLLEGE
      </h1>
      <h2 className="text-center mb-4" style={{ color: "#9CFF2E", fontFamily: "roboto" }}>Student Recording System</h2>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;
