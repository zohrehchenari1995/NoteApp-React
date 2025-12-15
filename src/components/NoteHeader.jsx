

function NoteHeader({notes,sortBy,onSort}) {

  return (
    <div className="app-title__sort">
       <h1 className="app__title">My Notes({notes.length})</h1>
        <select  className="app__sort"  value={sortBy}  onChange={onSort}>
          <option value="latest">sort base on latest notes</option>
          <option value="earliest">sort base on earliest notes</option>
          <option value="completed">sort base on completed notes</option>
        </select>
    </div>
  )
}

export default NoteHeader;


