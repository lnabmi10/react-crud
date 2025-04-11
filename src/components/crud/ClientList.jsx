import React from 'react';

function ClientList({ clients, handleEdit, handleDelete, searchTerm, setSearchTerm }) {
  const filteredClients = clients.filter(client =>
    client.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Rechercher par nom..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <tr key={client.id}>
              <td>{client.nom}</td>
              <td>{client.email}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(client)}>
                  Modifier
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(client.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ClientList;
