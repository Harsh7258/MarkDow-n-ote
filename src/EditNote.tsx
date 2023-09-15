import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
    onSubmit : (id: string, data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export function EditNote({onSubmit, onAddTag, availableTags }: EditNoteProps){
    const note = useNote()
    return(
        <>
        <h1 className="my-3">Edit Note</h1>
        <NoteForm 
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={data => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}/>
        </>
    )
}