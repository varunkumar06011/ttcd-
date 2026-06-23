import { useState } from 'react';
import { contact } from '../data/siteContent';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', text: contact.form.validationMessage });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    if (formData.phone && !/^[\d\s\-+()]{7,20}$/.test(formData.phone)) {
      setStatus({ type: 'error', text: 'Please enter a valid phone number.' });
      return;
    }

    // No backend integration — log to console for now.
    console.log('TTCDA contact form submission:', formData);
    setStatus({ type: 'success', text: contact.form.successMessage });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ttcda-charcoal mb-1">
            {contact.form.nameLabel} <span className="text-ttcda-maroon">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-ttcda-gold focus:ring-1 focus:ring-ttcda-gold focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ttcda-charcoal mb-1">
            {contact.form.emailLabel} <span className="text-ttcda-maroon">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-ttcda-gold focus:ring-1 focus:ring-ttcda-gold focus:outline-none"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="phone" className="block text-sm font-semibold text-ttcda-charcoal mb-1">
            {contact.form.phoneLabel}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-ttcda-gold focus:ring-1 focus:ring-ttcda-gold focus:outline-none"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-ttcda-charcoal mb-1">
            {contact.form.messageLabel} <span className="text-ttcda-maroon">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-ttcda-gold focus:ring-1 focus:ring-ttcda-gold focus:outline-none"
          />
        </div>
      </div>

      {status.text && (
        <div
          className={`mt-5 rounded-md px-4 py-3 text-sm font-medium ${
            status.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-ttcda-maroon/5 text-ttcda-maroon border border-ttcda-maroon/10'
          }`}
          role="alert"
        >
          {status.text}
        </div>
      )}

      <button type="submit" className="btn-primary mt-5 w-full md:w-auto">
        {contact.form.submitLabel}
      </button>
    </form>
  );
}
