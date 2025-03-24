import { useState } from 'react';
import { Bars3CenterLeftIcon, BuildingLibraryIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

type DropdownKey = 'home' | 'calendar';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [dropdownStates, setDropdownStates] = useState({
    home: false,
    calendar: false
  });

  const toggleDropdown = (key: DropdownKey) => {
    setDropdownStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={
        `flex flex-col h-screen border-r border-gray-200 px-5 overflow-y-hidden overflow-x-hidden
          ${sidebarToggle ? 'w-74 max-md:w-0 max-md:px-0' : 'w-24 max-md:w-74'}`
        }>
        {/* Logo */}
        <div className='py-5'>
          <BuildingLibraryIcon className='size-10' />
        </div>
        {/* Menu */}
        <nav className='overflow-y-hidden overflow-x-hidden'>
          <ul className='flex flex-col gap-4'>
            {/* Home Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown('home')}
                className="flex justify-between w-full"
              >
                <span>Home</span>
                <ChevronDownIcon 
                  className={`size-4 ${dropdownStates.home ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`${dropdownStates.home ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                <ul className='pl-5 py-2 space-y-2'>
                  <li>Option 1</li>   
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              </div>
            </li>
            {/* Calendar Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown('calendar')}
                className="flex justify-between w-full"
              >
                <span>Calendar</span>
                <ChevronDownIcon 
                  className={`size-4 ${dropdownStates.calendar ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`${dropdownStates.calendar ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
                <ul className='pl-5 py-2 space-y-2'>
                  <li>Today</li>
                  <li>This Week</li>
                  <li>This Month</li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

      </aside>
      {/* Content */}
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          {/* Header */}
          <header className='sticky flex flex-row gap-4 items-center'>
            <button className='btn btn-sm' onClick={() => setSidebarToggle(!sidebarToggle)}>
              <Bars3CenterLeftIcon className='size-5' />
            </button>
            <nav>
              <ul className='flex flex-row gap-4'>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ul>
            </nav>
          </header>
          {/* Main Content */}
          <div className='p-4 max-auto'>
            {/* Grid Area */}
            <div className='grid grid-cols-12 gap-4'>
              {/* Grid Item */}
              <div className='col-span-12 md:col-span-7'>
                Hello
              </div>
              {/* Grid Item */}
              <div className='col-span-12 md:col-span-5'>
                World
              </div>  
            </div>
          </div>
        </main>

      </div>
    </div>
  )
}

export default App

