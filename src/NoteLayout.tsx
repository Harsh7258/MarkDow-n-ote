import { Navigate, Outlet, useParams, useOutletContext } from "react-router-dom";
import { Note } from "./App";

type NoteLayoutProps = {
    notes: Note[]
}

export const NoteLayout = ({notes}: NoteLayoutProps) => {
    const {id} = useParams();
    const note = notes.find(n => n.id === id)

    if(note == null) return <Navigate to="/" replace />
    // navigates back to home page when id doesnt exists
    return <Outlet context={note} />
};

export const useNote = () => {
    return useOutletContext<Note>()
}