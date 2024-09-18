import React from 'react';

function UserList({ users }) {
  return (
    <div className="user-list">
      <h2>Usuarios Registrados</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.nombre} {user.apellido} - Fecha de nacimiento: {user.fecha_nacimiento}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
