import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../store/appContext';

function Deals() {
    const { store, actions } = useContext(AppContext);
    const { deals } = store;
    const { deleteDeal } = actions;

    let history = useHistory()

    useEffect(() => {
        if (sessionStorage.getItem("token") === null) {
            history.push('/login')
        }
        actions.getContacts();
        actions.getUsers();
        actions.getNotes();
        actions.getEvents();
        actions.getDeals();
    }, [store.token]);

    function handleDelete(id) {
        deleteDeal(id)
        window.location.reload();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between align-items-center mt-5 my-2">
                    <h2 >Tratos</h2>
                </div>
                <>

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Plan</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Creado</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Contacto</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {deals !== null && deals.length > 0 ?
                                deals.map((object, i) =>
                                    <tr key={i}>
                                        <th scope="row">{object.id}</th>
                                        <td>{object.plan}</td>
                                        <td>{object.duration}</td>
                                        <td style={{ width: "40%" }}>{object.description}</td>
                                        <td>{object.create_at}</td>
                                        <td>{object.user_id}</td>
                                        <td>{object.contact_id}</td>
                                        <td>
                                            <Link type="button" className="btn btn-primary mx-1" to={"editar/trato/" + object.id}>Editar</Link>
                                            <button type="button" className="btn btn-danger mx-1" onClick={() => handleDelete(object.id)}>Eliminar</button></td>
                                    </tr>)
                                :
                                <td colspan="9" style={{ height: "100px", padding: "20px" }}><h2 className="text-center"> - no hay datos -</h2></td>
                            }
                        </tbody>
                    </table>

                    <div className="d-flex flex-row-reverse bd-highlight">
                        <Link type="button" className="col-2 btn btn-success my-5 mx-2" to="/crear/trato">Agregar Trato</Link>
                        <Link className="col-2 btn btn-danger my-5 mx-2" to="/BienvenidoVendedor">Atras</Link>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Deals