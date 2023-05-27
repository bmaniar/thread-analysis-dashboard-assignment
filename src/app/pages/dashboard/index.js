import React from 'react'
import Loader from '../../components/loader'
import ThreatCard from '../../components/threat-card'
import { useGetDashboardDataQuery } from './service'


const Dashboard = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data = {}, isLoading } = useGetDashboardDataQuery()
  const { highSeverityThreads, spamMessages } = data

  return (
    <div className='min-h-screen'>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Dashboard</h1>
        </div>
      </header>
      <main className='min-h-screen'>
        <div className='flex flex-col mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
          {isLoading ? <Loader /> : (
            <div className='flex justify-center'>
              <ThreatCard title='High Severity Threats' titleColorClass='text-red-600' count={highSeverityThreads} />
              <ThreatCard title='Spam Messages' titleColorClass='text-orange-600' count={spamMessages} />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Dashboard
