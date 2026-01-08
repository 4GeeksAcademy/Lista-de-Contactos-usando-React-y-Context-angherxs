import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function ContactCard({ contact }) {
  const { deleteContact } = useGlobalReducer();
  const navigate = useNavigate();

  // Foto aleatoria usando ID (lego para estilo divertido)
  const avatar = `https://randomuser.me/api/portraits/lego/${contact.id % 10}.jpg`;

  return (
    <div className="card mb-3 p-3 d-flex flex-row align-items-center gap-3">
      <img
        src={avatar}
        alt={contact.full_name || contact.name}
        width="80"
        height="80"
        style={{ borderRadius: "50%" }}
      />

      <div className="flex-grow-1">
        <h5>{contact.full_name || contact.name}</h5>
        <p className="mb-1">{contact.email}</p>
        <p className="mb-0">{contact.phone}</p>
      </div>

      <div>
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => navigate(`/edit/${contact.id}`)}
        >
          Editar
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteContact(contact.id)}
        >
          Borrar
        </button>
      </div>
    </div>
  );
}