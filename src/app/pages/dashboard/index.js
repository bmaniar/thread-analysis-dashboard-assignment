import React, { Fragment, useEffect } from 'react'
import Loader from '../../components/loader'
import CustomerDropdown from '../../components/customer-dropdown'
import ThreatCard from '../../components/threat-card'
import Table from '../../components/table'
import { HIGH_SEVERITY_THREAT_CARD, SPAM_MESSAGE_THREAT_CARD, DOMAINS_TABLE } from './constants'
import { useLazyGetDashboardDataQuery, useGetCustomerDataQuery } from './service'


const Dashboard = () => {
  const [getDashboardData, dashboardResponse = {}] = useLazyGetDashboardDataQuery('', {
    skip: true
  })
  const { data: dashboardData = {}, isLoading, isFetching, isSuccess } = dashboardResponse
  const { data: customerData = [], isLoading: customerDataIsLoading } = useGetCustomerDataQuery()
  const { highSeverityThreads, spamMessages, domainsMap = {}, totalThreadsCount } = dashboardData

  const handleCustomerOnChange = (newCustomer) => {
    getDashboardData(newCustomer)
  }

  useEffect(() => {
    if (customerData.length) {
      const firstCustomer = customerData[0]
      getDashboardData(firstCustomer.id)
    }
  }, [customerData])

  return (
    <div className='min-h-screen'>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl px-4 py-6 sm:p-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Dashboard</h1>
        </div>
      </header>
      <main className='min-h-screen'>
        <div className='flex flex-col mx-auto max-w-7xl p-6 sm:p-6 lg:p-8'>
          {customerDataIsLoading ? <Loader /> : (
            <CustomerDropdown data={customerData} customerOnChangeCallback={handleCustomerOnChange} />
          )}
          {isLoading || isFetching ? <Loader /> : null}
          {
            isSuccess ? (
              <Fragment>
                <div className='flex justify-center mb-6'>
                  <ThreatCard
                    title={HIGH_SEVERITY_THREAT_CARD.title}
                    countColorClass={HIGH_SEVERITY_THREAT_CARD.countColorClass}
                    count={highSeverityThreads}
                  />
                  <ThreatCard
                    title={SPAM_MESSAGE_THREAT_CARD.title}
                    countColorClass={SPAM_MESSAGE_THREAT_CARD.countColorClass}
                    count={spamMessages}
                  />
                </div>
                <Table
                  title={DOMAINS_TABLE.title}
                  data={domainsMap}
                  totalThreadsCount={totalThreadsCount}
                  rowsToRender={DOMAINS_TABLE.rowsToRender}
                />
              </Fragment>
            ) : null
          }
        </div>
      </main>
    </div>
  )
}

export default Dashboard
