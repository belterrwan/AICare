import Statistics from '@/components/home/Statistics'
import TableHome from '@/components/home/Table'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Statistics/>
      <TableHome/>
    </div>
  )
}

export default HomePage