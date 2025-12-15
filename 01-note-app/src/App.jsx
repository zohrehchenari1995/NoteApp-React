import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function App() {
  // lifting up state notes from AddNewNotes component
  const [notes, setNotes] = useState([]);
  // lifing up state sort from NoteHeader component
  const [sortBy, setSortBy] = useState("");

  // function for update notes by addnewnote
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  //function for delete notes by noteList and notitem
  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  //function for complete notes by notelist and notitem
  const handleCompletedNote = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevNotes) =>
      prevNotes.map((n) =>
        n.id === noteId ? { ...n, completed: !n.completed } : n
      )
    );
  };

  return (
    <div>
      {/* sort by select option */}
      <div className="">
        <NoteHeader
          notes={notes}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
      </div>

      {/* render addnewnote component */}

      <div className="app__input-showNote">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="app__show-NewNote">
          <NoteStatus notes={notes} />
          <NoteList
            sortBy={sortBy}
            notes={notes}
            onDelete={handleDeleteNote}
            onCompleted={handleCompletedNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
