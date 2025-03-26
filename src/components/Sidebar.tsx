import { useState } from 'react';
import { BuildingLibraryIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

type DropdownKey = 'home' | 'calendar';

interface SidebarProps {
  sidebarToggle: boolean;
}

const Sidebar = ({ sidebarToggle }: SidebarProps) => {
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
    <aside 
      className={`
        flex flex-col h-screen bg-white border-r border-slate-200
        transition-all duration-300 ease-in-out
        ${sidebarToggle ? 'w-64 max-md:w-0 max-md:opacity-0' : 'w-20 max-md:w-64'}
      `}
    >
      {/* Logo */}
      <div className='flex items-center h-16 px-6 border-b border-slate-200'>
        <BuildingLibraryIcon className='size-8 text-indigo-600' />
      </div>
      
      {/* Menu */}
      <nav className='flex-1 px-4 py-4 overflow-y-auto'>
        <ul className='flex flex-col gap-2'>
          {/* Home Dropdown */}
          <li className='rounded-lg overflow-hidden'>
            <button
              onClick={() => toggleDropdown('home')}
              className="flex items-center justify-between w-full px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-150"
            >
              <span className='font-medium'>Home</span>
              <ChevronDownIcon 
                className={`size-4 transition-transform duration-200 ${dropdownStates.home ? 'rotate-180' : ''}`}
              />
            </button>
            <div className={`transition-all duration-200 ease-in-out ${dropdownStates.home ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <ul className='px-3 py-2 space-y-1'>
                <li className='px-3 py-1 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded cursor-pointer transition-colors duration-150'>Option 1</li>   
                <li className='px-3 py-1 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded cursor-pointer transition-colors duration-150'>Option 2</li>
                <li className='px-3 py-1 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded cursor-pointer transition-colors duration-150'>Option 3</li>
              </ul>
            </div>
          </li>
          
          {/* Calendar Dropdown */}
          <li className='rounded-lg overflow-hidden'>
            <button
              onClick={() => toggleDropdown('calendar')}
              className="flex items-center justify-between w-full px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-150"
            >
              <span className='font-medium'>Calendar</span>
              <ChevronDownIcon 
                className={`size-4 transition-transform duration-200 ${dropdownStates.calendar ? 'rotate-180' : ''}`}
              />
            </button>
            <div className={`transition-all duration-200 ease-in-out ${dropdownStates.calendar ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <ul className='px-3 py-2 space-y-1'>
                <li className='px-3 py-1 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded cursor-pointer transition-colors duration-150'>Today</li>
                <li className='px-3 py-1 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded cursor-pointer transition-colors duration-150'>This Week</li>
                <li className='px-3 py-1 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded cursor-pointer transition-colors duration-150'>This Month</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 