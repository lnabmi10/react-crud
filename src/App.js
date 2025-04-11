import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClientForm from './components/crud/ClientForm';
import ClientList from './components/crud/ClientList';
import Notification from './components/crud/Notification';

const API_URL = 'https://67f8fc36094de2fe6ea00241.mockapi.io/api/v1/clients'; 

function App() {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({ nom: '', email: '' });
  const [editId, setEditId] = useState(null);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await axios.get(API_URL);
      setClients(res.data);
    } catch (err) {
      showNotification('Erreur de chargement', 'error');
    }
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, formData);
        showNotification('Client modifié avec succès');
      } else {
        await axios.post(API_URL, formData);
        showNotification('Client ajouté avec succès');
      }
      setFormData({ nom: '', email: '' });
      setEditId(null);
      fetchClients();
    } catch (err) {
      showNotification('Erreur lors de l\'enregistrement', 'error');
    }
  };

  const handleEdit = (client) => {
    setFormData({ nom: client.nom, email: client.email });
    setEditId(client.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      showNotification('Client supprimé avec succès');
      fetchClients();
    } catch (err) {
      showNotification('Erreur lors de la suppression', 'error');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Gestion des Clients</h2>
      <Notification message={notification.message} type={notification.type} />
      <ClientForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editId={editId}
      />
      <ClientList
        clients={clients}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default App;
