import { Route, Routes } from 'react-router-dom'
import DesignA from './design-a-components/DesignA'
import DesignB from './design-b-components/DesignB'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DesignA />} />
      <Route path="/A" element={<DesignA />} />
      <Route path="/B" element={<DesignB />} />
      <Route path="*" element={<DesignA />} />
    </Routes>
  )
}

export default App
