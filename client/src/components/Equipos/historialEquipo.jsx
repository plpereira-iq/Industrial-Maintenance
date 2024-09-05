import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import CustomNavbar from '../Navbar';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const HistorialEquipo = () => {
  const { eqName, eqCode } = useParams();

  const [pendingMaintenances, setPendingMaintenances] = useState([]);
  const [maintenanceHistory, setMaintenanceHistory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/maintenances')
      .then(response => {
        const filteredPendingMaintenances = response.data.filter(maintenance => maintenance.eqCode === eqCode);
        setPendingMaintenances(filteredPendingMaintenances);
      })
      .catch(error => {
        console.error('Error fetching pending maintenances:', error);
      });

    axios.get('http://localhost:8000/api/reports')
      .then(response => {
        const filteredMaintenanceHistory = response.data.filter(report => report.eqCode === eqCode);
        setMaintenanceHistory(filteredMaintenanceHistory);
      })
      .catch(error => {
        console.error('Error fetching maintenance history:', error);
      });
  }, [eqCode]);
  const componentRef = useRef();

  const handleGeneratePDF = () => {
    html2canvas(componentRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      pdf.save('historial_equipo.pdf');
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES');
  };

  return (
    <div>
      <CustomNavbar />
      <div className='container mt-4' ref={componentRef}>
      <div className="container mt-4">
        <h1>Historial del Equipo: {eqName}</h1>
        <p><strong>Código del equipo:</strong> {eqCode}</p>

        <h2>Mantenimientos Pendientes</h2>
        <ul>
          {pendingMaintenances.map(maintenance => (
            <li key={maintenance.id}>
              {formatDate(maintenance.mainDate)} - {maintenance.mainDescription}
            </li>
          ))}
        </ul>

        <h2>Historial de Mantenimientos</h2>
        <ul>
          {maintenanceHistory.map(report => (
            <li key={report.id}>
              {formatDate(report.mainDate)} - {report.mainDescription}
            </li>
          ))}
        </ul>
      </div>

      <button className="btn btn-primary" onClick={handleGeneratePDF}>Generar PDF</button>
    </div>
      </div>

  );
};

export default HistorialEquipo;