import { Link } from "react-router-dom"; // Lisää Link-komponentti
function Services() {
  const services = [
    {
      id: 1,
      title: "Ripsipidennykset",
      description: "Luonnolliset ja klassiset ripsipidennykset juuri sinun tyyliisi.",
      price: "50€",
      image: "/images/pic3.jpg", // public-kansiosta käytä "/images/..."
    },
    {
      id: 2,
      title: "Ripsihuolto",
      description: "Pidä ripsesi kauniina ja kestävinä säännöllisellä huollolla.",
      price: "30€",
      image: "/images/pic2.jpg", // public-kansiosta käytä "/images/..."
    },
    {
      id: 3,
      title: "Kulmien laminointi",
      description: "Täydellisesti muotoillut kulmat, jotka kestävät pitkään.",
      price: "40€",
      image: "/images/pic11.jpg", // public-kansiosta käytä "/images/..."
    },
  ];

  return (
    <section id="services" className="mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Palvelumme</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-md mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            <p className="text-blue-500 font-bold mt-2">{service.price}</p>
            <p className="mt-4 mb-6 text-gray-700">
              Valitse palvelu ja varaa aika
            </p>
            <Link
              to="/services"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Varaa palvelu
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
