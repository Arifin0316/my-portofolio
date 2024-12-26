import React, { useState } from 'react';
import Circles from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Semua field harus diisi!'
      });
      return;
    }

    // Here you can add your form submission logic
    
    Swal.fire({
      icon: 'success',
      title: 'Berhasil!',
      text: 'Terima kasih, pesan Anda berhasil dikirim'
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="h-full bg-primary/30 relative overflow-hidden">
      <div className="absolute -top-1/2 right-0 z-0">
        <Circles />
      </div>

      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full relative z-10">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 w-full"
          >
            <div className="flex gap-x-6 w-full">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name" 
                className="input flex-1" 
                required
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email" 
                className="input flex-1" 
                required
              />
            </div>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject" 
              className="input"
              required
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message" 
              className="textarea"
              required
            ></textarea>
            
            <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="hidden group-hover:block absolute translate-y-[120%] group-hover:translate-y-0 transition-all duration-500 text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;