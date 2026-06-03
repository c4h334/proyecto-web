// src/services/AuthService.ts

const API_BASE_URL = "https://localhost:5001/api"; 

export const AuthService = {
  login: async (credentials: unknown) => {
    // CORRECCIÓN AQUÍ: Apuntando a la ruta exacta del controlador y método
    const response = await fetch(`${API_BASE_URL}/authorization/authorize`, { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) {
        const errorText = await response.text();
        console.error("Error en Login:", errorText);
        throw new Error('Credenciales inválidas');
    }
    return response.json(); 
  },

  register: async (userData: unknown) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Fallo la validación en el Backend (Error 400):", errorText);
      throw new Error(`El servidor rechazó los datos: ${errorText}`);
    }
    
    return response.json();
  }
};