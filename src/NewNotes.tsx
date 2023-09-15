import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";
import "bootstrap/dist/css/bootstrap.min.css";

type NewNoteProps = {
    onSubmit : (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export function NewNote({onSubmit, onAddTag, availableTags }: NewNoteProps){
    return(
        <>
        <h1 className="my-3">New Note</h1>
        <NoteForm 
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}/>
        </>
    )
}