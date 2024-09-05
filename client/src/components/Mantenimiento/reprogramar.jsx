import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomNavbar from '../Navbar';

const ReprogramarMantenimiento = () => {
  const { id } = useParams();
  const [reprogramar, setReprogramar] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8000/api/maintenances/${id}`)
      .then(response => {
        setReprogramar(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const [editedMainDate, setEditedMainDate] = useState(reprogramar.mainDate);
  const [editedMainTime, setEditedMainTime] = useState(reprogramar.mainTime);
  const [editedMainDuration, setEditedMainDuration] = useState(reprogramar.mainDuration);
  const [editedMainDescription, setEditedMainDescription] = useState(reprogramar.mainDescription);
 console.log(id)

  const handleSaveChanges = () => {
    const updatedMaintenance = {
      id: id,
      eqName: reprogramar.eqName,
      eqCode: reprogramar.eqCode,
      mainDate: editedMainDate,
      mainTime: editedMainTime,
      mainDuration: editedMainDuration,
      mainDescription: editedMainDescription,
      mainResponsible: reprogramar.mainResponsible
    };

  
    axios.put(`http://localhost:8000/api/maintenances/${id}`, updatedMaintenance)
    .then(response => {
      console.log('Mantenimiento actualizado:', response.data);

      // Enviar el correo después de actualizar el mantenimiento
      return axios.post('http://localhost:8000/api/reprogramarEmail/send-emailReprogramar', updatedMaintenance);
    })
    .then(response => {
      console.log('Correo enviado:', response.data);
      navigate('/mantenimientos-pendientes'); // Redirigir a la lista de mantenimientos pendientes
    })
    .catch(error => {
      console.error('Error programando mantenimiento o enviando correo:', error);
    });
};


  return (
    <div>
      <CustomNavbar />
      <div className="container mt-8">
        <h1 className="text-center mb-4">Reprogramar Mantenimiento</h1>
        <p><strong>Nombre del equipo:</strong> {reprogramar.eqName}</p>
        <p><strong>Código del equipo:</strong> {reprogramar.eqCode}</p>
        <p><strong>Responsable:</strong> {reprogramar.mainResponsible}</p>
        <div className="mb-3">
          <label className="form-label">Fecha de mantenimiento:</label>
          <input type="date" className="form-control" value={editedMainDate} onChange={(e) => setEditedMainDate(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Hora de mantenimiento:</label>
          <input type="text" className="form-control" value={editedMainTime} onChange={(e) => setEditedMainTime(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Duración del mantenimiento:</label>
          <input type="text" className="form-control" value={editedMainDuration} onChange={(e) => setEditedMainDuration(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción del mantenimiento:</label>
          <textarea className="form-control" value={editedMainDescription} onChange={(e) => setEditedMainDescription(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={handleSaveChanges}>Guardar Cambios</button>
      </div>
    </div>
  );
};

export default ReprogramarMantenimiento;