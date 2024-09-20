import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface StatisticsClientProps {
    weight: number;
    mass: number;
    water: number;
    imc: number;
    height: number;
    massgr: number;
    masspg: number;
    bmr: number;

};

const CardPrediction: React.FC<StatisticsClientProps> = ({ weight, mass, water, imc, height, massgr, masspg, bmr }) => {
    return (
        <Card className='md:w-1/4 flex flex-col'>
            <CardHeader className='flex flex-row justify-between items-center pb-0'>
                <CardTitle>User information</CardTitle>
            </CardHeader>
            <div className='flex'>
                <CardContent className='flex flex-col space-y-5'>
                    <p>Weight: {weight}</p>
                    <p>Fat: {mass}</p>
                    <p>Water corp: {water} </p>
                    <p>IMC: {imc}</p>
                </CardContent>
                <CardFooter className='flex flex-col space-y-5'>
                    <p>Height: {height}</p>
                    <p>Fat mass: {massgr}</p>
                    <p>Fat percentage: {masspg} </p>
                    <p>BMR: {bmr}</p>
                </CardFooter>
            </div>

        </Card>

    )
}

export default CardPrediction