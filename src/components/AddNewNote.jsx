import React, { useState } from "react";

function AddNewNote({onAddNote}) {
  // state for title and description whit initial empty string
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // if not title or description => dont show notes
    if(!title || !description) return null;

    // crete new note
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed : false,
      createdAt : new Date().toISOString(),
    }
    console.log(newNote);

    // delete input for title and description after click on addnewnote button
    setTitle("");
    setDescription("");

    // update notes
   onAddNote(newNote);
    
  };


  return (
    <div className="">
      <h2 className="app__title-addNote">Add New Note</h2>

      <form className="app__input" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="note title"
          className="text-feild"
        />
        <input
          value = {description}
          onChange={(e)=> setDescription(e.target.value)}
          type="text"
          placeholder="note description..."
          className="text-feild"
        />
        <button type="submit" className="app__button-add">
          Add new Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
