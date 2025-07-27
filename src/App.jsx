import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import CursorFollower from './components/CursorFollower'

function App() {
  return (
    <>
      <CursorFollower /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
    </>
  )
}

export default App
