"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'

export type BillingHistoryItem = {
  id: string
  date: string
  amount: string
  status: string
  receipt_url: string | null
}

export const columns: ColumnDef<BillingHistoryItem>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <div className={`capitalize ${
          status === 'succeeded' ? 'text-green-600' : 
          status === 'pending' ? 'text-yellow-600' : 
          'text-red-600'
        }`}>
          {status}
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const charge = row.original
      return (
        <Button variant="ghost" size="sm" asChild>
          <a href={charge.receipt_url || '#'} target="_blank" rel="noopener noreferrer">
            Receipt <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      )
    },
  },
]

