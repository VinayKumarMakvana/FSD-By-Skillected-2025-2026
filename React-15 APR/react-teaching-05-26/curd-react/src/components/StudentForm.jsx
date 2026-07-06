function StudentForm({
  name,
  setName,
  course,
  setCourse,
  addStudent,
  updateStudent,
  editIndex
}) {

  return (

    <div>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e)=>
          setName(e.target.value)
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e)=>
          setCourse(e.target.value)
        }
      />

      <br /><br />

      {
  editIndex !== null ?

  <button onClick={updateStudent}>
    Update Student
  </button>

  :

  <button onClick={addStudent}>
    Add Student
  </button>
}

    </div>

  );
}

export default StudentForm;