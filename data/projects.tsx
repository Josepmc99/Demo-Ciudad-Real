export interface Project {
  id: number;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  cost: string;
  squareMeters: string;
  year: number;
  budget: string;
  description: string;
  amenities: string[];
  features: string[];
  image: string;
  additionalImages: string[];
  mapCoordinates: { latitude: number; longitude: number };
}

const ProjectList = [
  {
    id: 1,
    name: "B1: Revegetación de ejes verdes",
    location: "Calle Obispo Rafael Torija, 13004 - Ciudad Real",
    latitude: 38.99330862901038,
    longitude: -3.9270952911833463,
    cost: "30.000€",
    squareMeters: "2.500 m²",
    year: 2026,
    budget: "X",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
    amenities: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/images/1.jpg",
    additionalImages: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
  {
    id: 2,
    name: "B4: Renaturalización del espacio de los Silos",
    location: "Avda. Valdepeñas, 13004 - Ciudad Real",
    latitude: 38.979116157769006,
    longitude: -3.9197037275731903,
    cost: "34.000€",
    squareMeters: "2.500 m²",
    year: 2026,
    budget: "X",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
    amenities: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/images/2.jpg",
    additionalImages: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
  {
    id: 3,
    name: "B3.2: Eje verde Leopoldo Calvo Sotelo",
    location: "Avda. Calvo Sotelo, 13004 - Ciudad Real",
    latitude: 38.97148113664408,
    longitude: -3.921392951365409,
    cost: "34.000€",
    squareMeters: "2.500 m²",
    year: 2026,
    budget: "X",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
    amenities: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/images/3.jpg",
    additionalImages: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
  {
    id: 4,
    name: "B7.1: Intinerario histórico Calatrava la Vieja (UCLM)",
    location: "Calle Altagrafcia, 50, 13004 - Ciudad Real",
    latitude: 38.98143533935325,
    longitude: -3.934386594929021,
    cost: "34.000€",
    squareMeters: "2.500 m²",
    year: 2026,
    budget: "X",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
    amenities: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/images/4.jpg",
    additionalImages: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
  {
    id: 5,
    name: "B2: Renaturalización del aparacmiento Gasset",
    location: "Parque Gasset, 13004 - Ciudad Real",
    latitude: 38.99397160970634,
    longitude: -3.9216821881939046,
    cost: "34.000€",
    squareMeters: "2.500 m²",
    year: 2026,
    budget: "X",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
    amenities: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/images/5.jpg",
    additionalImages: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
];

export default ProjectList;
