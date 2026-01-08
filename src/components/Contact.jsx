import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactCard from "./ContactCard";

export default function Contact() {
  const { store } = useGlobalReducer();

  return (
    <div className="container mt-5">
      <h1>Contactos</h1>
      <Link to="/add" className="btn btn-primary mb-3">Añadir Contacto</Link>

      {!store.contacts || store.contacts.length === 0 ? (
        <p className="text-muted text-center">No hay contactos</p>
      ) : (
        store.contacts.map(contact => <ContactCard key={contact.id} contact={contact} />)
      )}
    </div>
  );
}