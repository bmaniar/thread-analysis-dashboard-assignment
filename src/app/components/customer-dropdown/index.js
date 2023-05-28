
import React from 'react'

const CustomerDropdown = ({ data, customerOnChangeCallback }) => {

  const handlerCustomerOnChange = (event) => {
    customerOnChangeCallback(event.target.value)
  }

  return (
    <div className='flex mb-6'>
      <select
        id='customers'
        onChange={handlerCustomerOnChange}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5'>
        {
          data.map(({ id, name }) => (
            <option key={id} value={id}>{name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default CustomerDropdown
