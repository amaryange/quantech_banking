"use client"

import {Deposit} from "@/components/images-svg/deposit";
import {PaypalIcon} from "@/components/images-svg/paypal-icon";
import {DollarCircle} from "@/components/images-svg/dollar-circle";

interface TransactionItemProps {
    icon: string
    title: string
    date: string
    amount: string
    amountColor: string
    bgColor: string
    descriptionCard?: string
    numberCard?: string
}

export function TransactionItem({ icon, title, date, amount, amountColor, bgColor, descriptionCard, numberCard }: TransactionItemProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center`}>
                    {icon === "credit-card" && (
                        <Deposit/>
                    )}
                    {icon === "paypal" && (
                        <PaypalIcon/>
                    )}
                    {icon === "dollar" && (
                        <DollarCircle/>
                    )}
                </div>

                <div className="ml-4 w-28">
                    <p className="text-sm font-medium text-gray-800 truncate">{title}</p>
                    <p className="text-xs text-gray-400">{date}</p>
                </div>

                {descriptionCard && numberCard && (
                    <div className="w-20">
                        <p className="text-sm font-medium text-gray-800 truncate">{descriptionCard}</p>
                        <p className="text-xs text-gray-400 truncate">{numberCard}</p>
                    </div>
                )}
            </div>

            <p className={`text-sm font-medium ${amountColor}`}>{amount}</p>
        </div>
    )
}
