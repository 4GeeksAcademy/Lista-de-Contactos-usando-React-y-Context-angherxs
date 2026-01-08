import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container mt-5">
      <h1 className="text-center">Contactos</h1>

      {!store.contacts || store.contacts.length === 0 ? (
        <p className="text-center text-muted">No hay contactos</p>
      ) : (
        store.contacts.map(contact => (
          <div key={contact.id} className="card mb-2 p-3 d-flex align-items-center flex-row">
            <img
              src={`https://randomuser.me/api/portraits/lego/${contact.id % 10}.jpg`}
              alt={contact.name}
              className="rounded-circle me-3"
              width="50"
              height="50"
            />
            <div>
              <h5>{contact.full_name || contact.name}</h5>
              <p>{contact.email}</p>
            </div>
          </div>
        ))
      )}

      <hr />

      <h1 className="text-center">Tareas</h1>
      {store.todos.map(todo => (
        <div key={todo.id} className="card mb-2 p-3" style={{ background: todo.background }}>
          {todo.title}
        </div>
      ))}
    </div>
  );
};