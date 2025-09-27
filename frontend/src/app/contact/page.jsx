'use client';
import { useState } from 'react';
import { postSubmission } from '../../lib/apiClient';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);
    try {
      if (!form.name || !form.email || !form.message) {
        throw new Error('Please fill all fields');
      }
      const res = await postSubmission(form);
      setResult({ ok: true, message: `Saved! id=${res?.data?.id}` });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setResult({ ok: false, message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">Contact</h1>
        <form className="space-y-3" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={form.name} onChange={onChange}
              className="w-full border rounded px-3 py-2" placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={onChange}
              className="w-full border rounded px-3 py-2" placeholder="your@email.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} value={form.message} onChange={onChange}
              className="w-full border rounded px-3 py-2" placeholder="Your message" required />
          </div>
          <button type="submit" disabled={isSubmitting}
            className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50">
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
        {result && (
          <div className={`mt-3 text-sm ${result.ok ? 'text-green-700' : 'text-red-700'}`}>
            {result.message}
          </div>
        )}
      </div>
    </div>
  );
}
