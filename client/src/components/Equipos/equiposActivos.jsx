import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomNavbar from '../Navbar';
import './Equipos.css'; 
import { useNavigate } from 'react-router-dom';
//<a href={`/equipos-activos/${equipo._id}`}>{equipo.eqName}</a> - {equipo.eqCode}
const EquiposActivos = () => {
  const [equipos, setEquipos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEquipos, setFilteredEquipos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/equipments')
      .then(response => {
        setEquipos(response.data);
        setFilteredEquipos(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = () => {
    const filtered = equipos.filter(equipo =>
      equipo.eqName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEquipos(filtered);
  };


  //Manejando redirección chequear bien esto
  const handleNombreEquipo = (id, eqName, eqCode) => {
    navigate(`/equipos-activos/${id}`);
    console.log(id, eqName, eqCode);
  };


  return (
    <div>
      <CustomNavbar />
      <div className="containerEquipos pb-5 mr-auto">
        <div className="card p-4 shadow-lg w-100">
          <h1 className="text-center mb-4">EQUIPOS ACTIVOS</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar equipo"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>Buscar</button>
          </div>
          <ul className="list-group">
            {filteredEquipos.map(equipo => (
              <li key={equipo.id} className="list-group-item">
                <a href={`/equipos-activos/${equipo._id}`} onClick={() => handleNombreEquipo(equipo._id, equipo.eqName, equipo.eqCode)}>{equipo.eqName}</a> - {equipo.eqCode}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EquiposActivos;



