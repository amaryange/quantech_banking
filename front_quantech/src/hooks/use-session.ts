// Interface pour les données de l'utilisateur
import {create} from "zustand";
import {baseAPI} from "@/lib/baseAPI";

interface User {
    id: number
    fullName: string
    email: string
    createdAt: string
    updatedAt: string
    phone: string
}

// Interface pour le store
interface UserStore {
    user: User | null
    isLoading: boolean
    error: string | null
    fetchUser: () => Promise<void>
    clearUser: () => void
    isAuthenticated: () => boolean
}

// Fonction pour récupérer un cookie par son nom
const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
};

// Création du hook Zustand avec persistance
export const useSession = create<UserStore>()(
    (set, get) => ({
        user: null,
        isLoading: false,
        error: null,

        // Fonction pour récupérer les informations de l'utilisateur
        fetchUser: async () => {
            set({ isLoading: true, error: null });

            try {
                // Récupération du token d'authentification depuis le cookie
                const token = getCookie('authToken');

                if (!token) {
                    throw new Error('Aucun token d\'authentification trouvé');
                }

                const response = await fetch(`${baseAPI.development}/me`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });

                const data = await response.json();

                set({ user: data, isLoading: false });
            } catch (error) {
                set({
                    error: error instanceof Error ? error.message : 'Erreur lors de la récupération des données utilisateur',
                    isLoading: false,
                    user: null
                });
            }
        },

        // Fonction pour effacer les données utilisateur (déconnexion)
        clearUser: () => {
            set({ user: null });
        },

        // Vérifier si l'utilisateur est authentifié
        isAuthenticated: () => {
            return get().user !== null;
        }
    })
);
