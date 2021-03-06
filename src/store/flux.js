const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: null,
            users: null,
            notes: null,
            events: null,
            deals: null,
            contact: null,
            user: null,
            note: null,
            event: null,
            deal: null,
            response: null,
            error: null,
            userId: null,
            contactMessage: null,
            usuarioActual: null,
            token: null
            // ingreso: []
        },
        actions: {
            getContacts: async () => {
                const store = getStore();
                fetch("http://localhost:5000/api/contacts", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            contacts: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "contacts " + error.message
                        })
                    });
            },
            getUsers: async () => {
                const store = getStore();
                fetch("http://localhost:5000/api/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            users: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "users " + error.message
                        })
                    });
            },
            getNotes: async () => {
                const store = getStore();
                fetch('http://localhost:5000/api/notes', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            notes: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "notes " + error.message
                        })
                    });
            },
            getEvents: async () => {
                const store = getStore();
                fetch('http://localhost:5000/api/events', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            events: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "events " + error.message
                        })
                    });
            },
            getDeals: async () => {
                const store = getStore();
                fetch("http://localhost:5000/api/deals", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            deals: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "deals " + error.message
                        })
                    });
            },
            getContact: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/contacts/" + id, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            contact: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "contact " + error.message
                        })
                    });
            },
            getUser: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/users/" + id, {
                    method: "GET",
                    header: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            user: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "user " + error.message
                        })
                    });
            },
            getNote: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/notes/" + id, {
                    method: "GET",
                    header: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            note: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "note " + error.message
                        })
                    });
            }, getEvent: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/events/" + id, {
                    method: "GET",
                    header: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            event: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "event " + error.message
                        })
                    });
            },
            getDeal: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/deals/" + id, {
                    method: "GET",
                    header: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            deal: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: "deal " + error.message
                        })
                    });
            },
            setContact: async (name, lastName, rut, type, phone, email, userId) => {
                const store = getStore();
                fetch("http://localhost:5000/api/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "type": type,
                        "phone": phone,
                        "email": email,
                        "user_id": userId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            setUser: async (name, lastName, rut, type, phone, email, password, imgB64) => {
                const store = getStore();
                fetch("http://localhost:5000/api/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "type": type,
                        "phone": phone,
                        "email": email,
                        "password": password,
                        "imgB64": imgB64
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            //sendEmailResetPassword: async(email) => {
                //const result = { statusResponse: true, error: null }
                 //try {
                //    await firebase.auth().sendPasswordResetEmail(email)
               // } catch(error) {
                   // result.statusResponse = false
                 //   result.error = error
               // }
            //    return result
           // },
            setNote: async (comment, contactId, userId) => {
                const store = getStore();
                fetch("http://localhost:5000/api/notes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "comment": comment,
                        "user_id": userId,
                        "contact_id": contactId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            setEvent: async (comment, date, contactId, userId) => {
                const store = getStore();
                fetch("http://localhost:5000/api/events", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "comment": comment,
                        "date": date,
                        "user_id": userId,
                        "contact_id": contactId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            setDeal: async (plan, duration, description, contactId, userId) => {
                const store = getStore();
                fetch("http://localhost:5000/api/deals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "plan": plan,
                        "duration": duration,
                        "description": description,
                        "user_id": userId,
                        "contact_id": contactId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            editContact: async (id, name, lastName, rut, type, phone, email, userId) => {
                const store = getStore();
                fetch("http://localhost:5000/api/contacts/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "type": type,
                        "phone": phone,
                        "email": email,
                        "user_id": userId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            editUser: async (id, name, lastName, rut, type, estado, phone, email, imgB64) => {
                const store = getStore();
                fetch("http://localhost:5000/api/users/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "type": type,
                        "estado": estado,
                        "phone": phone,
                        "email": email,
                        "imgB64": imgB64
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            editNote: async (id, comment, contactId, userId) => {
                const store = getStore();
                fetch("http://localhost:5000/api/notes/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "comment": comment,
                        "user_id": contactId,
                        "contact_id": userId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            editEvent: async (id, date, comment, contactId, userId) => {
                const store = getStore();
                fetch("http://localhost:5000/api/events/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "comment": comment,
                        "date": date,
                        "user_id": contactId,
                        "contact_id": userId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            editDeal: async (id, plan, duration, description, contactId, userId) => {
                const store = getStore();
                fetch("http://localhost:5000/api/deals/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    },
                    body: JSON.stringify({
                        "plan": plan,
                        "duration": duration,
                        "description": description,
                        "user_id": contactId,
                        "contact_id": userId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            deleteContact: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/contacts/" + id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            deleteUser: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/users/" + id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            deleteNote: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/notes/" + id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            deleteEvent: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/events/" + id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            deleteDeal: async (id) => {
                const store = getStore();
                fetch("http://localhost:5000/api/deals/" + id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + store.token
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            idUser: (id) => {
                setStore({ userId: id })
            },
            setContactMessage: (name, lastName, rut, email, phone, comment) => {
                let userId = 0;
                fetch("http://localhost:5000/api/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "type": "Posible",
                        "phone": phone,
                        "email": email,
                        "user_id": userId
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                        fetch("http://localhost:5000/api/notes", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                "comment": comment,
                                "user_id": userId,
                                "contact_id": data.id
                            })
                        }).then((response) => response.json())
                            .then((data) => {
                                setStore({
                                    response: data
                                })
                            })
                            .catch((error) => {
                                setStore({
                                    error: error.message
                                })
                            });
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            getUsuario: async (mail, password) => {
                const actions = getActions();
                fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ "email": mail, "password": password })
                }).then(res => {

                    if (res.status === 200) return res.json();
                    else if (res.status === 401) {
                        alert("Usuario o clave Incorrecto");
                    }
                }).then(data => {
                    sessionStorage.setItem("usuarioActual", JSON.stringify(data[0]))
                    sessionStorage.setItem("token", data[1])
                    setStore({ usuarioActual: data[0], token: data[1] });
                    // setStore({ ingreso: ["Correcto"] });
                }
                ).catch(error => { console.error("Hay un problemilla", error) })
            },
            crearUsuario: async (name, lastName, rut, type, phone, email, password) => {
                fetch("http://localhost:5000/api/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "type": type,
                        "phone": phone,
                        "email": email,
                        "password": password
                    })
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            response: data
                        })
                        fetch("http://localhost:5000/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ "email": email, "password": password })
                        }).then(res => {

                            if (res.status === 200) return res.json();
                            else if (res.status === 401) {
                                alert("Usuario o clave Incorrecto");
                            }
                        }).then(data => {
                            sessionStorage.setItem("usuarioActual", JSON.stringify(data[0]))
                            sessionStorage.setItem("token", data[1])
                            setStore({ usuarioActual: data[0], token: data[1] });
                        }
                        ).catch(error => { console.error("Hay un problemilla", error) })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            sendEmail: (email) => {
                fetch("http://127.0.0.1:5000/enviarCorreo", {
                    method: "POST",
                    body: JSON.stringify(email)
                }).then(res => {
                    if (res.status === 201) return res.json();
                    else if (res.status === 401) {
                        alert("Error Enviado Correo");
                    }
                }).catch(error => { console.error("Hay un problemilla con el Envio del Correo: ", error) })
            },
            sendEmailRecovery: (email) => {
                fetch("http://127.0.0.1:5000/enviarCorreo", {
                    method: "POST",
                    body: JSON.stringify(email)
                }).then(res => {
                    if (res.status === 201) return res.json();
                    else if (res.status === 401) {
                        alert("Error Enviado Correo");
                    }
                }).catch(error => { console.error("Hay un problemilla con el Envio del Correo: ", error) })
            },
            clearInfo: () => {
                setStore({
                    contact: null,
                    user: null,
                    note: null,
                    deal: null
                })

            }
        }
    };
};

export default getState;