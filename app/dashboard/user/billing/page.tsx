import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getBillingHistory } from "./actions"
import { DataTable } from "./data-table"
import { columns } from "./columns"

export default async function BillingHistoryPage() {
  const billingHistory = await getBillingHistory()

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>View your past transactions and invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={billingHistory} />
        </CardContent>
      </Card>
    </div>
  )
}

