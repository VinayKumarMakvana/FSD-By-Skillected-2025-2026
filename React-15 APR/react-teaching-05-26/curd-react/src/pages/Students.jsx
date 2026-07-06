import { useState } from "react";

import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

function Students() {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const [students, setStudents] = useState([]);

  // Track which student is being edited
  const [editIndex, setEditIndex] = useState(null);

  // ADD STUDENT
  function addStudent() {

    if (name === "" || course === "") {
      alert("Enter all fields");
      return;
    }

    const student = {
      name,
      course
    };

    setStudents([
      ...students,
      student
    ]);

    setName("");
    setCourse("");
  }

  // DELETE STUDENT
  function deleteStudent(index) {

    const updatedStudents =
      students.filter(
        (_, i) => i !== index
      );

    setStudents(updatedStudents);
  }

  // EDIT STUDENT
  function editStudent(index) {

    const selectedStudent =
      students[index];

    setName(selectedStudent.name);
    setCourse(selectedStudent.course);

    setEditIndex(index);
  }

  // UPDATE STUDENT
  function updateStudent() {

    const updatedStudents = [...students];

    updatedStudents[editIndex] = {
      name,
      course
    };

    setStudents(updatedStudents);

    setName("");
    setCourse("");

    setEditIndex(null);
  }

  return (

    <div>

      <h1>Student Management</h1>

      <StudentForm
        name={name}
        setName={setName}
        course={course}
        setCourse={setCourse}
        addStudent={addStudent}
        updateStudent={updateStudent}
        editIndex={editIndex}
      />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />

    </div>

  );
}

export default Students;