import { useState, useEffect } from 'react';
import { 
  ChevronDownIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  CalculatorIcon,
  DocumentTextIcon,
  BookmarkIcon,
  HomeIcon,
  ChartPieIcon,
  DocumentChartBarIcon,
  CubeIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

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

interface MenuItem {
  label: string;
  path: string;
}

interface MenuSection {
  key: DropdownKey;
  label: string;
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>>;
  items: MenuItem[];
}

interface HeaderItem {
  key: string;
  label: string;
  icon: React.ForwardRefExoticComponent<any>;
  breakpoint: number;
  items?: (MenuItem | string)[];
}

const BREAKPOINTS = {
  resources: 920,
  products: 820,
  reports: 720,
  analytics: 620,
  home: 520,
};

const Sidebar = ({ sidebarToggle }: SidebarProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);

  const toggleDropdown = (key: DropdownKey) => {
    setActiveDropdown(prev => prev === key ? null : key);
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

  const menuItems: MenuSection[] = [
    {
      key: 'projects' as DropdownKey,
      label: 'Projects',
      icon: ClipboardDocumentListIcon,
      items: [
        { label: 'Active Projects', path: '/project-tree' },
        { label: 'Completed Projects', path: '#' },
        { label: 'Project Timeline', path: '#' },
        { label: 'Project Analytics', path: '#' }
      ]
    },
    {
      key: 'budget' as DropdownKey,
      label: 'Budget',
      icon: BanknotesIcon,
      items: [
        { label: 'Overview', path: '#' },
        { label: 'Allocations', path: '#' },
        { label: 'Expenses', path: '#' },
        { label: 'Forecasting', path: '#' }
      ]
    },
    {
      key: 'financing' as DropdownKey,
      label: 'Financing',
      icon: CurrencyDollarIcon,
      items: [
        { label: 'Revenue', path: '#' },
        { label: 'Investments', path: '#' },
        { label: 'Cash Flow', path: '#' },
        { label: 'Financial Reports', path: '#' }
      ]
    },
    {
      key: 'utilization' as DropdownKey,
      label: 'Utilization',
      icon: UserGroupIcon,
      items: [
        { label: 'Resource Planning', path: '#' },
        { label: 'Team Utilization', path: '#' },
        { label: 'Capacity Planning', path: '#' },
        { label: 'Efficiency Metrics', path: '#' }
      ]
    },
    {
      key: 'reports' as DropdownKey,
      label: 'Reports',
      icon: ChartBarIcon,
      items: [
        { label: 'Performance Reports', path: '#' },
        { label: 'Financial Reports', path: '#' },
        { label: 'Resource Reports', path: '#' },
        { label: 'Custom Reports', path: '#' }
      ]
    },
    {
      key: 'estimates' as DropdownKey,
      label: 'Estimates',
      icon: CalculatorIcon,
      items: [
        { label: 'Create Estimate', path: '#' },
        { label: 'Pending Estimates', path: '#' },
        { label: 'Approved Estimates', path: '#' },
        { label: 'Templates', path: '#' }
      ]
    },
    {
      key: 'contracts' as DropdownKey,
      label: 'Contracts',
      icon: DocumentTextIcon,
      items: [
        { label: 'Active Contracts', path: '#' },
        { label: 'Contract Templates', path: '#' },
        { label: 'Negotiations', path: '#' },
        { label: 'Archive', path: '#' }
      ]
    },
    {
      key: 'references' as DropdownKey,
      label: 'References',
      icon: BookmarkIcon,
      items: [
        { label: 'Client References', path: '#' },
        { label: 'Case Studies', path: '#' },
        { label: 'Testimonials', path: '#' },
        { label: 'Portfolio', path: '#' }
      ]
    }
  ];

  const headerItems: HeaderItem[] = [
    {
      key: 'home',
      label: 'Home',
      icon: HomeIcon,
      breakpoint: BREAKPOINTS.home,
    },
    {
      key: 'analytics',
      label: 'Analytics',
      icon: ChartPieIcon,
      breakpoint: BREAKPOINTS.analytics,
    },
    {
      key: 'reports',
      label: 'Reports',
      icon: DocumentChartBarIcon,
      breakpoint: BREAKPOINTS.reports,
    },
    {
      key: 'products',
      label: 'Products',
      icon: CubeIcon,
      breakpoint: BREAKPOINTS.products,
      items: ['Product 1', 'Product 2', 'Product 3']
    },
    {
      key: 'resources',
      label: 'Resources',
      icon: BookmarkIcon,
      breakpoint: BREAKPOINTS.resources,
      items: ['Documentation', 'Support', 'Community']
    }
  ];

  return (
    <aside 
      className={`
        mb-6 bg-white border border-slate-200 rounded-xl
        transition-all duration-300 ease-in-out flex flex-col
        ${sidebarToggle ? 'w-64 opacity-100' : 'w-0 opacity-0 hidden'}
      `}
    >
      {/* Menu */}
      <nav className='flex-1 px-4 py-4 overflow-y-auto h-full'>
        {/* Header Items */}
        <ul className='flex flex-col gap-2 mb-4'>
          {headerItems.map((item) => (
            windowWidth <= item.breakpoint && (
              <li key={item.key} className='rounded-lg overflow-hidden'>
                {item.items ? (
                  // Dropdown items (Products & Resources)
                  <>
                    <button
                      onClick={() => toggleDropdown(item.key as DropdownKey)}
                      className={`
                        flex items-center justify-between w-full px-3 py-2 
                        rounded-lg transition-colors duration-150 cursor-pointer
                        ${activeDropdown === item.key 
                          ? 'text-slate-900 bg-slate-100' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }
                      `}
                    >
                      <span className="flex items-center gap-2">
                        <item.icon className={`size-5 ${activeDropdown === item.key ? 'text-blue-600' : ''}`} />
                        <span className='font-medium'>{item.label}</span>
                      </span>
                      <ChevronDownIcon 
                        className={`size-4 transition-transform duration-200 
                          ${dropdownStates[item.key as DropdownKey] ? 'rotate-180' : ''}
                          ${activeDropdown === item.key ? 'text-blue-600' : ''}
                        `}
                      />
                    </button>
                    <div className={`transition-all duration-200 ease-in-out ${dropdownStates[item.key as DropdownKey] ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <ul className='px-3 py-2 space-y-1'>
                        {item.items.map((subItem, index) => (
                          <li 
                            key={index}
                            className={`
                              px-3 py-1 text-sm rounded cursor-pointer transition-colors duration-150
                              ${activeDropdown === item.key 
                                ? 'text-slate-900 hover:bg-slate-100' 
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                              }
                            `}
                          >
                            <Link
                              to={typeof subItem === 'string' ? '#' : subItem.path}
                              className={`
                                px-3 py-1 text-sm rounded cursor-pointer transition-colors duration-150 block
                                ${activeDropdown === item.key 
                                  ? 'text-slate-900 hover:bg-slate-100' 
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                }
                              `}
                            >
                              {typeof subItem === 'string' ? subItem : subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  // Regular items (Home, Analytics, Reports)
                  <Link
                    to={item.key === 'home' ? '/' : `/${item.key}`}
                    className={`
                      flex items-center gap-2 px-3 py-2 
                      rounded-lg transition-colors duration-150
                      text-slate-600 hover:text-slate-900 hover:bg-slate-50
                    `}
                  >
                    <item.icon className="size-5" />
                    <span className='font-medium'>{item.label}</span>
                  </Link>
                )}
              </li>
            )
          ))}
        </ul>

        {/* Divider */}
        <div className="h-px bg-slate-200 mb-4" />

        {/* Original Menu Items */}
        <ul className='flex flex-col gap-2'>
          {menuItems.map((menu) => (
            <li key={menu.key} className='rounded-lg overflow-hidden'>
              <button
                onClick={() => toggleDropdown(menu.key)}
                className={`
                  flex items-center justify-between w-full px-3 py-2 
                  rounded-lg transition-colors duration-150 cursor-pointer
                  ${activeDropdown === menu.key 
                    ? 'text-slate-900 bg-slate-100' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {menu.icon && <menu.icon className={`size-5 ${activeDropdown === menu.key ? 'text-blue-600' : ''}`} />}
                  <span className='font-medium'>{menu.label}</span>
                </span>
                <ChevronDownIcon 
                  className={`size-4 transition-transform duration-200 
                    ${dropdownStates[menu.key] ? 'rotate-180' : ''}
                    ${activeDropdown === menu.key ? 'text-blue-600' : ''}
                  `}
                />
              </button>
              <div className={`transition-all duration-200 ease-in-out ${dropdownStates[menu.key] ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <ul className='px-3 py-2 space-y-1'>
                  {menu.items.map((item, index) => (
                    <li 
                      key={index}
                      className={`
                        px-3 py-1 text-sm rounded cursor-pointer transition-colors duration-150
                        ${activeDropdown === menu.key 
                          ? 'text-slate-900 hover:bg-slate-100' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }
                      `}
                    >
                      <Link
                        to={item.path}
                        className="block w-full h-full"
                      >
                        {item.label}
                      </Link>
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