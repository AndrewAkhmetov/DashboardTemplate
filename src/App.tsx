import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ProjectTree from './pages/ProjectTree';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        
        {/* Content wrapper */}
        <div className="flex">
          {/* Sidebar */}
          <Sidebar sidebarToggle={sidebarToggle} />
          
          {/* Main content */}
          <main className={`flex-1 transition-all duration-300`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project-tree" element={<ProjectTree />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

