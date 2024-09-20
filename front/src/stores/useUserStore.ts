import { create } from 'zustand';
import PocketBase from 'pocketbase';

// Instancia de PocketBase
const pb = new PocketBase('https://bot.lomihost.com');

// Definición del estado y las acciones de la store
interface UserState {
  error: string | null;
  isLoading: boolean;
  createUser: (userData: UserFormData, expedientData: ClinicExpedientData) => Promise<void>;
}

// Datos del formulario para crear un usuario
interface UserFormData {
  username: string;
  email: string;
  emailVisibility: boolean;
  password: string;
  passwordConfirm: string;
  curp: string;
  address: string;
  birth_place: string;
  birth_date: string;
  occupation: string;
  job_place: string;
  user_phone_number: number;
  job_phone_number: number;
}

// Datos para crear un expediente clínico
interface ClinicExpedientData {
  cholesterol: number;
  glucose: number;
  HDL_chol: number;
  chol_HDL_rat: number;
  height: number;
  weight: number;
  BMI: number;
  systolic_BP: number;
  diastolic_BP: number;
  waist: number;
  hip: number;
  waist_hip_ratio: number;
  diabetes: string;
  age: number;
  gender: string;
}

// Creación de la store con Zustand
const useUserStore = create<UserState>((set) => ({
  error: null,
  isLoading: false,

  // Función para crear un usuario y su expediente clínico
  createUser: async (userData, expedientData) => {
    set({ isLoading: true, error: null });

    try {
      // Crear el usuario en la colección 'users'
      const userRecord = await pb.collection('users').create(userData);

      // Crear el expediente clínico usando el ID del usuario recién creado
      const expedientRecord = await pb.collection('clinic_expedient').create({
        ...expedientData,
        patient_number: userRecord.id, // Usa el ID del usuario como patient_number
      });

      console.log('Usuario creado:', userRecord);
      console.log('Expediente clínico creado:', expedientRecord);
    } catch (error: any) {
      console.error('Error al crear usuario o expediente:', error);
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useUserStore;
