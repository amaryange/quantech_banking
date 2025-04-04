import {combine} from "zustand/middleware";
import {create, createStore, StoreApi, UseBoundStore} from "zustand";
import {baseAPI} from "@/lib/baseAPI";
import {logger} from "@/lib/logger";
import {toast} from "sonner";

const useAuthStore = create(combine({
    token: null,
    loading: false,
    error: false,
    authenticated: false,
}, (set, get) => ({
    login: async (identifier: string, password: string) => {
        set({loading: true, error: false});
        try {
            const response = await fetch(`${baseAPI.development}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: identifier,
                    password: password,
                }),
            });

            const data = await response.json();
            logger.info(data);

            if (!response.ok) {
                toast.error(`${data.message}`, {
                    style: {
                        background: '#F44336',
                        color: '#ffffff',
                    },
                });
                throw new Error('Network response was not ok');
            }

            // Séparer le token et les informations de l'utilisateur
            const {token} = data;

            document.cookie = `authToken=${token}; path=/; max-age=${60 * 60 * 24}` // expire après 1 jour

            window.location.href = '/dashboard'

            // Mettre à jour le state
            set({token, authenticated: true, loading: false});
        } catch (error) {
            set({error: true, loading: false, authenticated: false});
        }
    },
    logout: () => {

        logger.info('logout')

        // Supprimer le cookie
        document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

        // Réinitialiser le state
        set({token: null, error: false, authenticated: false});

        window.location.href = '/';
    },
})))

export default useAuthStore;
