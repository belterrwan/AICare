import React from 'react'
import StatisticsCard from '../globals/StatisticsCard'
import { Users } from 'lucide-react'

const Statistics = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 '>

            <StatisticsCard title='Clientes Registrados'
            icon={<Users />} number={20} />
            <StatisticsCard title='Clientes Registrados'
            icon={<Users />} number={20} />

    </div>
  )
}

export default Statistics