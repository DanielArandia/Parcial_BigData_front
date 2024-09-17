import React, { useState } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://54.175.55.87:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios', error);
    }
  };

  return (
    <div className="App">
      <h1>Registro de Usuario</h1>
      <UserForm />
      <hr />
      <UserList users={users} />
      <button className="fetch-button" onClick={fetchUsers}>Mostrar Usuarios</button>
    </div>
  );
}

export default App;
