import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EquiposActivos from './components/Equipos/equiposActivos';
import Equipo from './components/Equipos/unEquipo';
import EquiposObsoletos from './components/Equipos/addEquipoObsoleto';
import ProgramarMantenimiento from './components/Mantenimiento/ProgramarMantenimiento';
import ListaMantenimientosPendientes from './components/Mantenimiento/mainPendientes';
import GenerarInforme from './components/Reports/createMainReports';
import ListaMantenimientosRealizados from './components/Reports/listMainReports';
import ListaObsoletos from './components/Equipos/listaEquiposObsoletos';
import Home from './components/RegistroyLogin/registerAndLogin';
import Inicio from './components/Inicio';
import Registro from './components/RegistroyLogin/register';
import AñadirEquipo from './components/Equipos/añadirEquipo';
import ModificarEquipo from './components/Equipos/modificarEquipo';
import ReprogramarMantenimiento from './components/Mantenimiento/reprogramar';
import HistorialEquipo from './components/Equipos/historialEquipo';
import { Masthead, Services, Portfolio, Team, ContactSection, Footer } from './components/FullLanding';  
import MainNavbar from './components/MainNavBar';



function App() {
  return (
    <div className='App'>
    <MainNavbar/>
    <Masthead/>
    <Services/>
    <Portfolio/>
    <Team/>
    <BrowserRouter>
      <Routes>
        <Route  exact path = "/" default element={<Home/>} />
        <Route exact path = "/inicio-tareas" element={<Inicio/>} />
        <Route exact path='/registro' element={<Registro/>} />
        <Route  exact path = "/añadir-equipo" element={<AñadirEquipo/>} />
        <Route exact path='/modificar-equipo/:id' element={<ModificarEquipo/>}/>
        <Route  exact path = "/equipos-activos" element={<EquiposActivos/>} />
        <Route  exact path = "/equipos-activos/:id" element={<Equipo/>} />
        <Route exact path='/historial-equipo/:id/:eqName/:eqCode' element={<HistorialEquipo/>} />
        <Route  exact path = "/equipos-obsoletos" element={<ListaObsoletos/>} />
        <Route  exact path = "/equipos-obsoletos/agregar" element={<EquiposObsoletos/>} />
        <Route exact path='/programar-mantenimiento' element={<ProgramarMantenimiento />} />
        <Route exact path='/reprogramar-mantenimiento/:id' element={<ReprogramarMantenimiento />} />
        <Route exact path='/mantenimientos-pendientes' element={<ListaMantenimientosPendientes />} />
        <Route exact path='/mantenimientos-realizados' element={<ListaMantenimientosRealizados />} />
        <Route exact path= '/informe-mantenimiento/:eqName/:eqCode/:mainDate/:mainResponsible' element={<GenerarInforme />} />
      </Routes>
    </BrowserRouter>
    <ContactSection/>|
    <Footer/>
    </div>
  );
}

export default App;
