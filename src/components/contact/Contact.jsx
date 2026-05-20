import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState({ loading: false, success: null, error: null });

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: null, error: null });

    // FIXING THE INITIALIZATION CONFIGURATION ERROR
    emailjs.sendForm(
      'service_9akc11a',          // Service ID from image_d9864f.jpg
      'YOUR_TEMPLATE_ID',         // Replace with your EmailJS Template ID
      formRef.current,
      'YOUR_PUBLIC_KEY'           // Go to Account -> Public Key in EmailJS to copy this
    )
    .then(() => {
      setFormStatus({ loading: false, success: "Message sent successfully!", error: null });
      formRef.current.reset();
    })
    .catch((err) => {
      setFormStatus({ loading: false, success: null, error: "Failed to send message. Please check config keys." });
      console.error(err);
    });
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 px-4 max-w-6xl mx-auto w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* HEADER MATCH SIGNATURE */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-tight">
          Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Contact Information Cards */}
        <div className="space-y-4">
          <p className="text-slate-400 text-base max-w-md mb-6">
            Have a technical program, design challenge, or system deployment architecture to discuss? Reach out directly.
          </p>
          
          <div className="p-5 rounded-xl bg-slate-900/20 border border-slate-900 flex items-center gap-4">
            <span className="text-xl">📧</span>
            <div>
              <p className="text-xs font-mono text-cyan-400 uppercase">Email Address</p>
              <a href="mailto:shrihariprasath.bs@gmail.com" className="text-sm md:text-base font-bold text-slate-200 hover:text-cyan-400 transition-colors">
                shrihariprasath.bs@gmail.com
              </a>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/20 border border-slate-900 flex items-center gap-4">
            <span className="text-xl">📱</span>
            <div>
              <p className="text-xs font-mono text-cyan-400 uppercase">Phone Number</p>
              <a href="tel:+8201072149924" className="text-sm md:text-base font-bold text-slate-200 hover:text-cyan-400 transition-colors">
                +82 010 7214 9924
              </a>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/20 border border-slate-900 flex items-center gap-4">
            <span className="text-xl">📍</span>
            <div>
              <p className="text-xs font-mono text-cyan-400 uppercase">Current Location</p>
              <p className="text-sm md:text-base font-bold text-slate-200">
                Seoul, South Korea
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Form Card Container */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4 bg-slate-900/10 p-6 md:p-8 rounded-2xl border border-slate-900/80 backdrop-blur-sm">
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Name</label>
            <input type="text" name="user_name" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50 transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Email</label>
            <input type="email" name="user_email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50 transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Message</label>
            <textarea name="message" rows="4" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none" />
          </div>

          <button type="submit" disabled={formStatus.loading} className="w-full py-3 bg-cyan-950/40 border border-cyan-800/60 hover:bg-cyan-500 hover:text-slate-950 rounded-lg text-sm font-bold text-cyan-400 transition-all duration-300 uppercase tracking-wider disabled:opacity-50">
            {formStatus.loading ? "Sending Module..." : "Transmit Message"}
          </button>

          {formStatus.success && <p className="text-xs text-green-400 font-medium mt-2">{formStatus.success}</p>}
          {formStatus.error && <p className="text-xs text-red-400 font-medium mt-2">{formStatus.error}</p>}
        </form>
      </div>
    </motion.section>
  );
}