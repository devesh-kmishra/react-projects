import Note from "./Note";

export default function List({ notes, editNote, deleteNote }) {
  return (
    <div className="container">
      <h4>Your Notes</h4>
      <ul id="list">
        {notes.length === 0 &&
          <div id="alert" className="alert alert-info" role="alert">No notes</div>
        }
        <Note notes={notes} editNote={editNote} deleteNote={deleteNote} />
      </ul>
    </div>
  );
}