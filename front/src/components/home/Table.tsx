import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { MoreHorizontal } from 'lucide-react'

const TableHome = () => {
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
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">
              Price
            </TableHead>
            <TableHead className="hidden md:table-cell">
              Total Sales
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
              Luminous VR Headset
            </TableCell>
            <TableCell>
              <Badge variant="outline">Active</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              $199.99
            </TableCell>
            <TableCell className="hidden md:table-cell">
              30
            </TableCell>
            <TableCell className="hidden md:table-cell">
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
          <TableRow>
            <TableCell className="font-medium">
              Luminous VR Headset
            </TableCell>
            <TableCell>
              <Badge variant="outline">Active</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              $199.99
            </TableCell>
            <TableCell className="hidden md:table-cell">
              30
            </TableCell>
            <TableCell className="hidden md:table-cell">
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
          <TableRow>
            <TableCell className="font-medium">
              Luminous VR Headset
            </TableCell>
            <TableCell>
              <Badge variant="outline">Active</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              $199.99
            </TableCell>
            <TableCell className="hidden md:table-cell">
              30
            </TableCell>
            <TableCell className="hidden md:table-cell">
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
                    <TableRow>
            <TableCell className="font-medium">
              Luminous VR Headset
            </TableCell>
            <TableCell>
              <Badge variant="outline">Active</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              $199.99
            </TableCell>
            <TableCell className="hidden md:table-cell">
              30
            </TableCell>
            <TableCell className="hidden md:table-cell">
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

export default TableHome