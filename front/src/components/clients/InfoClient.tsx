import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import ClientStatics from './ClientStatics'
import CardPercentage from './CardPercentage'




const InfoClient = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost">Open</Button>
            </SheetTrigger>

            <SheetContent side="top" className='bg-[#fafbfb] space-y-5'>
                <SheetHeader>
                    <div className='flex flex-row items-center gap-10 justify-center '>
                        <SheetTitle>Name</SheetTitle>
                        <SheetDescription>
                            Number of insurance
                        </SheetDescription>
                    </div>
                    <div className='flex flex-row gap-10 justify-center'>
                        <SheetDescription>Nacimiento: 11/9/2001</SheetDescription>
                        <SheetDescription>Telefono: +52 618-293-3320</SheetDescription>
                    </div>
                    <div className='justify-center flex'>
                        <SheetDescription> Correo: mail@example.com</SheetDescription>
                    </div>
                </SheetHeader>

                <div className="flex justify-center items-center">
                    <SheetTitle className='text-3xl'> Prediction </SheetTitle>
                </div>

                <div className='flex flex-row justify-evenly'>
                    <ClientStatics />
                    <CardPercentage />
                </div>
            </SheetContent>
        </Sheet>


    )
}

export default InfoClient