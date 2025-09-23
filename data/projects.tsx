export interface Project {
  id: number;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  cost: string;
  squareMeters: string;
  state: string;
  year: string;
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
    name: "B1: Revegetación de Ejes Verdes. (AGROMORAL)",
    location: "Calle Obispo Rafael Torija, 13004 - Ciudad Real",
    latitude: 38.99330862901038,
    longitude: -3.9270952911833463,
    cost: "X€",
    state: "Finalizado",
    year: "11/06/2025",
    squareMeters: "X m²",
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
    name: "B2: Renaturalización Aparcamiento Gasset (AGROMORAL)",
    location: "Parque Gasset, 13004 - Ciudad Real",
    latitude: 38.99397160970634,
    longitude: -3.9216821881939046,
    cost: "X€",
    state: "En ejecución",
    year: "29/09/2025",
    squareMeters: "X m²",
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
    id: 3,
    name: "B3.1: Creación de Eje Verde en Avda. Jesús Garrido (PROIMANCHA)",
    location: "Avda. de Jesús Garrido, 13004 - Ciudad Real",
    latitude: 38.97534356505185,
    longitude: -3.9244893459639334,
    cost: "X€",
    state: "En ejecución",
    year: "10/02/2026",
    squareMeters: "X m²",
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
    id: 4,
    name: "B3.2: Creación de Eje Verde con Pradera Sostenible en Avda. Leopoldo Calvo Sotelo (DECENNIAL)",
    location: "Avda. Leopoldo Calvo Sotelo, 13004 - Ciudad Real",
    latitude: 38.96992663357858,
    longitude: -3.923057844916591,
    cost: "X€",
    state: "En ejecución",
    year: "25/11/2025",
    squareMeters: "X m²",
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
    id: 5,
    name: "B3.3: Corredor Verde en el Polígono Industrial Avanzado (PIA) (GEOSTINSER)",
    location: "X, 13004 - Ciudad Real",
    latitude: 38.971682982602424,
    longitude: -3.902251097105125,
    cost: "X€",
    state: "Por ejecutar",
    year: "02/01/2026",
    squareMeters: "X m²",
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
    id: 6,
    name: "B4: Renaturalización del Espacio de los Silos como Nodo Verde (PROIMANCHA)",
    location: "X, 13004 - Ciudad Real",
    latitude: 38.97148113664408,
    longitude: -3.921392951365409,
    cost: "X€",
    state: "En ejecución",
    year: " 11/01/2026",
    squareMeters: "X m²",
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
    id: 7,
    name: "B5: Eje Verde Dehesa C. General Espartero (AGROCANO)",
    location: "X, 13004 - Ciudad Real",
    latitude: 38.96971719340843,
    longitude: -3.9331685306185684,
    cost: "X€",
    state: "En ejecución",
    year: " 17/01/2026",
    squareMeters: "X m²",
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
    id: 8,
    name: "B6: Acupuntura Verde en Barrios",
    location: "X, 13004 - Ciudad Real",
    latitude: 38.97428797080648,
    longitude: -3.942961987374368,
    cost: "X€",
    state: "Proceso de licitación",
    year: "Sin determinar",
    squareMeters: "X m²",
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
    id: 9,
    name: "B7.1: Recuperación del intinerario histórico 'Calatrava la Vieja' (UCLM)",
    location: "Calle Altagrafcia, 50, 13004 - Ciudad Real",
    latitude: 38.993762365355664,
    longitude: -3.9254365242706752,
    cost: "X€",
    state: "Finalizado",
    year: "X",
    squareMeters: "X m²",
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
    id: 10,
    name: "B7.3: Regeneración de la vegetación del Campus UCLM",
    location: "Campus universitario UCLM, 13004 - Ciudad Real",
    latitude: 38.992653322006504,
    longitude: -3.926005152599894,
    cost: "X€",
    state: "En ejecución",
    year: "X",
    squareMeters: "X m²",
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
  {
    id: 11,
    name: "B8: Paseo ecosistémico en el Campus exterior y tanque de tormentas para el reciclado de aguas pluviales (SECTOR A-UNI)",
    location: "X, 13004 - Ciudad Real",
    latitude: 38.992843463087375,
    longitude: -3.923747811323258,
    cost: "X€",
    state: "En ejecución",
    year: "X",
    squareMeters: "X m²",
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
  {
    id: 12,
    name: "B9: Cubierta verde experimental",
    location: "X, 13004 - Ciudad Real",
    latitude: 38.98516700198949,
    longitude: -3.931127664208203,
    cost: "X€",
    state: "En ejecución",
    year: "X",
    squareMeters: "X m²",
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
