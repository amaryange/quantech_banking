"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NotFound() {
    const [mounted, setMounted] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
                        style={{
                            width: `${Math.random() * 300 + 50}px`,
                            height: `${Math.random() * 300 + 50}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 1],
                            opacity: [0, 0.7, 0],
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 10,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* 404 Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <h1 className="text-9xl sm:text-[12rem] md:text-[16rem] font-bold text-gray-200 dark:text-gray-800 select-none">
                            404
                        </h1>
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 dark:from-primary dark:to-indigo-400">
                                Page introuvable
                            </h2>
                        </motion.div>
                    </motion.div>

                    {/* Message */}
                    <motion.p
                        className="mt-8 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Oups ! La page que vous recherchez semble avoir disparu dans le cyberespace. Vérifiez l'URL ou essayez l'une
                        des options ci-dessous.
                    </motion.p>

                    {/* Search */}
                    <motion.div
                        className="mt-8 w-full max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <Input
                                type="text"
                                placeholder="Rechercher sur le site..."
                                className="pl-10 pr-16 py-6 rounded-full border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm focus-visible:ring-primary"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button
                                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-full px-4 py-1.5 h-auto"
                                size="sm"
                            >
                                Rechercher
                            </Button>
                        </div>
                    </motion.div>

                    {/* Navigation options */}
                    <motion.div
                        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <Button asChild variant="outline" className="gap-2 rounded-full px-6">
                            <Link href="/dashboard">
                                <ArrowLeft className="h-4 w-4" />
                                Retour
                            </Link>
                        </Button>
                        <Button asChild className="gap-2 rounded-full px-6">
                            <Link href="/dashboard">
                                <Home className="h-4 w-4" />
                                Accueil
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Animated illustration */}
                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <div className="relative w-full max-w-lg aspect-[4/3]">
                        <svg viewBox="0 0 400 300" className="w-full h-full">
                            <motion.path
                                d="M156.4,178.6c0,0-22.9,6.3-30.4-11.2c-7.5-17.5,5.7-28.5,5.7-28.5s-39.7-16.5-27.5-48.8c12.2-32.3,41.5-22.4,48.2-17.5
                c0,0,32.9-34.6,65.3-2.6c0,0,24.1-10.9,38.4,8.3c14.3,19.2-6.1,31.4-6.1,31.4s17.9,10.9,7.5,33.7c-10.4,22.9-32.1,13.1-32.1,13.1
                s-13.9,29.8-47.3,21.1C178.1,177.5,171.1,166.1,156.4,178.6z"
                                fill="#f3f4f6"
                                stroke="#d1d5db"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.circle
                                cx="200"
                                cy="120"
                                r="40"
                                fill="#f3f4f6"
                                stroke="#d1d5db"
                                strokeWidth="2"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
                            />
                            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.5 }}>
                                <circle cx="185" cy="110" r="5" fill="#6366f1" />
                                <circle cx="215" cy="110" r="5" fill="#6366f1" />
                                <motion.path
                                    d="M185,140 Q200,155 215,140"
                                    fill="none"
                                    stroke="#6366f1"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 2.2, duration: 0.8 }}
                                />
                            </motion.g>
                        </svg>

                        {/* Animated particles */}
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-primary/30 dark:bg-primary/50"
                                style={{
                                    width: `${Math.random() * 8 + 3}px`,
                                    height: `${Math.random() * 8 + 3}px`,
                                }}
                                initial={{
                                    x: 200 + Math.random() * 100 - 50,
                                    y: 120 + Math.random() * 100 - 50,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 200 + Math.random() * 200 - 100,
                                    y: 120 + Math.random() * 200 - 100,
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: Math.random() * 2 + 2,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.div
                className="mt-auto pt-10 pb-6 text-center text-gray-500 dark:text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                © {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
            </motion.div>
        </div>
    )
}

