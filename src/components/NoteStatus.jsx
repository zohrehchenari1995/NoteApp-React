import Message from "./Message";

function NoteStatus({ notes }) {
  // derived state
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCompletedNotes = allNotes - completedNotes;
  // early return conditional rendering
  if (!allNotes)
    return (
      <Message>
        <h1>
          <span>ℹ️</span>No Notes has already been added
        </h1>
      </Message>
    );

  return (
    <div>
      <ul className="app__button-status">
        <li className="button__status">
          <button className="status">All</button>
          <span className="status__number">{allNotes}</span>
        </li>
        <li className="button__status">
          <button className="status">Completed</button>
          <span className="status__number">{completedNotes}</span>
        </li>
        <li className="button__status">
          <button className="status">Open</button>
          <span className="status__number">{unCompletedNotes}</span>
        </li>
      </ul>
    </div>
  );
}

export default NoteStatus;
