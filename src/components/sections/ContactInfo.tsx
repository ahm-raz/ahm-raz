import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="w-full max-w-full container mx-auto px-4 sm:px-6 min-w-0">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="space-y-2 sm:space-y-3 min-w-0">
              <div className="flex justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-white/30 rounded-full flex items-center justify-center text-gray-700 dark:text-white shrink-0">
                  <FaEnvelope className="text-sm sm:text-base" />
                </div>
              </div>
              <h3 className="text-white font-medium text-sm sm:text-base">Email</h3>
              <a
                href="mailto:ahmrazsal7@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm break-all"
              >
                ahmrazsal7@gmail.com
              </a>
            </div>

            <div className="space-y-2 sm:space-y-3 min-w-0">
              <div className="flex justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-white/30 rounded-full flex items-center justify-center text-gray-700 dark:text-white shrink-0">
                  <FaMapMarkerAlt className="text-sm sm:text-base" />
                </div>
              </div>
              <h3 className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">Location</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Available Remotely</p>
            </div>

            <div className="space-y-2 sm:space-y-3 min-w-0 sm:col-span-2 md:col-span-1">
              <div className="flex justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 dark:border-white/30 rounded-full flex items-center justify-center text-gray-700 dark:text-white shrink-0">
                  <span className="text-xs font-bold">✓</span>
                </div>
              </div>
              <h3 className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">Status</h3>
              <p className="text-gray-900 dark:text-white font-medium text-xs sm:text-sm">Open to Opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
