export default function Note({ notes, editNote, deleteNote }) {
  return (
    <>
      {notes.map(note => {
        return (
          <li key={note.id} className="note-card">
            <div className="note-body">
              {note.body}
            </div>
            <div className="btn-container">
              <button type="button" className="edel-btn" onClick={() => editNote(note.id, note.body)}>Edit</button>
              <button type="button" className="edel-btn" onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </li>
        );
      })}
    </>
  );
}