import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const FormClients = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Register client</CardTitle>
                <CardDescription>
                    Register your client
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-10">
                <div className='flex flex-col gap-5'>
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name" />
                    </div>
                    <div className='md:flex flex-row md:space-x-5 '>
                        <div className=" md:w-1/2">
                            <Label htmlFor="name">Phone Number</Label>
                            <Input id="username" placeholder="Phone number" />
                        </div>
                        <div className=" md:w-1/2">
                            <Label htmlFor="name">Birthday</Label>
                            <Input id="birthday" placeholder="Birthday" />
                        </div>
                    </div>
                    <div className='md:flex flex-row md:space-x-5'>
                        <div className="md:w-1/2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder='your@email.com' />
                        </div>
                        <div className="md:w-1/2">
                            <Label htmlFor="username">Postal code</Label>
                            <Input id="postal" placeholder="34225" />
                        </div>
                    </div>
                </div>


                <div className='gap-5  w-full flex flex-col'>
                    <div className='md:flex flex-row md:space-x-5'>
                        <div className="md:w-1/2">
                            <Label htmlFor="email">Weight:</Label>
                            <Input id="weight" placeholder='User weight' />
                        </div>
                        <div className="md:w-1/2">
                            <Label htmlFor="username">Height:</Label>
                            <Input id="height" placeholder="User height" />
                        </div>
                        <div className="md:w-1/2">
                            <Label htmlFor="email">Cholesterol:</Label>
                            <Input id="cholesterol" placeholder='User Cholesterol' />
                        </div>
                        <div className="md:w-1/2">
                            <Label htmlFor="username">Glucose:</Label>
                            <Input id="glucose:" placeholder="User glucose" />
                        </div>
                    </div>

                    <div className='md:flex flex-row md:space-x-5'>
                        <div className="md:w-1/2">
                            <Label htmlFor="email">Cholesterol level:</Label>
                            <Input id="chl_level" placeholder='User Cholesterol level' />
                        </div>
                        <div className="md:w-1/2">
                            <Label htmlFor="username">Cholesterol radius:</Label>
                            <Input id="Chl_radius" placeholder="User cholesterol radius" />
                        </div>
                        <div className="md:w-1/2">
                            <Label htmlFor="email">IMC:</Label>
                            <Input id="imc" placeholder='User IMC' />
                        </div>
                        <div className="md:w-1/2">
                            <Label htmlFor="username">Blood pressure:</Label>
                            <Input id="bld_pressure" placeholder="User blood pressure" />
                        </div>
                    </div>


                    <div className='md:flex flex-row md:space-x-5'>
                        <div className="md:w-1/2">
                            <Label htmlFor="email">Waist:</Label>
                            <Input id="waist" placeholder='User waist' />
                        </div>
                        <div className="md:w-1/2">
                            <Label htmlFor="username">Hip:</Label>
                            <Input id="hip" placeholder="User hip" />
                        </div>
                        <div className="md:w-1/2">
                            <Label htmlFor="username">Waist-hip radius:</Label>
                            <Input id="wh_radius" placeholder="User waist-hip radius:" />
                        </div>
                    </div>
                </div>


            </CardContent>
            <CardFooter className='justify-end mt-5'>
                <Button>Add new client</Button>
            </CardFooter>
        </Card>


    )
}

export default FormClients