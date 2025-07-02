const CLIENTS_API = '/api/clients';
import { getAuthHeaders } from '@/utils/auth';


export const getClients = async () => {
  const response = await fetch(CLIENTS_API, {
    headers: getAuthHeaders(),
  });
  if (!response.ok) throw new Error('Erreur lors du chargement des clients');
  return response.json();
};

export const addClient = async (clientData) => {
  const response = await fetch(CLIENTS_API, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(clientData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Erreur ajout client');
  }
  return response.json();
};

export const updateClient = async (clientData) => {
  const response = await fetch(CLIENTS_API, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(clientData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Erreur mise à jour');
  }
  return response.json();
};

export const deleteClient = async (id) => {
  const response = await fetch(`${CLIENTS_API}?id=${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Erreur suppression');
  }
  return response.json();
};
