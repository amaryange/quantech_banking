"use client"
import { ChevronLeft, ChevronRight, Download, Plus } from "lucide-react"
import { TogoFlag } from "@/components/flag/togo-flag";
import {BankIcon} from "@/components/images-svg/bank";
import Link from "next/link";
import {SimmerIcon} from "@/components/images-svg/simuler-icon";
import TransferIcon from "@/components/images-svg/transfert-icon";

export function BankAccountDetails() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left section - Account info */}
                <div className="md:col-span-6 border-b md:border-b-0 md:border-r pb-6 md:pb-0 md:pr-3">
                    <div className="flex flex-col md:flex-row items-start gap-4 mb-6">
                        <div className="text-red-700">
                            <BankIcon/>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-gray-700 text-lg font-medium">Libellé compte</h3>
                            <h2 className="text-gray-800 text-xl font-semibold">Compte courant - Principal</h2>
                        </div>
                        <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto">
                            <button className="text-red-700 hover:bg-red-50 p-1 rounded">
                                <ChevronLeft className="h-6 w-6"/>
                            </button>
                            <button className="text-red-700 hover:bg-red-50 p-1 rounded">
                                <ChevronRight className="h-6 w-6"/>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-600 text-sm">Code Banque</p>
                                <p className="text-gray-900 font-semibold">TG151</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Code Agence</p>
                                <p className="text-gray-900 font-semibold">01160</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-600 text-sm">Numéro compte</p>
                                <p className="text-gray-900 font-semibold">10733570003</p>
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">Clé RIB</p>
                                <p className="text-gray-900 font-semibold">60</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-600 text-sm">IBAN</p>
                            <p className="text-gray-900 font-semibold break-all">TG534TG82789148448412910039438</p>
                        </div>

                        <div>
                            <p className="text-gray-600 text-sm">CODE SWIFT</p>
                            <p className="text-gray-900 font-semibold">BPECTGTGXXX</p>
                        </div>
                    </div>
                </div>

                {/* Middle section - Balance */}
                <div className="md:col-span-3 border-b md:border-b-0 md:border-r pb-6 md:pb-0 md:px-3">
                    <div className="space-y-6">
                        <div>
                            <p className="text-gray-600 text-md">Mon solde</p>
                            <p className="text-gray-900 text-xl font-bold">12 670 550 XOF</p>
                        </div>

                        <div>
                            <p className="text-gray-600 text-md">Devise</p>
                            <p className="text-gray-900 text-xl font-semibold">XOF</p>
                        </div>

                        <div>
                            <p className="text-gray-600 text-lg">Statut</p>
                            <div
                                className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full font-medium">Actif
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right section - Location */}
                <div className="md:col-span-3 md:pl-3">
                    <div className="space-y-6">
                        <div>
                            <p className="text-gray-600 text-md">Pays domiciliation</p>
                            <div className="flex items-center mt-1">
                                <TogoFlag/>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-600 text-md">Domiciliation Agence</p>
                            <p className="text-gray-900 text-xl font-semibold">Cotonou</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <button
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md font-medium transition-colors">
                    <Plus className="h-5 w-5"/>
                    <span>Nouveau compte</span>
                </button>

                <Link href="/comptes/transfert"
                      className="flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 py-3 px-4 rounded-md font-medium transition-colors">
                    <TransferIcon />
                    <span>Transférer de l&apos;argent</span>
                </Link>

                <button
                    className="flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 py-3 px-4 rounded-md font-medium transition-colors">
                    <Download className="h-5 w-5"/>
                    <span>Télécharger mon RIB</span>
                </button>
            </div>
        </div>
    )
}

