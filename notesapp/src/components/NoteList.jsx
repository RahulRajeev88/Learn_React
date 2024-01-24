import classes from "../style.module.css";







function NoteList({ notesList,setNotesList,setCurrentEditNote,setCurrentNote }) {
  
    function handleEdit(getCurrentItem) {
        console.log(getCurrentItem);
        setCurrentEditNote(getCurrentItem)
        setCurrentNote(getCurrentItem.label)
    }

    function handleDelete(getCurrentId) {
      console.log(getCurrentId);
      setNotesList(notesList.filter(item=> item.id !== getCurrentId))
    }


  return(
  <ul className={classes.notelist}>
    {notesList && notesList.length > 0 ? (
      notesList.map((noteItem) => (
        <li key={noteItem.id}>
          <label>{noteItem.label}</label>
          <div>
            <button onClick={()=>handleEdit(noteItem)}>Edit</button>
            <button onClick={()=>handleDelete(noteItem.id)}>Delete</button>
          </div>
        </li>
      ))
    ) : (
      <div className={classes.noNotes}>No Notes Added</div>
    )}
  </ul>
);}

export default NoteList;
