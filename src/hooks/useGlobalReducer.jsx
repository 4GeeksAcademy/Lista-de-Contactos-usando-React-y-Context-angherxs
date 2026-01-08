import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());
  const AGENDA_SLUG = "angherxs";

  const fetchContacts = async () => {
    try {
      const res = await fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/${AGENDA_SLUG}`);
      if (!res.ok) throw new Error("API no disponible");
      const data = await res.json();
      dispatch({ type: "set_contacts", payload: data });
    } catch (err) {
      console.error("Error fetching contacts, usando datos locales:", err);
      dispatch({ type: "set_contacts", payload: initialStore().contacts });
    }
  };

  const addContact = async (contact) => {
    try {
      await fetch("https://assets.breatheco.de/apis/fake/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contact, agenda_slug: AGENDA_SLUG }),
      });
      fetchContacts();
    } catch (err) {
      console.error("No se pudo agregar el contacto, actualizando localmente:", err);
      dispatch({ type: "add_contact", payload: contact });
    }
  };

  const updateContact = async (contact) => {
    try {
      await fetch(`https://assets.breatheco.de/apis/fake/contact/${contact.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      fetchContacts();
    } catch (err) {
      console.error("No se pudo actualizar el contacto, actualizando localmente:", err);
      dispatch({ type: "update_contact", payload: contact });
    }
  };

  const deleteContact = async (id) => {
    try {
      await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, { method: "DELETE" });
      fetchContacts();
    } catch (err) {
      console.error("No se pudo borrar el contacto, borrando localmente:", err);
      dispatch({ type: "delete_contact", payload: id });
    }
  };

  useEffect(() => { fetchContacts(); }, []);

  return (
    <StoreContext.Provider value={{ store, dispatch, addContact, updateContact, deleteContact }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  return useContext(StoreContext);
}