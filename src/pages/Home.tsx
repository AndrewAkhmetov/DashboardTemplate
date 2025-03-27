import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const Home = () => {
  // Column chart options
  const columnChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 4
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
        style: {
          fontSize: '12px'
        }
      },
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      theme: 'light',
      style: {
        fontSize: '12px'
      },
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        return '<div class="p-2">' +
          '<div class="font-medium text-slate-900">' + w.globals.seriesNames[seriesIndex] + '</div>' +
          '<div class="text-slate-900">$ ' + series[seriesIndex][dataPointIndex] + ' thousands</div>' +
          '</div>'
      }
    },
    grid: {
      borderColor: '#f1f1f1',
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 10
      }
    },
    colors: ['#4F46E5', '#10B981', '#6B7280']
  };

  const columnChartSeries = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58]
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105]
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48]
    }
  ];

  // Donut chart options
  const donutChartOptions: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Operating Expenses', 'Marketing', 'Sales', 'Development'],
    colors: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'],
    plotOptions: {
      pie: {
        donut: {
          size: '75%'
        }
      }
    },
    legend: {
      position: 'bottom',
      fontSize: '13px',
      markers: {
        size: 6
      },
      itemMargin: {
        horizontal: 8,
        vertical: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      theme: 'light',
      style: {
        fontSize: '12px'
      },
      custom: function({ series, seriesIndex, w }) {
        return '<div class="p-2">' +
          '<div class="text-slate-900">' + w.globals.labels[seriesIndex] + ': ' + series[seriesIndex] + '%</div>' +
          '</div>'
      }
    }
  };

  const donutChartSeries = [45, 25, 20, 10];

  // Area chart options
  const areaChartOptions: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2024-03-01T00:00:00.000Z',
        '2024-03-02T00:00:00.000Z',
        '2024-03-03T00:00:00.000Z',
        '2024-03-04T00:00:00.000Z',
        '2024-03-05T00:00:00.000Z',
        '2024-03-06T00:00:00.000Z',
        '2024-03-07T00:00:00.000Z'
      ],
      labels: {
        style: {
          fontSize: '12px'
        }
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    },
    tooltip: {
      theme: 'light',
      shared: true,
      style: {
        fontSize: '12px'
      },
      custom: function({ series, dataPointIndex, w }) {
        const date = new Date(w.globals.seriesX[0][dataPointIndex]).toLocaleDateString('en-US', { 
          day: 'numeric',
          month: 'short'
        });
        return '<div class="p-2">' +
          '<div class="font-medium text-slate-900 mb-1">' + date + '</div>' +
          w.globals.seriesNames.map((name: string, index: number) => {
            return '<div class="text-slate-900">' + name + ': $ ' + series[index][dataPointIndex] + 'k</div>'
          }).join('') +
          '</div>'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 100]
      }
    },
    colors: ['#4F46E5', '#10B981']
  };

  const areaChartSeries = [
    {
      name: 'Revenue',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'Expenses',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ];

  // Sample projects data
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      budget: 125000,
      spent: 95000,
      status: 'In Progress',
      progress: 75
    },
    {
      id: 2,
      name: 'Mobile App Development',
      budget: 250000,
      spent: 180000,
      status: 'In Progress',
      progress: 65
    },
    {
      id: 3,
      name: 'Cloud Infrastructure',
      budget: 300000,
      spent: 300000,
      status: 'Completed',
      progress: 100
    },
    {
      id: 4,
      name: 'Marketing Campaign',
      budget: 85000,
      spent: 42500,
      status: 'In Progress',
      progress: 50
    },
    {
      id: 5,
      name: 'Data Analytics Platform',
      budget: 175000,
      spent: 35000,
      status: 'Early Stages',
      progress: 20
    },
    {
      id: 6,
      name: 'Security Upgrade',
      budget: 120000,
      spent: 108000,
      status: 'Final Review',
      progress: 90
    },
    {
      id: 7,
      name: 'CRM Integration',
      budget: 95000,
      spent: 85500,
      status: 'Final Review',
      progress: 90
    },
    {
      id: 8,
      name: 'E-commerce Platform',
      budget: 280000,
      spent: 252000,
      status: 'In Progress',
      progress: 85
    },
    {
      id: 9,
      name: 'Employee Portal',
      budget: 90000,
      spent: 72000,
      status: 'In Progress',
      progress: 80
    },
    {
      id: 10,
      name: 'Business Intelligence',
      budget: 150000,
      spent: 15000,
      status: 'Early Stages',
      progress: 10
    }
  ];

  return (
    <div className='p-6'>
      <div className='grid grid-cols-12 gap-4'>
        {/* Left Column */}
        <div className='col-span-12 md:col-span-8 space-y-4'>
          {/* Top Cards Grid */}
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-12 md:col-span-6'>
              <div className='h-full bg-white rounded-xl shadow-sm border border-slate-200 p-4'>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Budget Overview</h2>
                <div className='space-y-3'>
                  <div className='p-3 bg-slate-50 rounded-lg border border-slate-200'>
                    <p className='text-slate-600 text-sm'>Total Budget</p>
                    <p className='text-xl font-semibold text-slate-900'>$24,000</p>
                  </div>
                  <div className='grid grid-cols-2 gap-3'>
                    <div className='p-3 bg-green-50 rounded-lg border border-green-200'>
                      <p className='text-green-600 text-sm'>Income</p>
                      <p className='text-lg font-semibold text-green-700'>$12,000</p>
                    </div>
                    <div className='p-3 bg-red-50 rounded-lg border border-red-200'>
                      <p className='text-red-600 text-sm'>Expenses</p>
                      <p className='text-lg font-semibold text-red-700'>$8,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6'>
              <div className='h-full bg-white rounded-xl shadow-sm border border-slate-200 p-4'>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Recent Transactions</h2>
                <div className='space-y-2'>
                  {[1, 2, 3].map((item) => (
                    <div key={item} className='flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-200'>
                      <div>
                        <p className='font-medium text-slate-900 text-sm'>Transaction #{item}</p>
                        <p className='text-xs text-slate-500'>March {item + 20}, 2024</p>
                      </div>
                      <span className='text-slate-900 font-medium text-sm'>$250.00</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column Chart */}
          <div className='bg-white rounded-xl shadow-sm border border-slate-200 p-4'>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Financial Performance</h2>
            <div>
              <ReactApexChart
                options={columnChartOptions}
                series={columnChartSeries}
                type="bar"
                height={220}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Donut Chart */}
        <div className='col-span-12 md:col-span-4'>
          <div className='h-full bg-white rounded-xl shadow-sm border border-slate-200 p-4'>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Expense Distribution</h2>
            <div className='flex items-center justify-center h-[calc(100%-2rem)]'>
              <ReactApexChart
                options={{
                  ...donutChartOptions,
                  chart: {
                    ...donutChartOptions.chart,
                    height: '100%'
                  }
                }}
                series={donutChartSeries}
                type="donut"
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Area Chart - Full Width */}
        <div className='col-span-12'>
          <div className='bg-white rounded-xl shadow-sm border border-slate-200 p-4'>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Weekly Revenue & Expenses</h2>
            <div>
              <ReactApexChart
                options={areaChartOptions}
                series={areaChartSeries}
                type="area"
                height={250}
              />
            </div>
          </div>
        </div>

        {/* Projects Table */}
        <div className='col-span-12'>
          <div className='bg-white rounded-xl shadow-sm border border-slate-200 p-4'>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">Top Projects</h2>
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr className='border-b border-slate-200'>
                    <th className='text-left py-3 px-4 text-sm font-semibold text-slate-900'>#</th>
                    <th className='text-left py-3 px-4 text-sm font-semibold text-slate-900'>Project Name</th>
                    <th className='text-left py-3 px-4 text-sm font-semibold text-slate-900'>Budget</th>
                    <th className='text-left py-3 px-4 text-sm font-semibold text-slate-900'>Spent</th>
                    <th className='text-left py-3 px-4 text-sm font-semibold text-slate-900'>Status</th>
                    <th className='text-left py-3 px-4 text-sm font-semibold text-slate-900'>Progress</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  {projects.map((project, index) => (
                    <tr key={project.id} className='hover:bg-slate-50'>
                      <td className='py-3 px-4'>
                        <span className='text-slate-600'>{index + 1}</span>
                      </td>
                      <td className='py-3 px-4'>
                        <span className='font-medium text-slate-900'>{project.name}</span>
                      </td>
                      <td className='py-3 px-4'>
                        <span className='text-slate-600'>${project.budget.toLocaleString()}</span>
                      </td>
                      <td className='py-3 px-4'>
                        <span className='text-slate-600'>${project.spent.toLocaleString()}</span>
                      </td>
                      <td className='py-3 px-4'>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          project.status === 'Early Stages' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-purple-100 text-purple-800'}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className='py-3 px-4'>
                        <div className='flex items-center gap-2'>
                          <div className='flex-1 h-2 bg-slate-100 rounded-full overflow-hidden'>
                            <div 
                              className={`h-full rounded-full
                                ${project.progress >= 90 ? 'bg-green-500' :
                                project.progress >= 50 ? 'bg-blue-500' :
                                'bg-yellow-500'}`}
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className='text-sm text-slate-600 min-w-[2.5rem]'>{project.progress}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 