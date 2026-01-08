import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export default function AddContact() {
  const { addContact } = useGlobalReducer();
  const navigate = useNavigate();

  const [form, setForm] = useState({ full_name: "", email: "", phone: "", address: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await addContact({ ...form });
    navigate("/contacts");
  };

  return (
    <div className="container mt-5">
      <h1>Nuevo Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input name="full_name" placeholder="Nombre" className="form-control mb-2" onChange={handleChange} />
        <input name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} />
        <input name="phone" placeholder="Teléfono" className="form-control mb-2" onChange={handleChange} />
        <input name="address" placeholder="Dirección" className="form-control mb-2" onChange={handleChange} />
        <button className="btn btn-success">Guardar</button>
      </form>
    </div>
  );
}