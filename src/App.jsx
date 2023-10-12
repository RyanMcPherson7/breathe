import { Route, Routes } from 'react-router-dom'
import PageTemplate from './components/page-template'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate designVersion="A" />} />
      <Route path="/A" element={<PageTemplate designVersion="A" />} />
      <Route path="/B" element={<PageTemplate designVersion="B" />} />
      <Route path="*" element={<PageTemplate designVersion="A" />} />
    </Routes>
  )
}

export default App
