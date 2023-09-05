import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from 'react-router-dom';

// import { NewNote } from './NewNotes';
import { Container } from 'react-bootstrap';


function App() {

  return (
    <>
     <Container className='my-3'>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        {/* <Route path='/new' element={<NewNote/>} /> */}
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
