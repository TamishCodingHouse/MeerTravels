const images = [
  {
    url: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Mountain Peak',
    span: 'row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Beach Paradise',
    span: 'row-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'City Lights',
    span: 'row-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Desert Dunes',
    span: 'row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Tropical Island',
    span: 'row-span-1',
  },
  {
    url: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Forest Trail',
    span: 'row-span-1',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#F6AA09] font-semibold text-sm uppercase tracking-wider bg-slate-800 px-4 py-2 rounded-full inline-block mb-4">
            Travel Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Moments That Inspire
            <span className="block text-transparent bg-clip-text bg-primary-gradient">
              Your Next Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the breathtaking experiences awaiting you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${image.span} cursor-pointer`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
