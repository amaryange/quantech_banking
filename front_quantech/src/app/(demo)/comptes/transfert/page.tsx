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
import {BankAccountDetails} from "@/components/app-component/bank-acount-details";
import {LoanSimulator} from "@/components/app-component/loan-simulator";
import {BankCard} from "@/components/app-component/bank-card";
import {MoreHorizontal, Plus, Search} from "lucide-react";
import {TransactionItem} from "@/components/app-component/transaction";
import {BankTransfert} from "@/components/app-component/bank-tranfert";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui/input";
import {useSession} from "@/hooks/use-session";
import {useShallow} from "zustand/react/shallow";
import {useEffect} from "react";

export default function TagsPage() {

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
      <ContentLayout title={`Hi, ${user?.fullName.split(' ')[0]}`} description="👋🏾 Bienvenue sur ton dasboard">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/comptes">Mes comptes</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
              <BreadcrumbPage>{"Transférer de l'argent"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 sm:gap-6">
            {/* Premier composant */}
            <div className="col-span-1 lg:col-span-7 w-full p-2 sm:p-4 bg-white rounded-xl shadow-sm">
              <BankTransfert/>
            </div>

            {/* Deuxième composant */}
            <div className="col-span-1 lg:col-span-3 w-full bg-gray-50 p-3 sm:p-4 rounded-xl shadow-sm">
              {/* Header */}
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h1 className="text-base sm:text-lg font-bold text-gray-800">Mes cartes</h1>
                <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                  <MoreHorizontal className="h-4 w-4"/>
                </Button>
              </div>

              {/* Card */}
              <div className="overflow-x-auto pb-3 -mx-3 px-3">
                <div className="flex gap-3 snap-x snap-mandatory">
                  <div className="w-[calc(100vw-3rem)] sm:w-[280px] min-w-[280px] flex-shrink-0 snap-center">
                    <BankCard/>
                  </div>
                  <div className="w-[calc(100vw-3rem)] sm:w-[280px] min-w-[280px] flex-shrink-0 snap-center">
                    <BankCard gradient="bg-gradient-to-b from-amber-300 to-amber-900"/>
                  </div>
                </div>
              </div>

              {/* Transactions header */}
              <div className="mt-3 sm:mt-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Transactions</h2>
                <div className="flex">
                  <div
                      className={cn(
                          "w-full flex mb-4 justify-center items-center ring-1 px-2 ring-gray-200 rounded-lg dark:ring-gray-800 focus-within:ring-2 focus-within:rounded dark:focus-within:ring-gray-700 focus-within:ring-gray-700",
                      )}
                  >
                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        className="border-0 dark:bg-inherit mr-1 sm:mr-2 h-8 w-8 sm:h-10 sm:w-10"
                    >
                      <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400"/>
                    </Button>
                    <Input
                        id="search"
                        type={"text"}
                        placeholder="Rechercher..."
                        className={cn(
                            "p-2 sm:p-4 text-sm sm:text-base placeholder:text-gray-400 rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0 border-0 dark:bg-inherit h-8 sm:h-10",
                        )}
                    />
                  </div>
                </div>
              </div>

              {/* Transactions list */}
              <div
                  className="space-y-3 sm:space-y-4 overflow-y-auto max-h-[calc(100vh-20rem)] sm:max-h-[calc(100vh-22rem)] pr-1">
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
