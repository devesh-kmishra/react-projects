import { useEffect, useRef, useState } from "react";
import Form from "./Form";
import List from "./List";
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState(() => {
    const localNote = localStorage.getItem('notes');
    if (localNote == null) return [];

    return JSON.parse(localNote);
  });
  const [editing, setEditing] = useState(false);
  const idRef = useRef(null); // For editing the same note

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function submitForm() {
    if (text === '') return;
    setNotes(currentNotes => {
      return [
        ...currentNotes, { id: crypto.randomUUID(), body: text }
      ];
    });

    setText('');
  }

  function editNote(id, body) {
    setEditing(true);
    setText(body);
    idRef.current = id;
  }

  function displayInput(value) {
    setText(value);
  }

  function submitEdit() {
    setNotes(currentNotes => {
      return currentNotes.map(note => {
        if (note.id === idRef.current) {
          note.body = text;
        }
        return note;
      });
    });
    setEditing(false);
    setText('');
  }

  function deleteNote(id) {
    setNotes(currentNotes => {
      return currentNotes.filter(note => note.id !== id);
    });
  }

  return (
    <>
      <Form text={text} editing={editing} submitForm={submitForm} submitEdit={submitEdit} displayInput={displayInput} />
      <List notes={notes} editNote={editNote} deleteNote={deleteNote} />
    </>
  );
}

export default App;