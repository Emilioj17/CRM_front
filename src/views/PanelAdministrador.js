import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/PanelAdministrador.css";
import { Link } from "react-router-dom";

const PanelAdministrador = () => {
    const usuariosInactivos = ["Vendedor 1", "Vendedor 5", "Vendedor 7"]
    const usuariosActivos = ["Vendedor 2", "Vendedor 3", "Vendedor 4", "Vendedor 6", "Vendedor 8"]

    const DivUsuarios = () => {
        //Este DIV genera las tablas de Usuarios Activos/Inactivos en función de las listas de Usuarios de más arriba.
        const Activos = usuariosActivos.map((usuario, index) => {
            return (
                <li key={index}><input type="checkbox" className="form-check-input"></input>{usuario}</li>
            )
        });

        const Inactivos = usuariosInactivos.map((usuario, index) => {
            return (
                <li key={index}><input type="checkbox" className="form-check-input"></input>{usuario}</li>
            )
        });

        return (
            <div className="row">
                <div className="col-6 col-md-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Usuarios Inactivos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <ul>
                                            {Inactivos}
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div  className="col-6 col-md-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Usuarios Activos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <ul>
                                            {Activos}
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    const DivAdicional = () => {
        //Este DIV genera 4 box con distintas opciones que NO están disponibles. Es relleno.
        const box1 = ["Configuración personal", "Detalles de empresa", "Reserva de calendario"];
        const box2 = ["Módulos y campos", "Ciclos de venta", "Plantillas", "Copiar personalización", "Personalizar pantalla de inicio"];
        const box3 = ["Administracion de Datos", "Importar/Exportar", "Copia de seguridad de datos", "Almacenamiento", "Papelera de reciclaje"];
        const box4 = ["Espacio del Desarrollador", "API", "Formularios Web", "Cuenta Google"];

        const Ebox1 = box1.map((elemento, index) => {
            if (index == 0) {
                return(<div key={index}><strong>{elemento}</strong></div>)
            } else {
                return (
                    <li key={index}>{elemento}</li>
                )
            }
        });

        const Ebox2 = box2.map((elemento, index) => {
            if (index == 0) {
                return(<div key={index}><strong>{elemento}</strong></div>)
            } else {
                return (
                    <li key={index}>{elemento}</li>
                )
            }
        });

        const Ebox3 = box3.map((elemento, index) => {
            if (index == 0) {
                return(<div key={index}><strong>{elemento}</strong></div>)
            } else {
                return (
                    <li key={index}>{elemento}</li>
                )
            }
        });

        const Ebox4 = box4.map((elemento, index) => {
            if (index == 0) {
                return(<div key={index}><strong>{elemento}</strong></div>)
            } else {
                return (
                    <li key={index}>{elemento}</li>
                )
            }
        });

        return (
            <div>
                <div className="row m-2">
                    <div className="box box1 rounded col-12 col-md-5 m-2 p-2">{Ebox1}</div>
                    <div className="box box2 rounded col-12 col-md-5 m-2 p-2">{Ebox2}</div>
                </div>
                <div className="row m-2">
                    <div className="box box3 rounded col-12 col-md-5 m-2 p-2">{Ebox3}</div>
                    <div className="box box4 rounded col-12 col-md-5 m-2 p-2">{Ebox4}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="PanelAdministrador">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Administracion de Usuarios</h2>
                </div>
                <DivUsuarios />
                <div className="col-12 col-md-6 d-flex justify-content-start">
                    <Link to="/CrearUsuario"><button type="button" className="btn btn-success">Crear</button></Link>
                    <button type="button" className="btn btn-danger mx-3">Borrar</button>
                    <Link to="/ModificarUsuario"><button type="button" className="btn btn-warning">Modificar</button></Link>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <h2>Administracion de Adicional</h2>
                </div>
                <DivAdicional />
            </div>
      </div>
    );
  };
  export default PanelAdministrador;