"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  CardDetails,
  CustomerDetails,
  updateCardDetails,
  updateCustomerDetails,
} from "./actions";

const cardSchema = z.object({
  nameOnCard: z.string().min(1, "Name is required"),
  expiry: z
    .string()
    .regex(/^\d{2}\/\d{4}$/, "Invalid expiry date format (MM/YYYY)"),
  cardNumber: z
    .string()
    .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Invalid card number format"),
  cvv: z.string().regex(/^\d{3}$/, "Invalid CVV"),
});

const customerSchema = z.object({
  clientName: z.string().min(1, "Name is required"),
  streetAddress: z.string().min(1, "Address is required"),
  emailAddress: z.string().email("Invalid email address"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
});

export default function SettingsPage() {
  const { toast } = useToast();
  const [isUpdatingCard, setIsUpdatingCard] = useState(false);
  const [isUpdatingCustomer, setIsUpdatingCustomer] = useState(false);

  const cardForm = useForm<CardDetails>({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      nameOnCard: "Kathy Pacheco",
      expiry: "05/2025",
      cardNumber: "1414 1412 4141 1422",
      cvv: "",
    },
  });

  const customerForm = useForm<CustomerDetails>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      clientName: "Kathy Pacheco",
      streetAddress: "2825 Winding Way, Providence, RI 02908",
      emailAddress: "hi@shadcndesign.com",
      city: "Providence",
      country: "us",
      state: "ri",
    },
  });

  async function onCardSubmit(data: CardDetails) {
    try {
      setIsUpdatingCard(true);
      const result = await updateCardDetails(data);
      if (result.success) {
        toast({
          title: "Success",
          description: "Card details updated successfully",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update card details",
        variant: "destructive",
      });
    } finally {
      setIsUpdatingCard(false);
    }
  }

  async function onCustomerSubmit(data: CustomerDetails) {
    try {
      setIsUpdatingCustomer(true);
      const result = await updateCustomerDetails(data);
      if (result.success) {
        toast({
          title: "Success",
          description: "Customer details updated successfully",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update customer details",
        variant: "destructive",
      });
    } finally {
      setIsUpdatingCustomer(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Free Plan Notice */}
      <Card className="bg-black text-white">
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">
              You&apos;re using free plan
            </h2>
            <p className="text-gray-400">
              You can add components to your app by upgrading to the next plan.
            </p>
            {cardForm.formState.errors.expiry && (
              <p className="text-red-500 text-sm">
                {cardForm.formState.errors.expiry.message}
              </p>
            )}
          </div>
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-100"
          >
            View plans →
          </Button>
        </CardContent>
      </Card>

      {/* Card Details */}
      <Card>
        <CardHeader>
          <CardTitle>Card details</CardTitle>
          <CardDescription>
            View and update your card details here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={cardForm.handleSubmit(onCardSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nameOnCard">Name on card</Label>
                <Input id="nameOnCard" {...cardForm.register("nameOnCard")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry</Label>
                <Input
                  id="expiry"
                  {...cardForm.register("expiry", {
                    setValueAs: (value) => value.trim(),
                  })}
                  aria-invalid={
                    cardForm.formState.errors.expiry ? "true" : "false"
                  }
                />
                {cardForm.formState.errors.expiry && (
                  <p className="text-red-500 text-sm">
                    {cardForm.formState.errors.expiry.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card number</Label>
                <Input id="cardNumber" {...cardForm.register("cardNumber")} />
                {cardForm.formState.errors.cardNumber && (
                  <p className="text-red-500 text-sm">
                    {cardForm.formState.errors.cardNumber.message}
                  </p>
                )}
                
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" type="password" {...cardForm.register("cvv")} />
                {cardForm.formState.errors.cvv && (
                  <p className="text-red-500 text-sm">
                    {cardForm.formState.errors.cvv.message}
                  </p>
                )}

              </div>
            </div>
            <div className="flex justify-end">
              <Button disabled={isUpdatingCard}>
                {isUpdatingCard && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Customer Details */}
      <Card>
        <CardHeader>
          <CardTitle>Customer details</CardTitle>
          <CardDescription>
            View and update your customer details here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={customerForm.handleSubmit(onCustomerSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clientName">Client name</Label>
                <Input
                  id="clientName"
                  {...customerForm.register("clientName")}
                />
                {customerForm.formState.errors.clientName && (
                  <p className="text-red-500 text-sm">
                    {customerForm.formState.errors.clientName.message}
                  </p>
                )}
                
              </div>
              <div className="space-y-2">
                <Label htmlFor="streetAddress">Street adress</Label>
                <Input
                  id="streetAddress"
                  {...customerForm.register("streetAddress")}
                />
                {customerForm.formState.errors.streetAddress && (
                  <p className="text-red-500 text-sm">
                    {customerForm.formState.errors.streetAddress.message}
                  </p>
                )}
               
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="emailAddress">Email address</Label>
                <Input
                  id="emailAddress"
                  type="email"
                  {...customerForm.register("emailAddress")}
                />
                {customerForm.formState.errors.emailAddress && (
                  <p className="text-red-500 text-sm">
                    {customerForm.formState.errors.emailAddress.message}
                  </p>
                )}
                
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" {...customerForm.register("city")} />
                {customerForm.formState.errors.city && (
                  <p className="text-red-500 text-sm">
                    {customerForm.formState.errors.city.message}
                  </p>
                )}
               
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select
                  defaultValue={customerForm.getValues("country")}
                  onValueChange={(value) =>
                    customerForm.setValue("country", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="mx">Mexico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Select
                  defaultValue={customerForm.getValues("state")}
                  onValueChange={(value) =>
                    customerForm.setValue("state", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ri">Rhode Island</SelectItem>
                    <SelectItem value="ma">Massachusetts</SelectItem>
                    <SelectItem value="ct">Connecticut</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end">
              <Button disabled={isUpdatingCustomer}>
                {isUpdatingCustomer && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}