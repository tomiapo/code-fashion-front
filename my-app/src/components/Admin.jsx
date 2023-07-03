import axios from "axios";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admin/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log("error getting users:", error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/admin/users/${id}`)
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch((error) => console.log("error deleting a user:", error));
  };

  return (
    <div className="bg-gray-100 py-4 px-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Usuarios Registrados</h2>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded shadow flex items-center justify-between px-6 py-3"
          >
            <div>
              <div className="text-sm font-medium text-gray-900">
                {user.firstname}
                {user.lastname}
              </div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
            <button
              onClick={() => handleDelete(user.id)}
              className="text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
