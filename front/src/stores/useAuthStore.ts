import { create } from 'zustand';
import pb from '@/lib/pocketbase';

// Definición del tipo de usuario
interface User {
  id: string;
  username: string;
  email: string;
}

// Definición del estado y las acciones de la store
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Función para cargar el estado desde localStorage
const loadState = (): Partial<AuthState> => {
  if (typeof window === 'undefined') {
    return { user: null, token: null, isAuthenticated: false };
  }
  try {
    const user = JSON.parse(localStorage.getItem('user') || 'null') as User | null;
    const token = localStorage.getItem('token') || null;
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated') || 'false') as boolean;
    return { user, token, isAuthenticated };
  } catch (error) {
    console.error('Failed to load state from localStorage:', error);
    return { user: null, token: null, isAuthenticated: false }; // Valores predeterminados
  }
};

// Creación de la store con Zustand
const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,

  // Sobreescribe el estado inicial con los valores cargados de localStorage
  ...loadState(),

  // Acción para iniciar sesión
  login: async (email: string, password: string) => {
    try {
      await pb.collection('users').authWithPassword(email, password);
      const user = pb.authStore.model as User;
      const token = pb.authStore.token;
      const isAuthenticated = pb.authStore.isValid;

      // Actualiza el estado y guarda en localStorage
      set({ user, token, isAuthenticated, error: null });
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    } catch (error: any) {
      set({ error: error.message });
    }
  },

  // Acción para cerrar sesión
  logout: () => {
    pb.authStore.clear();
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      error: null,
    });
    // Limpia el localStorage al cerrar sesión
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
  },
}));

export default useAuthStore;
