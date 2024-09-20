import React from 'react'
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CircularProgress } from "@mui/material"; // Usando Material UI para el circular progress

const CardPercentage = () => {
    return (
        <Card className="w-64 h-64 flex flex-col items-center justify-center border border-gray-300 rounded-lg shadow-lg">
            <CardHeader className="text-center">
                <h2 className="text-lg font-medium"> % De contraer diabetes </h2>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
                <div className="relative">
                    <CircularProgress variant="determinate" value={75} size={120} thickness={8} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-semibold"> % 75. </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardPercentage