import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './style.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/n8n-automation" element={<ProjectDetail />} />
          <Route path="/project/optima-backup" element={<ProjectDetail />} />
          {/* Bisa tambah route lain nanti */}
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
