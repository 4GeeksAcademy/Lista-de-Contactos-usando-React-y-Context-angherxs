export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Hacer la cama",
        background: null,
      },
      {
        id: 2,
        title: "Hacer mi tarea",
        background: null,
      }
    ],
    contacts: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case "set_contacts":
      return { ...store, contacts: action.payload };
    case "add_contact":
      return { ...store, contacts: [...store.contacts, action.payload] };
    case "update_contact":
      return {
        ...store,
        contacts: store.contacts.map(c =>
          c.id === action.payload.id ? action.payload : c
        ),
      };
    case "delete_contact":
      return {
        ...store,
        contacts: store.contacts.filter(c => c.id !== action.payload),
      };
    default:
      throw Error('Unknown action.');
  }
}
