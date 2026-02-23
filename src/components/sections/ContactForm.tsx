import { useState } from "react";
import type { FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Have a project in mind or want to discuss opportunities? 
              Send me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-[#00ff00]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff00] transition-colors duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-[#00ff00]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff00] transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-[#00ff00]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff00] transition-colors duration-200"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-[#00ff00]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff00] transition-colors duration-200 resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 border-2 border-[#00ff00] text-[#00ff00] font-medium rounded-lg hover:bg-[#00ff00] hover:text-black transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
