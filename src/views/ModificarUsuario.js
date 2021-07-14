import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../style/ModificarUsuario.css";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { AppContext } from '../store/appContext';

const ModificarUsuario = () => {
    const { actions } = useContext(AppContext);
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [rut, setRut] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [type, setType] = useState("Vendedor");
    const [estado, setEstado] = useState("Activo");
    let history = useHistory();

    function handleSubmit(){
        actions.setUser(name, lastName, rut, type, phone, email, estado)
        history.push("/PanelAdministrador");
    }

    return (
        <div className="ModificarUsuario mt-4 py-2">
            <div className="container internoModificarUsuario pb-2">
                <div className="d-flex justify-content-between align-items-center m-2 pb-2">
                    <h2>Modificar Usuario</h2>
                    <div>
                        <button type="button" class="btn btn-success m-2" onClick={handleSubmit}>Guardar</button>
                        <Link to="/PanelAdministrador"><button type="button" class="btn btn-danger m-2">Cancelar</button></Link>
                    </div>
                </div>
                <div className="bodyModificarUsuario pb-2">
                    <div className="row m-2 p-2">
                        <div className="fotoModificarUsuario rounded-circle col-2 col-md-1 d-flex align-items-center justify-content-center"> Foto </div>
                        <div className="col-6">
                            <div className="divResumen m-2">Nombre Vendedor: {name} {lastName}</div>
                            <div className="divResumen m-2">Rol Usuario</div>
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="divResumen p-1 text-center text-white"><h4>Informacion Sobre Usuarios</h4></div>
                        <div className="p-2">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="name" onChange={(event) => setName(event.target.value)}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="last_name" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="last_name" onChange={(event) => setLastName(event.target.value)}/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="rut" className="form-label">Rut</label>
                                    <input type="text" className="form-control" id="rut" onChange={(event) => setRut(event.target.value)}/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="phone" className="form-label">Teléfono</label>
                                    <input type="text" className="form-control" id="phone" onChange={(event) => setPhone(event.target.value)}/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="email" className="form-label">Correo</label>
                                    <input type="text" className="form-control" id="email" onChange={(event) => setEmail(event.target.value)}/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="estado" className="form-label">Estado de Usuario</label>
                                    <select id="estado" className="form-select" onChange={(event) => setEstado(event.target.value)}>
                                        <option defaultValue>Activo</option>
                                        <option>Inactivo</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="admin" className="form-label">Rol de Usuario</label>
                                    <select id="admin" className="form-select" onChange={(event) => setType(event.target.value)}>
                                        <option defaultValue>Vendedor</option>
                                        <option>Administrador</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModificarUsuario;