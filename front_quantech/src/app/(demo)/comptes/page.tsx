"use client"

import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {FileText, MoreHorizontal, MoreVertical, Plus, Search, Users} from "lucide-react";
import {BankCard} from "@/components/app-component/bank-card";
import {TransactionItem} from "@/components/app-component/transaction";
import {BankAccountDetails} from "@/components/app-component/bank-acount-details";
import {LoanSimulator} from "@/components/app-component/loan-simulator";
import {Button} from "@/components/ui/button";
import TransferIcon from "@/components/images-svg/transfert-icon";
import ReleverIcon from "@/components/images-svg/relever-icon";
import {SimmerIcon} from "@/components/images-svg/simuler-icon";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {useSession} from "@/hooks/use-session";
import {useShallow} from "zustand/react/shallow";
import {useEffect} from "react";

export default function CategoriesPage() {

  const {fetchUser, loading, user} = useSession(
      useShallow((s) => ({
        fetchUser: s.fetchUser,
        user: s.user,
        loading: s.isLoading,
      }))
  )

  const handleSession = () => {
    fetchUser()
  }

  useEffect(() => {
    handleSession()
  }, [])

  return (
      <ContentLayout title={`Hi, ${user?.fullName.split(' ')[0]}`} description="👋🏾 Bienvenue sur ton dashboard">
        {/*
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Categories</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      */}
        <h1 className="text-3xl font-semibold text-gray-800">Récapitulatif Compte </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-10 gap-6 p-4">
          {/* Premier composant */}
          <div className="col-span-1 md:col-span-1 lg:col-span-7 max-w-full p-4">
            <BankAccountDetails />
            <LoanSimulator />
          </div>

          {/* Deuxième composant */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 max-w-full bg-gray-50 p-3">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-bold text-gray-800">Mes cartes</h1>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            {/* Card */}
            <div className="overflow-x-auto pb-3">
              <div className="flex gap-3 w-max">
                <div className="w-full md:w-80 flex-shrink-0">
                  <BankCard />
                </div>
                <div className="w-full md:w-80 flex-shrink-0">
                  <BankCard gradient="bg-gradient-to-b from-amber-300 to-amber-900" />
                </div>
              </div>
            </div>

            {/* Transactions */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Transactions</h2>
              <div className="flex space-x-4">
                <div
                    className={cn(
                        "w-full flex justify-center items-center mt-5 ring-1 px-2 ring-gray-200 rounded-lg dark:ring-gray-800 focus-within:ring-2 focus-within:rounded dark:focus-within:ring-gray-700 focus-within:ring-gray-700"
                    )}
                >
                  <Button
                      variant={"ghost"}
                      size={"icon"}
                      className="border-0 dark:bg-inherit mr-2"
                  >
                    <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </Button>
                  <Input
                      id="password"
                      type={"text"}
                      placeholder="Rechercher..."
                      className={cn(
                          "p-4 sm:p-6 placeholder:text-gray-400 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0 border-0 dark:bg-inherit"
                      )}
                  />
                </div>
              </div>
            </div>

            {/* Transactions */}
            <div>
              <div className="space-y-4">
                <TransactionItem
                    icon="credit-card"
                    title="Deposit from my"
                    date="28 January 2021"
                    amount="-$850"
                    amountColor="text-red-500"
                    bgColor="bg-yellow-100"
                    descriptionCard="Visa card"
                    numberCard="**** 2345"
                />
                <TransactionItem
                    icon="paypal"
                    title="Deposit Paypal"
                    date="25 January 2021"
                    amount="+$2,500"
                    amountColor="text-green-500"
                    bgColor="bg-gray-200"
                    descriptionCard="Visa card"
                    numberCard="**** 2345"
                />
                <TransactionItem
                    icon="dollar"
                    title="Jemi Wilson"
                    date="21 January 2021"
                    amount="+$5,400"
                    amountColor="text-green-500"
                    bgColor="bg-cyan-100"
                    descriptionCard="Visa card"
                    numberCard="**** 2345"
                />
                <TransactionItem
                    icon="credit-card"
                    title="Deposit from my"
                    date="28 January 2021"
                    amount="-$850"
                    amountColor="text-red-500"
                    bgColor="bg-yellow-100"
                    descriptionCard="Visa card"
                    numberCard="**** 2345"
                />
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
  );
}
