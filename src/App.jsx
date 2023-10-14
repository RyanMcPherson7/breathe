import { Route, Routes } from 'react-router-dom'
import PageTemplate from './components/page-template'
import Welcome from './components/welcome'
import FormA from './components/form-a'
import FormB from './components/form-b'
import Recommendation from './components/recommendation'
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
      <Route path="/A/form" element={<PageTemplate content={FormA} />} />
      <Route path="/B/form" element={<PageTemplate content={FormB} />} />
      <Route
        path="/A/recommendation"
        element={<PageTemplate content={Recommendation} />}
      />
      <Route
        path="/B/recommendation"
        element={<PageTemplate content={Recommendation} />}
      />
      <Route
        path="*"
        element={<PageTemplate designVersion="A" content={Welcome} />}
      />
    </Routes>
  )
}

export default App
