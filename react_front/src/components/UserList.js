import React from 'react';

function UserList({ users }) {
  return (
    <div className="user-list">
      <h2>Usuarios Registrados</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.first_name} {user.last_name} - Fecha de nacimiento: {user.birth_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
