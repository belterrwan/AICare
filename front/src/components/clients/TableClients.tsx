import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { MoreHorizontal } from 'lucide-react'

const TableClients = () => {
  return (
    <Card x-chunk="dashboard-06-chunk-0">
    <CardHeader>
      <CardTitle>Registros Recientes</CardTitle>
      <CardDescription>
        Aqui se muestran los últimos 4 registros recientes.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Birthdate</TableHead>
            <TableHead className="hidden md:table-cell">
              Mail
            </TableHead>
            <TableHead className="hidden md:table-cell">
              Phone number
            </TableHead>
            <TableHead className="hidden md:table-cell">
              Insurance number
            </TableHead>
            <TableHead className="hidden md:table-cell">
              Created at
            </TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              Cumstavo Nolicesco
            </TableCell>
            <TableCell>
              11/9/2001
            </TableCell>
            <TableCell className="hidden md:table-cell">
              nolascomomos@gmail.com
            </TableCell>
            <TableCell className="hidden md:table-cell">
              6182221230
            </TableCell>    
            <TableCell className="hidden md:table-cell">
              12912991249
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              2024-02-14 02:14 PM
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    aria-haspopup="true"
                    size="icon"
                    variant="ghost"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>          
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              Cumstavo Nolicesco
            </TableCell>
            <TableCell>
              11/9/2001
            </TableCell>
            <TableCell className="hidden md:table-cell">
              nolascomomos@gmail.com
            </TableCell>
            <TableCell className="hidden md:table-cell">
              6182221230
            </TableCell>    
            <TableCell className="hidden md:table-cell">
              12912991249
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              2024-02-14 02:14 PM
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    aria-haspopup="true"
                    size="icon"
                    variant="ghost"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>          
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              Cumstavo Nolicesco
            </TableCell>
            <TableCell>
              11/9/2001
            </TableCell>
            <TableCell className="hidden md:table-cell">
              nolascomomos@gmail.com
            </TableCell>
            <TableCell className="hidden md:table-cell">
              6182221230
            </TableCell>    
            <TableCell className="hidden md:table-cell">
              12912991249
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              2024-02-14 02:14 PM
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    aria-haspopup="true"
                    size="icon"
                    variant="ghost"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>          
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              Cumstavo Nolicesco
            </TableCell>
            <TableCell>
              11/9/2001
            </TableCell>
            <TableCell className="hidden md:table-cell">
              nolascomomos@gmail.com
            </TableCell>
            <TableCell className="hidden md:table-cell">
              6182221230
            </TableCell>    
            <TableCell className="hidden md:table-cell">
              12912991249
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              2024-02-14 02:14 PM
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    aria-haspopup="true"
                    size="icon"
                    variant="ghost"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>          
        </TableBody>
      </Table>
    </CardContent>
  </Card>
  )
}

export default TableClients