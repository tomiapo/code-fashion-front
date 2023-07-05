import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperAdmin = () => {
  const [users, setUsers] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/superadmin/users", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data);
          setHasAccess(true);
        } else if (response.status === 403) {
          setHasAccess(false);
        }
      })
      .catch((error) => console.log("Error retrieving users:", error));
  }, []);

  const promoteToAdmin = (userId) => {
    axios
      .get(`http://localhost:8000/api/superadmin/promote/${userId}`, {
        withCredentials: true,
      })
      .then(() => {
        // Refresh the user list
        setUsers((prevUsers) =>
          prevUsers.map((user) => {
            if (user.id === userId) {
              return { ...user, is_seller: true };
            }
            return user;
          })
        );
      })
      .catch((error) => console.log("Failed to promote user:", error));
  };

  const revokeAdminPrivileges = (userId) => {
    axios
      .post(`http://localhost:8000/api/superadmin/revoke/${userId}`, null, {
        withCredentials: true,
      })
      .then(() => {
        // Refresh the user list
        setUsers((prevUsers) =>
          prevUsers.map((user) => {
            if (user.id === userId) {
              return { ...user, is_seller: false };
            }
            return user;
          })
        );
      })
      .catch((error) =>
        console.log("Failed to revoke user privileges:", error)
      );
  };

  return (
    <div className="bg-gray-100 py-4 px-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      {hasAccess ? (
        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded shadow flex items-center justify-between px-6 py-3"
            >
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {user.first_name} {user.last_name}
                </div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>
              {!user.is_seller ? (
                <button
                  onClick={() => promoteToAdmin(user.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Promote
                </button>
              ) : (
                <button
                  onClick={() => revokeAdminPrivileges(user.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-sm font-medium text-gray-900">
          You do not have access to this page.
        </div>
      )}
    </div>
  );
};

export default SuperAdmin;
