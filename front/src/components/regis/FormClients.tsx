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

            <CardContent className="space-y-2">
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

            </CardContent>
            <CardFooter className='justify-end'>
                <Button>Save changes</Button>
            </CardFooter>
        </Card>


    )
}

export default FormClients