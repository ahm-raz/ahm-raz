import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 border border-[#00ff00]/30 rounded-full flex items-center justify-center text-[#00ff00]">
                  <FaEnvelope />
                </div>
              </div>
              <h3 className="text-white font-medium">Email</h3>
              <a
                href="mailto:ahmrazsal7@gmail.com"
                className="text-gray-400 hover:text-[#00ff00] transition-colors duration-200"
              >
                ahmrazsal7@gmail.com
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 border border-[#00ff00]/30 rounded-full flex items-center justify-center text-[#00ff00]">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <h3 className="text-white font-medium">Location</h3>
              <p className="text-gray-400">Available Remotely</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 border border-[#00ff00]/30 rounded-full flex items-center justify-center text-[#00ff00]">
                  <span className="text-xs font-bold">✓</span>
                </div>
              </div>
              <h3 className="text-white font-medium">Status</h3>
              <p className="text-[#00ff00] font-medium">Open to Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
