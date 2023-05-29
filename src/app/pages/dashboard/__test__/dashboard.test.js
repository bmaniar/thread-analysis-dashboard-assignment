import { rest } from 'msw'
import { screen } from '@testing-library/react'

import Dashboard from '../index'
import { server } from '../../../../mock/api/server'
import { renderWithProviders } from '../../../../testUtils'

describe('Dashboard', () => {
  it('handles 200 response', async () => {
    renderWithProviders(<Dashboard />)

  })

})