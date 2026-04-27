import React, { useState, useRef } from "react";
import { personalInfo } from "../mock";
import { Mail, MapPin, Send, Code2, Phone } from "lucide-react";
import { toast } from "sonner";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // Make sure to run: npm install @emailjs/browser

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handle = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }

    setSending(true);

    // Replace these strings with your actual EmailJS IDs
    const SERVICE_ID = "service_dc5d6sa";
    const TEMPLATE_ID = "template_s8s0dqi";
    const PUBLIC_KEY = "nrcKo0UqyL_z483jQ";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setSending(false);
          toast.success("Message sent! I'll reply within 24h.");
          setForm({ name: "", email: "", subject: "", message: "" });
          
          // Optional: Local backup
          const stored = JSON.parse(localStorage.getItem("bn_messages") || "[]");
          stored.push({ ...form, at: new Date().toISOString() });
          localStorage.setItem("bn_messages", JSON.stringify(stored));
        },
        (error) => {
          setSending(false);
          toast.error("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 reveal">
            <div className="mono text-xs tracking-[0.4em] text-cyan-400/90">
              · 05 — CONTACT
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Let&apos;s build <span className="text-gradient">something rare</span>.
            </h2>
            <p className="mt-5 text-slate-400 leading-relaxed">
              Got a product idea, internship, or collaboration in mind? Drop a note
              — I read every message and respond personally.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                data-magnetic
                className="group flex items-center gap-4 glass rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-colors"
              >
                <span className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  <Mail className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs mono tracking-[0.25em] text-slate-500">
                    EMAIL
                  </div>
                  <div className="text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {personalInfo.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 glass rounded-xl p-4 border border-white/10">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center bg-violet-400/10 text-violet-300 border border-violet-400/20">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs mono tracking-[0.25em] text-slate-500">
                    PHONE
                  </div>
                  <div className="text-slate-200">{personalInfo.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 glass rounded-xl p-4 border border-white/10">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-xs mono tracking-[0.25em] text-slate-500">
                    LOCATION
                  </div>
                  <div className="text-slate-200">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                data-magnetic
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:text-cyan-300 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                data-magnetic
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:text-cyan-300 transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                data-magnetic
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:text-cyan-300 transition-colors"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 reveal">
            <form
              ref={formRef}
              onSubmit={submit}
              className="glass rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" value={form.name} onChange={handle} placeholder="Your full name" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={handle} placeholder="you@domain.com" />
              </div>
              <div className="mt-4">
                <Field label="Subject" name="subject" value={form.subject} onChange={handle} placeholder="What's this about?" />
              </div>
              <div className="mt-4">
                <label className="mono text-[11px] tracking-[0.3em] text-slate-500">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handle}
                  placeholder="Tell me about your project, role or idea…"
                  className="mt-2 w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                <p className="mono text-[11px] text-slate-500">
                  All messages are encrypted in transit.
                </p>
                <button
                  type="submit"
                  data-magnetic
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-medium disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-[0_0_40px_rgba(0,210,255,0.4)] transition-shadow"
                >
                  <Send className="w-4 h-4" />
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, ...props }) => (
  <div>
    <label className="mono text-[11px] tracking-[0.3em] text-slate-500">
      {label.toUpperCase()}
    </label>
    <input
      {...props}
      className="mt-2 w-full bg-[#0b0f14] border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/50 transition-colors"
    />
  </div>
);

export default Contact;