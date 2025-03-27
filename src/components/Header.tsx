import { useState, useRef, useEffect } from 'react';
import { 
  Bars3CenterLeftIcon, 
  XMarkIcon,
  BellIcon, 
  ChevronDownIcon,
  UserCircleIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline';

interface HeaderProps {
  sidebarToggle: boolean;
  setSidebarToggle: (value: boolean) => void;
}

const BREAKPOINTS = {
  resources: 920,
  products: 820,
  reports: 720,
  analytics: 620,
  home: 520,
};

const MOBILE_BREAKPOINT = 720;

const Header = ({ sidebarToggle, setSidebarToggle }: HeaderProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdownStates, setDropdownStates] = useState({
    products: false,
    resources: false
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  
  const profileRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLLIElement>(null);
  const resourcesRef = useRef<HTMLLIElement>(null);

  // Add window resize listener and handle initial sidebar state
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setSidebarToggle(width > MOBILE_BREAKPOINT);
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setSidebarToggle]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Handle profile modal
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileModal(false);
      }
      
      // Handle products dropdown
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setDropdownStates(prev => ({ ...prev, products: false }));
      }
      
      // Handle resources dropdown
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setDropdownStates(prev => ({ ...prev, resources: false }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (key: 'products' | 'resources') => {
    setDropdownStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <header className='sticky top-0 z-30 flex flex-row items-center h-20 px-6 bg-white border-b border-slate-200 shadow-sm'>
      {/* Logo */}
      <div className='flex items-center w-64'>
        <BuildingLibraryIcon className='size-8 text-indigo-600 mr-2' />
        <h1 className='text-xl font-bold text-indigo-600'>Dashboard</h1>
      </div>

      {/* Sidebar Toggle Button */}
      <button 
        className={`
          p-1.5 ml-5 rounded-lg transition-all duration-150 cursor-pointer
          ${sidebarToggle 
            ? 'bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300' 
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200'
          }
          active:scale-95
        `}
        onClick={() => setSidebarToggle(!sidebarToggle)}
      >
        {sidebarToggle ? (
          <XMarkIcon className='size-6' />
        ) : (
          <Bars3CenterLeftIcon className='size-6' />
        )}
      </button>

      {/* Navigation */}
      <nav className='flex-1 ml-8'>
        <ul className='flex flex-row items-center gap-6'>
          {windowWidth > BREAKPOINTS.home && (
            <li>
              <a href="#" className='text-slate-600 hover:text-slate-900 font-medium transition-colors duration-150'>
                Home
              </a>
            </li>
          )}
          
          {windowWidth > BREAKPOINTS.analytics && (
            <li>
              <a href="#" className='text-slate-600 hover:text-slate-900 font-medium transition-colors duration-150'>
                Analytics
              </a>
            </li>
          )}
          
          {windowWidth > BREAKPOINTS.reports && (
            <li>
              <a href="#" className='text-slate-600 hover:text-slate-900 font-medium transition-colors duration-150'>
                Reports
              </a>
            </li>
          )}

          {/* Products Dropdown */}
          {windowWidth > BREAKPOINTS.products && (
            <li className='relative' ref={productsRef}>
              <button
                onClick={() => toggleDropdown('products')}
                className='flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium transition-colors duration-150 cursor-pointer'
              >
                Products
                <ChevronDownIcon className={`size-4 transition-transform duration-200 ${dropdownStates.products ? 'rotate-180' : ''}`} />
              </button>
              {dropdownStates.products && (
                <div className='absolute top-full -left-2 mt-7 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2'>
                  <a href="#" className='block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50'>Product 1</a>
                  <a href="#" className='block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50'>Product 2</a>
                  <a href="#" className='block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50'>Product 3</a>
                </div>
              )}
            </li>
          )}

          {/* Resources Dropdown */}
          {windowWidth > BREAKPOINTS.resources && (
            <li className='relative' ref={resourcesRef}>
              <button
                onClick={() => toggleDropdown('resources')}
                className='flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium transition-colors duration-150 cursor-pointer'
              >
                Resources
                <ChevronDownIcon className={`size-4 transition-transform duration-200 ${dropdownStates.resources ? 'rotate-180' : ''}`} />
              </button>
              {dropdownStates.resources && (
                <div className='absolute top-full -left-2 mt-7 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2'>
                  <a href="#" className='block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50'>Documentation</a>
                  <a href="#" className='block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50'>Support</a>
                  <a href="#" className='block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50'>Community</a>
                </div>
              )}
            </li>
          )}
        </ul>
      </nav>

      {/* Right Section */}
      <div className='flex items-center gap-4'>
        {/* Notification Button */}
        <button className='p-2 rounded-lg hover:bg-slate-100 transition-colors duration-150 relative cursor-pointer active:opacity-70'>
          <BellIcon className='size-6 text-slate-600' />
          <span className='absolute top-1 right-1 size-2 bg-red-500 rounded-full'></span>
        </button>

        {/* Profile Button & Modal */}
        <div className='relative' ref={profileRef}>
          <button 
            onClick={() => setShowProfileModal(!showProfileModal)}
            className='p-2 rounded-lg hover:bg-slate-100 transition-colors duration-150 cursor-pointer active:opacity-70'
          >
            <UserCircleIcon className='size-6 text-slate-600' />
          </button>

          {/* Profile Modal */}
          {showProfileModal && (
            <div className='absolute top-full -right-5 mt-5 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2'>
              <div className='px-4 py-3 border-b border-slate-200'>
                <p className='font-medium text-slate-900'>John Doe</p>
                <p className='text-sm text-slate-500'>john.doe@example.com</p>
              </div>
              <a href="#" className='block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50'>Profile</a>
              <a href="#" className='block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50'>Settings</a>
              <button className='w-full text-left px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 mt-2'>
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 