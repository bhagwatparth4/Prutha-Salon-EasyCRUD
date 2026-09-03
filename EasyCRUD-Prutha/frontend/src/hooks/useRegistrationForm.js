import { useEffect, useState } from "react";
import { deleteUser, fetchUsers, registerUser } from "../api/userService";

export const useRegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    service: "",
    appointmentDate: "",
    appointmentTime: "",
    price: "",
    notes: "",
  });
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const loadUsers = async () => {
    try {
      setUsers(await fetchUsers());
    } catch (error) {
      console.error("Error loading customers:", error);
    }
  };

  useEffect(() => { loadUsers(); }, []);

  const updateField = (field, value) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({
        ...form,
        price: form.price ? Number(form.price) : null,
      });
      setForm({
        name: "", mobileNumber: "", email: "", service: "",
        appointmentDate: "", appointmentTime: "", price: "", notes: "",
      });
      await loadUsers();
      setShowModal(true);
    } catch (error) {
      console.error("Error registering customer:", error);
      alert("Could not save the customer. Please check that the backend is running.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this customer registration?")) return;
    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return { form, updateField, users, showModal, setShowModal, handleSubmit, handleDelete };
};
