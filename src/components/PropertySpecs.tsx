import { Home, Maximize, Zap, GraduationCap, TrendingUp, HouseHeart } from 'lucide-react';

const specs = [
  {
    icon: Home,
    label: 'Square Footage',
    value: '5,929 sq ft', // Update with actual value
  },
  {
    icon: Maximize,
    label: 'Lot',
    value: '3+ acres, Beach, Dock',
  },
  {
    icon: HouseHeart,
    label: 'Rooms',
    value: '4br, 3.5ba, Office, Cave',
  },
{
    icon: Zap,
    label: 'Avg Monthly Utilities',
    value: '$350', // Update with actual value
  },
  {
    icon: GraduationCap,
    label: 'School District',
    value: 'Poudre R-1, THS', // Update with actual value
  },
  {
    icon: TrendingUp,
    label: 'Estimated Value',
    value: '$2.2M', // Update with actual average
  },
];

export default function PropertySpecs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Property Specifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    {spec.label}
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">
                    {spec.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}