import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type DropdownKey = 'projects' | 'budget' | 'financing' | 'utilization' | 'reports' | 'estimates' | 'contracts' | 'references';

interface DropdownStates {
  projects: boolean;
  budget: boolean;
  financing: boolean;
  utilization: boolean;
  reports: boolean;
  estimates: boolean;
  contracts: boolean;
  references: boolean;
}

interface SidebarProps {
  sidebarToggle: boolean;
}

const Sidebar = ({ sidebarToggle }: SidebarProps) => {
  const [dropdownStates, setDropdownStates] = useState<DropdownStates>({
    projects: false,
    budget: false,
    financing: false,
    utilization: false,
    reports: false,
    estimates: false,
    contracts: false,
    references: false
  });

  const toggleDropdown = (key: DropdownKey) => {
    setDropdownStates(prev => {
      // Create an object with all dropdowns set to false
      const allClosed = Object.keys(prev).reduce<DropdownStates>((acc, curr) => ({
        ...acc,
        [curr as DropdownKey]: false
      }), {} as DropdownStates);

      // Toggle only the clicked dropdown
      return {
        ...allClosed,
        [key]: !prev[key]
      };
    });
  };

  const menuItems = [
    {
      key: 'projects' as DropdownKey,
      label: 'Projects',
      items: ['Active Projects', 'Completed Projects', 'Project Timeline', 'Project Analytics']
    },
    {
      key: 'budget' as DropdownKey,
      label: 'Budget',
      items: ['Overview', 'Allocations', 'Expenses', 'Forecasting']
    },
    {
      key: 'financing' as DropdownKey,
      label: 'Financing',
      items: ['Revenue', 'Investments', 'Cash Flow', 'Financial Reports']
    },
    {
      key: 'utilization' as DropdownKey,
      label: 'Utilization',
      items: ['Resource Planning', 'Team Utilization', 'Capacity Planning', 'Efficiency Metrics']
    },
    {
      key: 'reports' as DropdownKey,
      label: 'Reports',
      items: ['Performance Reports', 'Financial Reports', 'Resource Reports', 'Custom Reports']
    },
    {
      key: 'estimates' as DropdownKey,
      label: 'Estimates',
      items: ['Create Estimate', 'Pending Estimates', 'Approved Estimates', 'Templates']
    },
    {
      key: 'contracts' as DropdownKey,
      label: 'Contracts',
      items: ['Active Contracts', 'Contract Templates', 'Negotiations', 'Archive']
    },
    {
      key: 'references' as DropdownKey,
      label: 'References',
      items: ['Client References', 'Case Studies', 'Testimonials', 'Portfolio']
    }
  ];

  return (
    <aside 
      className={`
        mb-6 bg-white border border-slate-200 rounded-xl
        transition-all duration-300 ease-in-out
        ${sidebarToggle ? 'w-64' : 'w-20'}
      `}
    >
      {/* Menu */}
      <nav className='flex-1 px-4 py-4 overflow-y-auto'>
        <ul className='flex flex-col gap-2'>
          {menuItems.map((menu) => (
            <li key={menu.key} className='rounded-lg overflow-hidden'>
              <button
                onClick={() => toggleDropdown(menu.key)}
                className="flex items-center justify-between w-full px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-150"
              >
                <span className='font-medium'>{menu.label}</span>
                <ChevronDownIcon 
                  className={`size-4 transition-transform duration-200 ${dropdownStates[menu.key] ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`transition-all duration-200 ease-in-out ${dropdownStates[menu.key] ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <ul className='px-3 py-2 space-y-1'>
                  {menu.items.map((item, index) => (
                    <li 
                      key={index}
                      className='px-3 py-1 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded cursor-pointer transition-colors duration-150'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 