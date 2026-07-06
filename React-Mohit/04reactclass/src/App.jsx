import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
} from "react";


// Child Component
const NoteItem = memo(({ note, deleteNote }) => {

  console.log("Rendered:", note);

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">

      <h2 className="text-lg font-semibold text-gray-800">
        {note}
      </h2>

      <button
        onClick={() => deleteNote(note)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
      >
        Delete
      </button>

    </div>
  );
});



function App() {

 
  const [notes, setNotes] = useState([]);

  const [input, setInput] = useState("");


  // useRef
  const inputRef = useRef();


  // Focus input on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);


  // Load notes from localStorage
  useEffect(() => {

    const savedNotes =
      JSON.parse(localStorage.getItem("notes")) || [];

    setNotes(savedNotes);

  }, []);


  // Save notes to localStorage
  useEffect(() => {

    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );

  }, [notes]);


  // Add Note
  const addNote = () => {

    if (input.trim() === "") return;

    setNotes([...notes, input]);

    setInput("");

    inputRef.current.focus();
  };


  // useCallback
  const deleteNote = useCallback((noteToDelete) => {

    setNotes((prevNotes) =>
      prevNotes.filter(
        (note) => note !== noteToDelete
      )
    );

  }, []);



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-xl p-6 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Smart Notes App
        </h1>


        {/* Input Section */}
        <div className="flex gap-3">

          <input
            ref={inputRef}
            type="text"
            placeholder="Enter your note..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 text-blue-600  focus:ring-blue-400"
          />

          <button
            onClick={addNote}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg transition"
          >
            Add
          </button>

        </div>


        {/* Notes Section */}
        <div className="mt-6">

          {
            notes.length === 0 ? (
              <p className="text-gray-500 text-center">
                No Notes Available
              </p>
            ) : (
              notes.map((note, index) => (
                <NoteItem
                  key={index}
                  note={note}
                  deleteNote={deleteNote}
                />
              ))
            )
          }

        </div>

      </div>

    </div>
  );
}

export default App;