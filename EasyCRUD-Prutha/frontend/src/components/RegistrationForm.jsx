import React from "react";
import { useRegistrationForm } from "../hooks/useRegistrationForm";
import "./RegistrationForm.css";
import Modal from "./Modal";

const services = [
  "Haircut",
  "Hair Styling",
  "Hair Spa",
  "Hair Color",
  "Facial",
  "Manicure",
  "Pedicure",
  "Bridal Makeup",
  "Party Makeup",
  "Other",
];

const RegistrationForm = () => {
  const { form, updateField, users, showModal, setShowModal, handleSubmit, handleDelete } =
    useRegistrationForm();

  return (
    <main className="salon-page">
      <section className="hero">
        <div className="brand-mark">P</div>
        <div>
          <p className="eyebrow">BEAUTY • CARE • CONFIDENCE</p>
          <h1>Prutha <span>Salon</span></h1>
          <p className="tagline">Where every visit is a little more beautiful.</p>
        </div>
      </section>

      <section className="card registration-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">NEW CLIENT</p>
            <h2>Customer Registration</h2>
          </div>
          <div className="sparkle">✦</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Customer Name *
              <input value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Enter full name" required />
            </label>

            <label>
              Mobile Number *
              <input type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength="10"
                value={form.mobileNumber} onChange={(e) => updateField("mobileNumber", e.target.value.replace(/\D/g, "").slice(0, 10))}
                placeholder="10-digit mobile number" required />
            </label>

            <label>
              Email Address
              <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="Optional" />
            </label>

            <label>
              Service *
              <select value={form.service} onChange={(e) => updateField("service", e.target.value)} required>
                <option value="">Choose a service</option>
                {services.map((service) => <option key={service}>{service}</option>)}
              </select>
            </label>

            <label>
              Appointment Date *
              <input type="date" value={form.appointmentDate} onChange={(e) => updateField("appointmentDate", e.target.value)} required />
            </label>

            <label>
              Appointment Time *
              <input type="time" value={form.appointmentTime} onChange={(e) => updateField("appointmentTime", e.target.value)} required />
            </label>

            <label>
              Estimated Price (₹)
              <input type="number" min="0" step="50" value={form.price} onChange={(e) => updateField("price", e.target.value)} placeholder="e.g. 1500" />
            </label>

            <label className="full-width">
              Notes
              <textarea rows="3" value={form.notes} onChange={(e) => updateField("notes", e.target.value)} placeholder="Any special request or appointment note..." />
            </label>
          </div>

          <button className="submit-button" type="submit">
            Register Customer <span>→</span>
          </button>
        </form>
      </section>

      <section className="card customers-card">
        <div className="list-header">
          <div>
            <p className="eyebrow">CLIENT BOOK</p>
            <h2>Recent Registrations</h2>
          </div>
          <div className="count">{users.length} {users.length === 1 ? "client" : "clients"}</div>
        </div>

        {users.length === 0 ? (
          <div className="empty-state">No customers registered yet. Your first client can be added above ✨</div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Customer</th><th>Mobile</th><th>Service</th><th>Appointment</th><th>Price</th><th></th></tr>
              </thead>
              <tbody>
                {users.slice().reverse().map((user) => (
                  <tr key={user.id}>
                    <td><strong>{user.name}</strong><small>{user.email || "No email"}</small></td>
                    <td>{user.mobileNumber}</td>
                    <td><span className="service-pill">{user.service}</span></td>
                    <td>{user.appointmentDate}<small>{user.appointmentTime}</small></td>
                    <td>{user.price ? `₹${Number(user.price).toLocaleString("en-IN")}` : "—"}</td>
                    <td><button className="delete-button" onClick={() => handleDelete(user.id)} aria-label={`Delete ${user.name}`}>×</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {showModal && (
        <Modal message="Customer registered successfully! ✨" onClose={() => setShowModal(false)} />
      )}
    </main>
  );
};

export default RegistrationForm;
