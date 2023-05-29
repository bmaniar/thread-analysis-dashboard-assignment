import { number, shape, string } from 'prop-types'
import React from 'react'

const Table = ({ title, data, rowsToRender, totalThreadsCount }) => {

  const renderTableData = () => Object.keys(data).slice(0, rowsToRender).map((objectKey) => {
    const count = data[objectKey]
    console.log()
    const percentage = (100 * count) / totalThreadsCount

    return (
      <tr key={objectKey}>
        <td className='whitespace-nowrap px-6 py-4 font-medium'>{objectKey}</td>
        <td className='whitespace-nowrap px-6 py-4'>{percentage}%</td>
        <td className='whitespace-nowrap px-6 py-4'>{count}</td>
      </tr>
    )
  })

  return (
    <div className='flex flex-col justify-center items-center overflow-x-auto sm:-mx-6 lg:-mx-8'>
      <div className='border-2 border-black rounded p-4'>
        <div className='flex self-start text-base font-bold text-black'>{title}</div>
        <div className='overflow-hidden'>
          <table className='text-left text-sm font-light'>
            <thead>
              <tr>
                <th scope='col' className='px-6 py-4'>Domains</th>
                <th scope='col' className='px-6 py-4'>% of Threats</th>
                <th scope='col' className='px-6 py-4'># of Threats</th>
              </tr>
            </thead>
            <tbody>
              {renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

Table.propTypes = {
  title: string.isRequired,
  data: shape({}).isRequired,
  rowsToRender: number.isRequired,
  totalThreadsCount: number.isRequired,
}

export default Table