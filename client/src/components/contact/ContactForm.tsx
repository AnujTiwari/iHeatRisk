import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "7e719163-9a88-4199-b48d-308eb880fe7b",
        from_name: "iHEATRISK Website",
        subject: "New Contact Form Message from iHEATRISK",
        ...form,
      }),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", topic: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="pt-28 pb-16 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4 text-black">Contact Us</h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Have questions about iHEATRISK or interested in collaborating? We'd love to hear from you.
      </p>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Left Panel */}
        <div className="md:w-[38%] bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 space-y-6">
          <h2 className="text-2xl font-bold">Get In Touch</h2>

          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>info@iheatrisk.com</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Address</h3>
            <div className="flex items-start gap-2">
              <MapPin size={18} className="mt-1" />
              <p>
                iHeatRisk Cardiff-DPI Grant, 200 S. Wacker Dr. 20th Floor,
                Chicago, IL, USA, 60606
                
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-[62%] p-8">
          <h2 className="text-2xl font-semibold mb-6 text-black">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">Name</label>
              <input
                className="w-full p-2 border rounded bg-orange-100"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">Email</label>
              <input
                className="w-full p-2 border rounded bg-orange-100"
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">Subject</label>
              <select
                className="w-full p-2 border rounded bg-orange-100"
                name="topic"
                value={form.topic}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Support">Support</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">Message</label>
              <textarea
                className="w-full p-2 border rounded bg-orange-100"
                name="message"
                placeholder="Your message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow-md transition"
            >
              Send Message ✈️
            </button>

            {status === "success" && (
              <p className="mt-4 text-green-600 text-sm">
                ✅ Your message has been sent. Thank you!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 text-sm">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
