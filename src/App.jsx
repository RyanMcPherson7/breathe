import { Route, Routes } from 'react-router-dom'
import PageTemplate from './components/page-template'
import Welcome from './components/welcome'
import './App.css'

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={<PageTemplate designVersion="A" content={Welcome} />}
      />
      <Route
        path="/A"
        element={<PageTemplate designVersion="A" content={Welcome} />}
      />
      <Route
        path="/B"
        element={<PageTemplate designVersion="B" content={Welcome} />}
      />
      <Route
        path="*"
        element={<PageTemplate designVersion="A" content={Welcome} />}
      />
    </Routes>
  )
}

export default App
