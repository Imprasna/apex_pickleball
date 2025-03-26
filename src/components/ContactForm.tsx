import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_zu3uo48', // Replace with your EmailJS service ID
        'template_8s2g4b8', // Replace with your EmailJS template ID
        {
          to_email: 'apexpbacademy@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'rxnBmWA_0VxunUvrw' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-20 px-6 bg-emerald-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Reach Out for Pickleball Queries</h2>
        <p className="mb-12">Contact Grit Pickleball Academy in Puducherry for expert pickleball facility website design solutions.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="bg-emerald-800/50 border border-emerald-700 rounded-lg p-3 w-full text-white placeholder-emerald-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="bg-emerald-800/50 border border-emerald-700 rounded-lg p-3 w-full text-white placeholder-emerald-400"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            rows={6}
            className="bg-emerald-800/50 border border-emerald-700 rounded-lg p-3 w-full text-white placeholder-emerald-400"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-white text-emerald-900 px-8 py-3 rounded-lg font-bold transition-colors ${
              isSubmitting 
                ? 'opacity-75 cursor-not-allowed' 
                : 'hover:bg-emerald-100'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default ContactForm;