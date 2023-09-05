import { NoteForm } from "./NoteForm";
import "bootstrap/dist/css/bootstrap.min.css";

export function NewNote(){
    return(
        <>
        <h1 className="my-3">New Note</h1>
        <NoteForm />
        </>
    )
}