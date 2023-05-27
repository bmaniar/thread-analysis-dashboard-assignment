import React from 'react'

const ThreatCard = ({ title, titleColorClass, count }) => (
    <div
        className='flex flex-col rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mr-6 border-solid border-2 border-black'>
        <h5
            className='mb-2 text-xl text-center font-medium leading-tight text-neutral-800'>
            {count}
        </h5>
        <p className={`text-base text-center font-medium text-neutral-600 ${titleColorClass}`}>
            {title}
        </p>
    </div>
)

export default ThreatCard