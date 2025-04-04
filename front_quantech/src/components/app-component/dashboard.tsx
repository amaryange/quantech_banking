"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {MoreVertical, Users, FileText, Plus, MoreHorizontal} from "lucide-react"
import {BankCard} from "@/components/app-component/bank-card";
import {TransactionItem} from '@/components/app-component/transaction';
import TransferIcon from "@/components/images-svg/transfert-icon";
import ReleverIcon from "@/components/images-svg/relever-icon";
import {SimmerIcon} from "@/components/images-svg/simuler-icon";
import {BankIcon} from "@/components/images-svg/bank";

export function Dashboard() {
    const balanceData = [
        { month: "Jul", balance: 220 },
        { month: "Aug", balance: 180 },
        { month: "Sep", balance: 380 },
        { month: "Oct", balance: 580 },
        { month: "Nov", balance: 320 },
        { month: "Dec", balance: 580 },
        { month: "Jan", balance: 640 },
    ]

    const contracts = [
        {
            id: 1,
            contractNumber: "FUTURIS.843",
            insuredNumber: "1645505",
            country: "Togo",
            effectDate: "19/09/24",
            dueDate: "17/09/24",
            premium: "17.000 Fcfa",
            unpaid: "-32.000 Fcfa",
        },
        {
            id: 2,
            contractNumber: "FUTURIS.843",
            insuredNumber: "1645505",
            country: "Togo",
            effectDate: "19/09/24",
            dueDate: "17/09/24",
            premium: "17.000 Fcfa",
            unpaid: "-32.000 Fcfa",
        },
        {
            id: 3,
            contractNumber: "FUTURIS.843",
            insuredNumber: "1645505",
            country: "Togo",
            effectDate: "19/09/24",
            dueDate: "17/09/24",
            premium: "17.000 Fcfa",
            unpaid: "-32.000 Fcfa",
        },
        {
            id: 4,
            contractNumber: "FUTURIS.843",
            insuredNumber: "1645505",
            country: "Togo",
            effectDate: "19/09/24",
            dueDate: "17/09/24",
            premium: "17.000 Fcfa",
            unpaid: "-32.000 Fcfa",
        },
        {
            id: 5,
            contractNumber: "FUTURIS.843",
            insuredNumber: "1645505",
            country: "Togo",
            effectDate: "19/09/24",
            dueDate: "17/09/24",
            premium: "17.000 Fcfa",
            unpaid: "-32.000 Fcfa",
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 p-4">
            {/* Premier composant */}
            <div className="col-span-1 md:col-span-7 lg:col-span-7 max-w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                    {/* Account Balance - 100% width on mobile, 50% on tablets, 35% on larger screens */}
                    <div className="col-span-1 md:col-span-6 lg:col-span-5">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Solde compte</h2>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-start gap-4 mb-6">
                                <BankIcon/>
                                <div>
                                    <h3 className="text-gray-800 font-medium">Compte courant - Principal</h3>
                                    <p className="text-gray-600 text-sm">TG009 01285 **** **** ****</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h1 className="text-4xl font-bold text-gray-900">
                                    1 432 700 <span className="text-gray-600 text-2xl">XOF</span>
                                </h1>
                                <p className="text-gray-500 mt-2">28 January 2021</p>
                            </div>

                            <div className="flex items-center gap-1">
                                <div className="h-1.5 w-6 rounded-full bg-red-600"></div>
                                <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                                <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                            </div>
                        </div>
                    </div>

                    {/* Balance History - 100% width on mobile, 50% on tablets, 65% on larger screens */}
                    <div className="col-span-1 md:col-span-6 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Balance History</h2>
                        <div className="bg-white rounded-xl p-6 shadow-sm h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={balanceData} margin={{top: 10, right: 10, left: 0, bottom: 0}}>
                                    <defs>
                                        <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#C81E1E" stopOpacity={0.2}/>
                                            <stop offset="95%" stopColor="#C81E1E" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: "#6B7280"}}/>
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{fill: "#6B7280"}}
                                        domain={[0, 800]}
                                        ticks={[0, 200, 400, 600, 800]}
                                    />
                                    <Tooltip/>
                                    <Area
                                        type="monotone"
                                        dataKey="balance"
                                        stroke="#C81E1E"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorBalance)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Contracts Section */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Mes contrats en cours</h2>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
                            <Tabs defaultValue="vie" className="w-full md:w-auto">
                                <TabsList className="bg-gray-100 p-1">
                                    <TabsTrigger value="vie"
                                                 className="flex items-center gap-2 data-[state=active]:bg-white">
                                        <Users className="h-4 w-4"/>
                                        <span>Contrats VIE</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="non-vie"
                                                 className="flex items-center gap-2 data-[state=active]:bg-white">
                                        <FileText className="h-4 w-4"/>
                                        <span>Contrats NON-VIE</span>
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                            <Button className="bg-red-100 hover:bg-red-200 text-red-600 font-medium">Rattacher mes
                                contrats</Button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-gray-50">
                                <TableRow>
                                    <TableHead className="font-semibold">N° Contrat</TableHead>
                                    <TableHead className="font-semibold">N° Assuré</TableHead>
                                    <TableHead className="font-semibold">Pays</TableHead>
                                    <TableHead className="font-semibold">Effet</TableHead>
                                    <TableHead className="font-semibold">Echéance</TableHead>
                                    <TableHead className="font-semibold">Prime</TableHead>
                                    <TableHead className="font-semibold">Impayé</TableHead>
                                    <TableHead className="w-[50px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {contracts.map((contract) => (
                                    <TableRow key={contract.id}>
                                        <TableCell className="font-medium">{contract.contractNumber}</TableCell>
                                        <TableCell className="text-blue-500">{contract.insuredNumber}</TableCell>
                                        <TableCell>{contract.country}</TableCell>
                                        <TableCell>{contract.effectDate}</TableCell>
                                        <TableCell className="text-gray-500">{contract.dueDate}</TableCell>
                                        <TableCell className="text-green-500">{contract.premium}</TableCell>
                                        <TableCell className="text-red-500">{contract.unpaid}</TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreVertical className="h-4 w-4"/>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

            {/* Deuxième composant */}
            <div className="col-span-1 md:col-span-3 lg:col-span-3 max-w-full bg-gray-50 p-3">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-bold text-gray-800">Mes cartes</h1>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </div>

                {/* Card */}
                <BankCard/>

                {/* Action buttons */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                    <div className="flex flex-col items-center">
                        <Button
                            className="w-full h-16 border border-gray-300 rounded-full flex items-center justify-center mb-2 bg-inherit hover:bg-gray-50">
                            <div className="text-red-600">
                                <TransferIcon/>
                            </div>
                        </Button>
                        <p className="text-center text-sm">{"Transférer de l'argent"}</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Button
                            className="w-full h-16 border border-gray-300 rounded-full flex items-center justify-center mb-2 bg-inherit hover:bg-gray-50">
                            <div className="text-red-600">
                                <ReleverIcon/>
                            </div>
                        </Button>
                        <p className="text-center text-sm">Voir mon relevé</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Button
                            className="w-full h-16 border border-gray-300 rounded-full flex items-center justify-center mb-2 bg-inherit hover:bg-gray-50">
                            <div className="text-red-600">
                                <SimmerIcon/>
                            </div>
                        </Button>
                        <p className="text-center text-sm">Simuler un prêt</p>
                    </div>
                </div>

                {/* Beneficiaries */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Bénéficiaires</h2>
                    <div className="flex space-x-4 overflow-x-auto">
                        {["AG", "KF", "ID", "ZK"].map((initials) => (
                            <div key={initials}
                                 className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 font-bold">
                                {initials}
                            </div>
                        ))}
                        <Button
                            className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 bg-inherit hover:bg-gray-50">
                            <Plus size={20}/>
                        </Button>
                    </div>
                </div>

                {/* Transactions */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Transactions</h2>
                    <div className="space-y-4">
                        <TransactionItem icon="credit-card" title="Deposit from my" date="28 January 2021"
                                         amount="-$850" amountColor="text-red-500" bgColor="bg-yellow-100"/>
                        <TransactionItem icon="paypal" title="Deposit Paypal" date="25 January 2021" amount="+$2,500"
                                         amountColor="text-green-500" bgColor="bg-gray-200"/>
                        <TransactionItem icon="dollar" title="Jemi Wilson" date="21 January 2021" amount="+$5,400"
                                         amountColor="text-green-500" bgColor="bg-cyan-100"/>
                        <TransactionItem icon="credit-card" title="Deposit from my" date="28 January 2021"
                                         amount="-$850" amountColor="text-red-500" bgColor="bg-yellow-100"/>
                    </div>
                </div>
            </div>
        </div>
    )
}



