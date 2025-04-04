"use client"

import { useState } from "react"
import { FileText, Users, CreditCard } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function LoanSimulator() {
    const [interestRate, setInterestRate] = useState<number[]>([9])
    const [loanTerm, setLoanTerm] = useState<number[]>([16])
    const [loanAmount, setLoanAmount] = useState("10.000.000 FCFA")
    const [monthlyPayment, setMonthlyPayment] = useState("530.000 FCFA")
    const [totalAmount, setTotalAmount] = useState("12.700.500 FCFA")

    return (
        <div className="w-full bg-white rounded-xl shadow-sm">
            {/* Navigation Tabs */}
            <Tabs defaultValue="simulate" className="w-full">
                <div className="overflow-x-auto">
                    <TabsList
                        className="w-full min-w-max h-auto bg-transparent border-b justify-between md:justify-start p-0">
                        <TabsTrigger
                            value="statement"
                            className="flex items-center gap-1 sm:gap-2 py-3 sm:py-4 px-3 sm:px-6 data-[state=active]:border-b-0 data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:text-gray-700 text-gray-500 text-xs sm:text-sm md:text-base whitespace-nowrap"
                        >
                            <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"/>
                            <span>Voir mon relevé</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="checkbook"
                            className="flex items-center gap-1 sm:gap-2 py-3 sm:py-4 px-3 sm:px-6 data-[state=active]:border-b-0 data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:text-gray-700 text-gray-500 text-xs sm:text-sm md:text-base whitespace-nowrap"
                        >
                            <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"/>
                            <span>Demander un chéquier</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="simulate"
                            className="flex items-center gap-1 sm:gap-2 py-3 sm:py-4 px-3 sm:px-6 data-[state=active]:border-b-0 data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-red-600 data-[state=active]:text-red-600 text-gray-500 text-xs sm:text-sm md:text-base whitespace-nowrap"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-current h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                            >
                                <path
                                    d="M19 9L19 17C19 18.1046 18.1046 19 17 19L7 19C5.89543 19 5 18.1046 5 17L5 9"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M5 9C5 7.89543 5.89543 7 7 7L17 7C18.1046 7 19 7.89543 19 9"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"/>
                            </svg>
                            <span>Simuler un prêt</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="beneficiaries"
                            className="flex items-center gap-1 sm:gap-2 py-3 sm:py-4 px-3 sm:px-6 data-[state=active]:border-b-0 data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:text-gray-700 text-gray-500 text-xs sm:text-sm md:text-base whitespace-nowrap"
                        >
                            <Users className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"/>
                            <span>Gérer mes bénéficiaires</span>
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="simulate" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 md:p-8">
                        {/* Left Column */}
                        <div className="space-y-5 sm:space-y-6">
                            <div>
                                <label className="block text-gray-600 text-base sm:text-lg mb-2">Type du prêt</label>
                                <Select defaultValue="personal">
                                    <SelectTrigger className="w-full bg-gray-50 border-gray-200 h-12 sm:h-14">
                                        <div className="flex items-center gap-2">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-gray-400 h-4 w-4 sm:h-5 sm:w-5"
                                            >
                                                <path
                                                    d="M19 9L19 17C19 18.1046 18.1046 19 17 19L7 19C5.89543 19 5 18.1046 5 17L5 9"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M5 9C5 7.89543 5.89543 7 7 7L17 7C18.1046 7 19 7.89543 19 9"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                                <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="2"
                                                        strokeLinecap="round"/>
                                            </svg>
                                            <SelectValue placeholder="Sélectionnez le type de prêt"/>
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="personal">Personnel</SelectItem>
                                        <SelectItem value="mortgage">Immobilier</SelectItem>
                                        <SelectItem value="auto">Automobile</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label
                                    className="block text-gray-600 text-base sm:text-lg mb-2">{"Taux d'intérêt"}</label>
                                <div className="pt-4 sm:pt-6 pb-2">
                                    <Slider
                                        value={interestRate}
                                        min={7}
                                        max={14}
                                        step={0.1}
                                        onValueChange={setInterestRate}
                                        className="[&_[data-orientation=horizontal]>.slider-range]:bg-red-600 [&_[data-orientation=horizontal]>.slider-thumb]:bg-red-600 [&_[data-orientation=horizontal]>.slider-thumb]:border-red-600"
                                    />
                                </div>
                                <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                                    <span>7</span>
                                    <span>9</span>
                                    <span>11</span>
                                    <span>12</span>
                                    <span>14</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-600 text-base sm:text-lg mb-2">Montant du prêt</label>
                                <div
                                    className="flex items-center bg-gray-50 border border-gray-200 rounded-md h-12 sm:h-14 px-3 sm:px-4">
                                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2"/>
                                    <span className="text-gray-600 text-sm sm:text-base">{loanAmount}</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-600 text-base sm:text-lg mb-2">Durée du prêt</label>
                                <div className="pt-4 sm:pt-6 pb-2">
                                    <Slider
                                        value={loanTerm}
                                        min={1}
                                        max={60}
                                        step={1}
                                        onValueChange={setLoanTerm}
                                        className="[&_[data-orientation=horizontal]>.slider-range]:bg-red-600 [&_[data-orientation=horizontal]>.slider-thumb]:bg-red-600 [&_[data-orientation=horizontal]>.slider-thumb]:border-red-600"
                                    />
                                </div>
                                <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                                    <span>1</span>
                                    <span>16</span>
                                    <span>31</span>
                                    <span>45</span>
                                    <span>60</span>
                                </div>
                            </div>

                            <div className="flex justify-center mt-4 sm:mt-6">
                                <Button
                                    className="bg-red-600 hover:bg-red-700 text-white px-8 sm:px-12 py-3 sm:py-6 rounded-md text-base sm:text-lg w-full md:w-auto">
                                    Simuler
                                </Button>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6 mt-6 md:mt-0">
                            <div>
                                <label className="block text-gray-600 text-base sm:text-lg mb-2">Montant
                                    mensualité</label>
                                <div
                                    className="flex items-center bg-gray-50 border border-gray-200 rounded-md h-12 sm:h-14 px-3 sm:px-4">
                                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2"/>
                                    <span className="text-gray-600 text-sm sm:text-base">{monthlyPayment}</span>
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-12 md:mt-24">
                                <label className="block text-gray-600 text-base sm:text-lg mb-2">Montant total avec
                                    intérêt</label>
                                <div
                                    className="flex items-center bg-gray-50 border border-gray-200 rounded-md h-12 sm:h-14 px-3 sm:px-4">
                                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2"/>
                                    <span className="text-gray-600 text-sm sm:text-base">{totalAmount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

