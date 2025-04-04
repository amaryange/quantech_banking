import type { Metadata } from "next"
import AuthForm from "@/components/app-component/auth-form";

export const metadata: Metadata = {
    title: "Authentification | Banking App",
    description: "Sécurisez votre connexion pour accéder à vos comptes",
}

export default function AuthPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4 md:p-8">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="h-12 w-12 rounded-full bg-emerald-600 p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-full w-full text-white"
                            >
                                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                                <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">Quantech Banking</h1>
                    <p className="mt-2 text-sm text-slate-600">Connectez-vous pour accéder à vos comptes</p>
                </div>
                <AuthForm />
            </div>
            <div className="mt-8 text-center text-xs text-slate-500">
                <p>© 2024 Quantech Banking. Tous droits réservés.</p>
                <div className="mt-2 flex justify-center space-x-4">
                    <a href="#" className="hover:text-emerald-600">
                        Termes
                    </a>
                    <a href="#" className="hover:text-emerald-600">
                        Politique de confidentialité
                    </a>
                    <a href="#" className="hover:text-emerald-600">
                        Securité
                    </a>
                </div>
            </div>
        </main>
    )
}

