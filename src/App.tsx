import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-gray-50">
        <Sidebar sidebarToggle={sidebarToggle} />
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

