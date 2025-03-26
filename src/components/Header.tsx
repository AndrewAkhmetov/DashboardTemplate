import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  sidebarToggle: boolean;
  setSidebarToggle: (value: boolean) => void;
}

const Header = ({ sidebarToggle, setSidebarToggle }: HeaderProps) => {
  return (
    <header className='sticky top-0 z-30 flex flex-row items-center h-16 px-6 bg-white border-b border-slate-200 shadow-sm'>
      <button 
        className='p-1.5 rounded-lg hover:bg-slate-100 transition-colors duration-150'
        onClick={() => setSidebarToggle(!sidebarToggle)}
      >
        <Bars3CenterLeftIcon className='size-6 text-slate-600' />
      </button>
      <nav className='ml-8'>
        <ul className='flex flex-row gap-8'>
          <li className='text-slate-600 hover:text-slate-900 cursor-pointer transition-colors duration-150'>Overview</li>
          <li className='text-slate-600 hover:text-slate-900 cursor-pointer transition-colors duration-150'>Analytics</li>
          <li className='text-slate-600 hover:text-slate-900 cursor-pointer transition-colors duration-150'>Reports</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 