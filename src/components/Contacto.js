import React from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../store/appContext";
import {FaPhone, FaEnvelope} from 'react-icons/fa'
import { useForm } from "../hooks/useForm";

const Contacto = () => {
  
  const initialForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    comments: ''
  }

  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if(!form.contact_form_name.trim()){
      errors.name = 'Este campo es obligatorio'
    } else if (!regexName.test(form.contact_form_name.trim())){
      errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco'
    }



    return errors
    };
  

  const {form, errors,loading,response,handleChange,handleBlur,handleSubmit} = useForm(initialForm, validationsForm)
  



  let history = useHistory()
  const {store, actions} = useContext(AppContext);  
  const [nombre, setNombre] = useState(null);
  const [email, setEmail] = useState(null);
  const [telefono, setTelefono] = useState(null);
  const [motivo, setMotivoDelMensaje] = useState(null);
  const [mensaje, setMensaje] = useState('');

/* const handleSubmit = (e) => {
  e.preventDefault();
  actions.setContactMessage(nombre,email,telefono,motivo,mensaje);
  history.push('/contacto/success')
} */



  return (
    <div id="contacto">
      <div className="container">
        <h1 className="my-5">Contacto</h1>
        <hr />
        <div className="row">
          <div className="col-12 col-md-6 my-3">
            <nav className="navbar navbar-light bg-primary">
              <div className="container-fluid">
                <span className="text-light">Comunicate con nosotros</span>
              </div>
            </nav>
            <form onClick={handleSubmit}>
              <div className="container border" style={{background:"white"}}>
                <input
                  className="w-100 my-2 border"
                  type="text"
                  name="contact_form_name"
                  id="contact_form_name"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={form.contact_form_name}
                  required
                  onBlur={handleBlur}
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}





                <input
                  className="w-100 my-2 border"
                  type="email"
                  name="contact_form_email"
                  id="contact_form_email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={form.contact_form_email}
                  required
                  onBlur={handleBlur}
                />
                <input
                  className="w-100 my-2 border"
                  type="text"
                  name="contact_form_phone"
                  id="contact_form_phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.contact_form_phone}
                />
                <select
                  name="contact_form_subject"
                  id="contact_form_subject"
                  className="form-select my-2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.contact_form_subject}
                >
                  <option defaultValue>Seleccione el motivo del mensaje</option>
                  <option value="Dudas generales">Dudas generales</option>
                  <option value="Soporte Tecnico">Soporte Tecnico</option>
                  <option value="Ventas">Ventas</option>
                  <option value="Post-Venta">Post-venta</option>
                </select>
                <textarea
                  className="form-control w-100 my-2"
                  rows="8"
                  name="contact_form_text"
                  id="contact_form_text"
                  placeholder="Type your message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.contact_form_text}
                  required

                ></textarea>
                <button
                  type="submit"                  
                  className="btn btn-primary mb-5"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6 my-3">
            <div className="container">
              <div className="card border-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.6916667979667!2d-70.61851098426537!3d-33.431282103915905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf7c99c8e8af%3A0x9e6c15ae46a25dc7!2sAntonio%20Varas%20416%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1626104879146!5m2!1ses-419!2scl"
                  width="600"
                  height="450"
                  className="card-img-top"
                  title="map_location"
                ></iframe>
                <div className="card-body">
                  <h5 className="card-title">CRM Headquarters, Chile</h5>
                  <p className="card-text text-muted"><FaEnvelope/> hello@hello.com</p>
                  <p className="card-text text-muted"><FaPhone/> 123456789</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
