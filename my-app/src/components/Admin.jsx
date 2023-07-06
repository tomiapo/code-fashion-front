import axios from "axios";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/admin/users",
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setUsers(response.data);
        setHasAccess(true);
      } else if (response.status === 403) {
        setHasAccess(false);
      }
      return;
    } catch (error) {
      return { msg: "Error retrieving users", error };
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/admin/users/${id}`, {
        withCredentials: true,
      });
      setUsers(users.filter((user) => user.id !== id));
      return;
    } catch (error) {
      return { msg: "error deleting an user", error };
    }
  };

  return (
    <div className="bg-gray-100 py-4 px-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Usuarios Registrados</h2>
      {hasAccess ? (
        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded shadow flex items-center justify-between px-6 py-3"
            >
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {user.first_name}_{user.last_name}
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
      ) : (
        <div className="text-sm font-medium text-gray-900">
          No tienes accesso a esta pagina
        </div>
      )}
    </div>
  );
};

export default Admin;
