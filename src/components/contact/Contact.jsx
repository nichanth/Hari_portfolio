import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AmbientParallaxBackground from "../AmbientParallaxBackground";

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    // REPLACE THESE STRINGS WITH YOUR REAL CONFIG FROM THE EMAILJS DASHBOARD
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setIsSending(false);
          setIsSuccess(true);
          setStatusMessage("Message sent successfully! I'll get back to you shortly.");
          formRef.current.reset();
        },
        (error) => {
          setIsSending(false);
          setIsSuccess(false);
          setStatusMessage("Failed to send message. Please try again or email directly.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 relative overflow-hidden bg-slate-950 text-white">
      {/* Global parallax blur tracker integration */}
      <AmbientParallaxBackground />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE: TEXT CONTENT & DEFENSIBLY WRAPPED DETAIL CHIPS */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <p className="text-slate-300 text-base md:text-lg leading-8 md:leading-9">
                Interested in automotive embedded systems, AUTOSAR architecture, ECU development, or
                technical leadership collaboration?
              </p>

              <p className="text-slate-300 text-base md:text-lg leading-8 md:leading-9">
                Feel free to connect with me regarding automotive software engineering opportunities,
                embedded systems consulting, and innovative vehicle technology projects.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="space-y-4 w-full">
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 min-w-0">
                <p className="text-cyan-400 text-xs font-mono tracking-wider">EMAIL</p>
                <a 
                  href="mailto:shrihariprasath.bs@gmail.com" 
                  className="text-lg font-semibold mt-2 block text-slate-100 hover:text-cyan-400 transition break-all"
                >
                  shrihariprasath.bs@gmail.com
                </a>
              </div>

              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 min-w-0">
                <p className="text-cyan-400 text-xs font-mono tracking-wider">LINKEDIN</p>
                <a 
                  href="https://www.linkedin.com/in/shrihariprasath-basuvaiyan-5792131b6/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base font-medium mt-2 block text-slate-100 hover:text-cyan-400 transition break-all"
                >
                  linkedin.com/in/shrihariprasath-basuvaiyan
                </a>
              </div>

              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 min-w-0">
                <p className="text-cyan-400 text-xs font-mono tracking-wider">DOMAIN</p>
                <h3 className="text-lg font-semibold mt-2 text-slate-100">
                  Automotive Embedded Systems
                </h3>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: SECURED FRONTEND INTERACTIVE FORM */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 w-full">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="text-slate-300 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3.5 rounded-xl bg-slate-900/60 border border-white/10 outline-none focus:border-cyan-400 text-slate-100 transition-colors"
                />
              </div>

              <div>
                <label className="text-slate-300 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3.5 rounded-xl bg-slate-900/60 border border-white/10 outline-none focus:border-cyan-400 text-slate-100 transition-colors"
                />
              </div>

              <div>
                <label className="text-slate-300 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-2 px-4 py-3.5 rounded-xl bg-slate-900/60 border border-white/10 outline-none focus:border-cyan-400 text-slate-100 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Informative Submission Feedback Message Container */}
              {statusMessage && (
                <div className={`p-3 rounded-xl text-sm font-medium ${isSuccess ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-rose-500/10 text-rose-400 border border-rose-500/20"}`}>
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 disabled:text-slate-500 transition text-slate-950 font-bold tracking-wide shadow-[0_4px_20px_rgba(34,211,238,0.2)] cursor-pointer"
              >
                {isSending ? "Processing Transmission..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}