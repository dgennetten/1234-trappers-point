import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Get in Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-xl text-center mb-8 text-gray-600">
              Interested in learning more about this exceptional property? 
              We'd love to hear from you.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Email</p>
                  <a
                    href="mailto:trapperspoint@gennetten.com"
                    className="text-lg text-blue-600 hover:text-blue-800 font-medium"
                  >
                    trapperspoint@gennetten.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <div className="bg-green-600 p-3 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">Location</p>
                  <p className="text-lg text-gray-800 font-medium">
                    1234 Trappers Point, Fort Collins, CO
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Available for private showings by appointment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}