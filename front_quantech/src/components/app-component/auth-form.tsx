"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {AtSign, Eye, EyeOff, Fingerprint, Lock, Shield, User} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useShallow} from "zustand/react/shallow";
import useAuthStore from "@/hooks/auth-store";

export default function AuthForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const {login, loading, error, authenticated} = useAuthStore(
        useShallow((s) => ({
            login: s.login,
            loading: s.loading,
            error: s.error,
            authenticated: s.authenticated,
        }))
    )

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <Card className="border-slate-200 shadow-lg">
            <CardHeader className="space-y-1">
                <CardTitle className="text-xl text-center">Connexion</CardTitle>
                <CardDescription className="text-center">Entrez vos identifiants pour accéder à vos comptes</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Utilisateur ou email</Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <User className="h-4 w-4 text-slate-400" />
                            </div>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Entrer votre identifiant ou nom d'utilisateur"
                                className="pl-10"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        {error && (
                            <p className="text-xs sm:text-sm font-light text-red-500 mt-2 leading-5 tracking-tight">
                                {"identifiant ou nom d'utilisateur incorrect"}
                            </p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <a href="#" className="text-xs text-emerald-600 hover:underline">
                                Mot de passe oublié ?
                            </a>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Lock className="h-4 w-4 text-slate-400" />
                            </div>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Entrer votre mot de passe"
                                className="pl-10 pr-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-slate-400" />
                                ) : (
                                    <Eye className="h-4 w-4 text-slate-400" />
                                )}
                            </button>
                        </div>
                        {error && (
                            <p className="text-xs sm:text-sm font-light text-red-500 mt-2 leading-5 tracking-tight">
                                mot de passe incorrect
                            </p>
                        )}
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-sm font-normal">
                            Toujours se souvenir de moi pour 30 jours
                        </Label>
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
                        {loading ? "Authentification..." : "S'authentifier"}
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500">Ou continuez avec</span>
                    </div>
                </div>
                <Button variant="outline" className="w-full" type="button">
                    <AtSign className="mr-2 h-4 w-4" />
                    Email professionnel
                </Button>
                <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
                    <Shield className="h-3 w-3" />
                    <span>Sécuriser par 256-bit</span>
                </div>
            </CardFooter>
        </Card>
    )
}
