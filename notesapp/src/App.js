import { useState } from "react";
import AddNote from "./components/AddNote";
import classes from "./style.module.css";
import NoteList from "./components/NoteList";

function App() {
  const [currentNote, setCurrentNote] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [currentEditNote, setCurrentEditNote] = useState(null);

  return (
    <div className={classes.App}>
      <AddNote
        currentNote={currentNote}
        notesList={notesList}
        setNotesList={setNotesList}
        setCurrentNote={setCurrentNote}
        currentEditNote={currentEditNote}
        setCurrentEditNote={setCurrentEditNote}
      />
      <NoteList
        notesList={notesList}
        setCurrentEditNote={setCurrentEditNote}
        setCurrentNote={setCurrentNote}
        setNotesList={setNotesList}
      />
    </div>
  );
}

export default App;
