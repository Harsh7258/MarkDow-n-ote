import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from 'react-router-dom';

import { NewNote } from './NewNotes';
import { Container } from 'react-bootstrap';

// Type --> is a convenient way to refer to the different properties and functions that a value has. A value is anything that you can assign to a variable e.g., a number, a string, an array, an object, and a function.

//Types are better for working with functions, complex types, etc

export type Note = {
  id: string
} & NoteData

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
  return (
    <>
     <Container className='my-3'>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/new' element={<NewNote/>} />
        <Route path='/:id'>
          <Route index element={<h1>show</h1>} />
          <Route path='edit' element={<h1>edit</h1>} />
        </Route>
        <Route path='*' element={<Navigate to={"/"}/>} />
      </Routes>
    </Container>
    </>
  )
}

export default App
