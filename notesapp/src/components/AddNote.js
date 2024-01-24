import classes from "../style.module.css";

function AddNote({
  currentNote,
  setCurrentNote,
  notesList,
  setNotesList,
  currentEditNote,
  setCurrentEditNote
}) {
  console.log(currentNote, notesList);
  function handleNotOnSubmit(event) {
    event.preventDefault();

    if (!!currentEditNote) {
      const findCurrentEditedNoteIndex = notesList.findIndex(
        (item) => item.id === currentEditNote.id
      );

      notesList[findCurrentEditedNoteIndex] = {
        ...notesList[findCurrentEditedNoteIndex],
        label: currentNote,
      };
    } else {
      notesList.push({
        id: notesList.length + 1,
        label: currentNote,
      });
    }

    setNotesList(notesList);
    setCurrentNote("");
    setCurrentEditNote(null)
  }

  return (
    <form onSubmit={handleNotOnSubmit} className={classes.form}>
      <input
        name="current-note"
        id="current-note"
        placeholder="Enter note"
        className={classes.input}
        value={currentNote || ""}
        onChange={(event) => setCurrentNote(event.target.value)}
      />

      <button type="submit" className={classes.button}>
        {!!currentEditNote ? "Edit Note" : "Add Note"}
      </button>
    </form>
  );
}

export default AddNote;
