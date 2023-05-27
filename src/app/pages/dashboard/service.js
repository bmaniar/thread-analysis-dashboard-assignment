import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dashboardApi = createApi({
  reducerPath: 'dashboard',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://abnormalsecurity-public.s3.amazonaws.com/fe_dashboard' }),
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      query: () => `adams_keeling/messages.json`,
      transformResponse: (response) => {
        const initial = {
          highSeverityThreads: 0,
          spamMessages: 0,
          domainsMap: {}
        }

        const transformedData = response.reduce((acc, curr) => {
          const { attackType, attackScore, from } = curr

          /** Counting for SPAM messages */
          if (attackType === 'SPAM') {
            acc.spamMessages++
          }

          /** Counting for high severity attacks */
          if (attackScore > 0.7) {
            acc.highSeverityThreads++
          }


          let fromDomain = from.split("@")[1]
          if (acc.domainsMap[fromDomain]) {
            acc.domainsMap[fromDomain]++
          } else {
            acc.domainsMap[fromDomain] = 1
          }

          return acc
        }, initial)

        /** Sorting attack domains map */
        let domainKeys = Object.keys(transformedData.domainsMap)
        domainKeys.sort(function(a, b) { return transformedData.domainsMap[a] - transformedData.domainsMap[b] });

        return transformedData
      }
    }),
  }),
})

export const { useGetDashboardDataQuery } = dashboardApi