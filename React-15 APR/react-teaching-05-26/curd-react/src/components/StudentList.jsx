function StudentList({
  students,
  deleteStudent,
  editStudent
}) {
// 1 -> 2

  return (

    <div>

      {
        students.map((student,index)=>{

          return(

            <div
              key={index}
            >

              <h3>
                {student.name}
              </h3>

              <p>
                {student.course}
              </p>

<button
  onClick={() => editStudent(index)}
>
  Edit
</button>
              <button
                onClick={()=>
                  deleteStudent(index)
                }
              >
                Delete
              </button>

              <hr />

            </div>

          )

        })
      }

    </div>

  );
}

export default StudentList;