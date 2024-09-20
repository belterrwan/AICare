import React, { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';



interface StatisticsCardProps {
    title: string;
    icon: ReactNode;
    number: number;
};


const StatisticsCard: React.FC<StatisticsCardProps> = ({title, icon, number}) => {
  return (
    <Card className='md:w-1/4 flex flex-col'>
  <CardHeader className='flex flex-row justify-between items-center pb-0' >
    <CardTitle>{title}</CardTitle>
    <CardDescription>{icon}</CardDescription>
  </CardHeader>
  <CardContent>
    <p className='text-4xl font-bold '>{number}</p>
  </CardContent>
</Card>
  )
}

export default StatisticsCard