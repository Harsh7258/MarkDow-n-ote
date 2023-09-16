import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useMemo } from "react";
import {v4 as uuidV4} from "uuid";

import { useLocalStorage } from "./useLocalStroage";
import { NewNote } from './NewNotes';
import { NoteList } from "./NoteList";
import { Container } from 'react-bootstrap';
import { NoteLayout } from "./NoteLayout";
import { Note } from "./Note";
import { EditNote } from "./EditNote";

// Type --> is a convenient way to refer to the different properties and functions that a value has. A value is anything that you can assign to a variable e.g., a number, a string, an array, an object, and a function.

//Types are better for working with functions, complex types, etc

export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

export type RawNoteData = {
  title: string
  markdown: string 
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}
export type Tag = {
  id: string
  label: string
}

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);

  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  const noteWithTags = useMemo(() => {
    return notes.map(note => {
      return {...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  }, [notes, tags]);
  // it will loop through all notes and keep the data of notes with ids of tagIds
  
  function onCreateNote({tags, ...data}: NoteData){
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        {...data, id: uuidV4(), tagIds: tags.map(tag => tag.id)},
      ]
    })
  }

  function onUpdateNote (id: string, {tags, ...data}: NoteData){
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if(note.id === id){
          return {...note, ...data, tagIds: tags.map(tag => tag.id)}
        } else {
          return note
        }
      })
    })
  }

  const onDelelteNote = (id: string) => {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id)
    });
  };

  function addTag(tag: Tag){
    setTags(prev => [...prev, tag])
  }
  
  return (
    <>
     <Container className='my-3'>
      <Routes>
        <Route path='/' 
        element={
        <NoteList 
        notes={noteWithTags}
        availableTags={tags}/>
        } />
        <Route 
        path='/new' 
        element={
        <NewNote 
        onSubmit={onCreateNote} 
        onAddTag={addTag} 
        availableTags={tags} 
        />} />
        <Route path='/:id' element={<NoteLayout notes={noteWithTags} /> }>
          <Route index 
          element={<Note onDelete={onDelelteNote}/>} />
          <Route 
          path='edit' 
          element={<EditNote 
            onSubmit={onUpdateNote} 
            onAddTag={addTag} 
            availableTags={tags} />} />
        </Route>
        <Route path='*' element={<Navigate to={"/"}/>} />
      </Routes>
    </Container>
    </>
  )
}

export default App
