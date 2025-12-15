import React from "react";

function NoteList({ notes, onDelete, onCompleted, sortBy }) {
  // for show change sort
  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    ); //asce=>a-b=>a>b = +1:-1

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ); //desce=>b-a=>a>b = -1:+1

  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div>
      {/* <h2 className="app__title-showNote">No Notes has already been added!!!</h2> */}
      <div>
        {sortedNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onCompleted={onCompleted}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete, onCompleted }) {
  return (
    <div className="app__show-detail">
      {/* notes header */}
      <div className="detail">
        <p className={`detail__title ${note.completed ? "completed" : ""}`}>
          {note.title}
        </p>
        <p className="detail__description">{note.description}</p>
        <p className="detail__date">
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
            day: "numeric",
          })}
        </p>
      </div>

      {/* notes footer */}
      <div className="app__icon">
        <button className="icon__trash" onClick={() => onDelete(note.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        <span className="icon__checkbox">
          <input type="checkbox" onChange={onCompleted} value={note.id} />
        </span>
      </div>
    </div>
  );
}
