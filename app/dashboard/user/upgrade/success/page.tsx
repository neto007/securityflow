'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function UpgradeSuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [planName, setPlanName] = useState<string | null>(null)

  useEffect(() => {
    if (!sessionId) {
      router.push('/dashboard')
    } else {
      // Here you would typically make an API call to your backend
      // to get the details of the completed checkout session
      // For now, we'll just simulate this with a timeout
      setTimeout(() => {
        setPlanName('Pro Plan') // Replace with actual plan name from your backend
      }, 1000)
    }
  }, [sessionId, router])

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Upgrade Successful!</CardTitle>
          <CardDescription>Thank you for upgrading your plan.</CardDescription>
        </CardHeader>
        <CardContent>
          {planName ? (
            <p className="mb-4">Your account has been successfully upgraded to the <h1 className='text-primary'>{planName}</h1>. You now have access to all its features.</p>
          ) : (
            <p className="mb-4">We're confirming your upgrade. This will only take a moment...</p>
          )}
          <Button onClick={() => router.push('/dashboard')}>
            Return to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

