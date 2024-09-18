import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://3.89.96.211:5000/api/data', {
        nombre: firstName,
        apellido: lastName,
        fecha_nacimiento: birthDate,
        password: password
      });
      alert(response.data.message);
      setFirstName('');
      setLastName('');
      setBirthDate('');
      setPassword('');
    } catch (error) {
      console.error('Error al enviar los datos', error);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Apellido:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Fecha de Nacimiento:</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button">Registrar</button>
    </form>
  );
}

export default UserForm;
