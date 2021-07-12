const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: null,
            users: null,
            notes: null,
            deals: null,
            response: null,
            error: null
        },
        actions: {
            getContacts: async () => {
                fetch("localhost:5000/api/contacts", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            contacts: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            getUsers: async () => {
                fetch("localhost:5000/api/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            users: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            getNotes: async () => {
                fetch("localhost:5000/api/notes", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            notes: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            getDeals: async () => {
                fetch("localhost:5000/api/deals", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        setStore({
                            deals: data
                        })
                    })
                    .catch((error) => {
                        setStore({
                            error: error.message
                        })
                    });
            },
            setContact: async (name, lastName, rut, type, phone, email, userId) => {
                fetch("localhost:5000/api/contacts", {
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
            setUser: async (name, lastName, rut, phone, email) => {
                fetch("localhost:5000/api/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "phone": phone,
                        "email": email
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
            setNote: async (comment, contactId, userId) => {
                fetch("localhost:5000/api/notes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
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
            setDeal: async (name, description, contactId, userId) => {
                fetch("localhost:5000/api/deals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
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
            editContact: async (id, name, lastName, rut, type, phone, email, userId) => {
                fetch("localhost:5000/api/contacts/"+id, {
                    method: "PUT",
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
            editUser: async (id, name, lastName, rut, phone, email) => {
                fetch("localhost:5000/api/users"+id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
                        "last_name": lastName,
                        "rut": rut,
                        "phone": phone,
                        "email": email
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
                fetch("localhost:5000/api/notes"+id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
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
            editDeal: async (id, name, description, contactId, userId) => {
                fetch("localhost:5000/api/deals"+id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
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
                fetch("localhost:5000/api/contacts/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
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
                fetch("localhost:5000/api/users/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
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
                fetch("localhost:5000/api/notes/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
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
                fetch("localhost:5000/api/deals/"+id, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
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
            }

        }
    }
};

export default getState;