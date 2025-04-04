"use client"
import { ChevronLeft, ChevronRight, User, PiggyBank, Users } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp";
import {Felicitation} from "@/components/images-svg/felicitation";
import {BankIcon} from "@/components/images-svg/bank";

export function BankTransfert() {

    const [open, setOpen] = useState(false)
    const [otp, setOtp] = useState("")

    const [valid, setValid] = useState(false)

    return (
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gray-50 p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex items-start gap-4">
                    <div className="text-red-700">
                        <BankIcon />
                    </div>
                    <div>
                        <h3 className="text-gray-700 text-lg font-medium">Libellé compte</h3>
                        <h2 className="text-gray-800 text-xl font-semibold">Compte courant - Principal</h2>
                    </div>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="text-gray-700 text-lg">Mon solde</p>
                    <p className="text-gray-900 text-3xl font-bold">12 670 550 XOF</p>
                </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="account-to-account" className="w-full">
                <TabsList className="w-full h-auto bg-transparent border-b justify-start p-0 rounded-none overflow-x-auto">
                    <TabsTrigger
                        value="account-to-account"
                        className="w-full flex items-center gap-2 py-4 px-6 data-[state=active]:border-b-0 data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-red-600 data-[state=active]:text-red-600 text-gray-500"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-current"
                        >
                            <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M6 10H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M14 14H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span>Virement compte à compte</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="to-beneficiary"
                        className="w-full flex items-center gap-2 py-4 px-6 data-[state=active]:border-b-0 data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-red-600 data-[state=active]:text-red-600 text-gray-400"
                    >
                        <User className="h-5 w-5" />
                        <span>Virement vers un bénéficiaire</span>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="account-to-account" className="mt-0 px-6 py-8">
                    {/* Account Selection */}
                    <div className="flex items-center justify-between mb-8">
                        <button className="text-red-700 hover:bg-red-50 p-1 rounded">
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 max-w-3xl mx-auto">
                            {/* From Account */}
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <PiggyBank className="h-8 w-8 text-gray-400 mt-1" />
                                    <div>
                                        <p className="text-gray-600">Compte épargne TG009</p>
                                        <p className="text-gray-500 text-sm">01285 10980001325</p>
                                        <p className="text-gray-900 font-bold text-xl mt-1">1 310 000 XOF</p>
                                    </div>
                                </div>
                            </div>

                            {/* To Account */}
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <Users className="h-8 w-8 text-gray-400 mt-1" />
                                    <div>
                                        <p className="text-gray-600">Compte Enfant TG009</p>
                                        <p className="text-gray-500 text-sm">01285 10980090135</p>
                                        <p className="text-gray-900 font-bold text-xl mt-1">873 750 XOF</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="text-red-700 hover:bg-red-50 p-1 rounded">
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Transfer Form */}
                    <div className="max-w-xl mx-auto space-y-6">
                        <div>
                            <label className="block text-gray-600 text-lg mb-2">Saisir le motif du virement</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-gray-400"
                                    >
                                        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                                        <path d="M8 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M8 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <Input className="bg-gray-50 border-gray-200 pl-10 h-14" placeholder="I" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-600 text-lg mb-2">Saisir du montant du virement</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-gray-400"
                                    >
                                        <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M3 18H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <Input className="bg-gray-50 border-gray-200 pl-10 h-14" placeholder="I" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-600 text-lg">Virement récurrent ?</span>
                            <Switch />
                        </div>

                        <div className="w-full flex pt-4 justify-center">
                            <Button
                                className="bg-red-600 px-16 hover:bg-red-700 text-white py-6 rounded-md text-lg"
                                onClick={() => setOpen(true)}
                            >
                                Valider
                            </Button>
                        </div>
                    </div>

                    {/* People Images */}
                    <div className="flex justify-between relative h-[300px]">
                        <div className="absolute bottom-0 left-0 w-1/3 h-full">
                            <Image
                                src="/images/business-man.png"
                                alt="Business man using phone"
                                width={300}
                                height={400}
                                className="object-contain object-bottom h-full"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-1/3 h-full">
                            <Image
                                src="/images/business-woman.png"
                                alt="Business woman with phone"
                                width={300}
                                height={400}
                                className="object-contain object-bottom h-full"
                            />
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="to-beneficiary">
                    <div className="p-8 text-center text-gray-500">Fonctionnalité de virement vers un bénéficiaire</div>
                </TabsContent>
            </Tabs>

            {/* OTP Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-center text-xl font-semibold mb-6">Confirmation transaction</DialogTitle>
                    </DialogHeader>
                    { !valid && (
                        <div className="flex flex-col items-center space-y-6">
                            <div className="text-center">Renseigner le OTP reçu par SMS</div>

                            {/* Fixed OTP Input */}
                            <div className="flex gap-2 justify-center">
                                <InputOTP maxLength={6}>
                                    <InputOTPGroup className="gap-2">
                                        <InputOTPSlot className="border border-gray-300 rounded" index={0}/>
                                        <InputOTPSlot className="border border-gray-300 rounded" index={1}/>
                                        <InputOTPSlot className="border border-gray-300 rounded" index={2}/>
                                        <InputOTPSlot className="border border-gray-300 rounded" index={3}/>
                                        <InputOTPSlot className="border border-gray-300 rounded" index={4}/>
                                        <InputOTPSlot className="border border-gray-300 rounded" index={5}/>
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>

                            <div className="text-center text-gray-500">Renvoyer le code dans 00:34</div>
                            <Button
                                className="bg-red-500 hover:bg-red-600 text-white w-full py-6"
                                onClick={() => setValid(true)}
                            >
                                Valider
                            </Button>
                        </div>
                    )}
                    { valid && (
                        <div className="flex flex-col items-center space-y-6">
                            <div className="text-center">
                                <Felicitation/>
                            </div>

                            {/* Fixed OTP Input */}
                            <div className="flex gap-2 justify-center">
                                <h3>Félicitations !</h3>
                            </div>

                            <div className="flex gap-2 justify-center">
                                <p>Votre virement a été effectué avec succès.</p>
                            </div>

                            <div className="w-full border border-black rounded"></div>

                            <Button
                                variant="ghost"
                                onClick={() => {
                                    setOpen(false)
                                    setOtp("")
                                    setValid(false)
                                }}
                                className="text-black py-6"
                            >
                                OK
                            </Button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

        </div>
    )
}

