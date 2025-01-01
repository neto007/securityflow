'use server'

export type CardDetails = {
  nameOnCard: string
  expiry: string
  cardNumber: string
  cvv: string
}

export type CustomerDetails = {
  clientName: string
  streetAddress: string
  emailAddress: string
  city: string
  country: string
  state: string
}

export async function updateCardDetails(data: CardDetails) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { success: true, message: "Card details updated successfully" }
}

export async function updateCustomerDetails(data: CustomerDetails) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return { success: true, message: "Customer details updated successfully" }
}

