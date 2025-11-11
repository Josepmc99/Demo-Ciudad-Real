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
  properties1: string[];
  properties2: string[];
  properties3: string[];
  properties4: string[];
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
    properties1: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/",
    additionalImages: ["/", "/", "/"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
  {
    id: 2,
    name: "B2: Renaturalización Aparcamiento Gasset (AGROMORAL)",
    location: "Parque Gasset, 13004 - Ciudad Real",
    latitude: 38.99397160970634,
    longitude: -3.9216821881939046,
    cost: "440.927,76 €",
    state: "En ejecución",
    year: "29/09/2025",
    squareMeters: "4.560 m²",
    budget:
      "Convocatoria de subvenciones para la renaturalización y resiliencia de ciudades 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
    properties1: [
      "Selección de especies autóctonas de bajo consumo hídrico",
      "Supresión de tratamientos fitosanitarios",
      "Mantenimiento de coberturas naturales del suelo",
      "Siega controlada de herbáceas anuales tras su ciclo natural",
      "Resiembra natural del terreno",
      "Medidas para el fomento de la biodiversidad (Información complementaria incluida en las acciones C1 y C2)",
    ],
    properties2: [
      "Sistema de goteo para arbolado y arbustos",
      "Agua procedente de la red municipal",
      "Duración mínima para garantizar el arraigo de especies",
      "Desmontaje de la red secundaria una vez alcanzado el arraigo - Objetivo: eficiencia hídrica y mantenimiento responsable",
    ],
    properties3: [
      "Creación de refugios naturales para fauna auxiliar: - Majanos de piedra - Pilas de madera - Refugios para insectos, reptiles y pequeños mamíferos",
    ],
    properties4: [
      "Diseñado para albergar cuatro especies emblemáticas: - Avión → base adaptada para construcción de nidos (listones + malla metálica) - Vancejo → tres nidales por cara del cuadrado estructural - Autillo → dos nidales laterales para esta pequeña rapaz nocturna - Murciélagos → nidales adheridos al propio poste - Estructura orientada a favorecer la presencia de aves urbanas y control biológico de insectos",
    ],
    features: [
      "Jardinería sostenible",
      "Infraestructura de riego",
      "Fomento de la biodiversidad",
      "Poste de fauna (6 m de altura)",
    ],
    image: "/",
    additionalImages: ["/", "/", "/"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
  {
    id: 3,
    name: "B3.1: Creación de Eje Verde en Avda. Jesús Garrido (PROIMANCHA)",
    location: "Avda. de Jesús Garrido, 13004 - Ciudad Real",
    latitude: 38.97534356505185,
    longitude: -3.9244893459639334,
    cost: "270.569,40 €",
    state: "En ejecución",
    year: "10/02/2026",
    squareMeters: "10.880 m²",
    budget:
      "Convocatoria de subvenciones para la renaturalización y resiliencia de ciudades 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
    properties1: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/",
    additionalImages: ["/", "/", "/"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
  {
    id: 4,
    name: "B3.2: Creación de Eje Verde con Pradera Sostenible en Avda. Leopoldo Calvo Sotelo (DECENNIAL)",
    location: "Avda. Leopoldo Calvo Sotelo, 13004 - Ciudad Real",
    latitude: 38.96992663357858,
    longitude: -3.923057844916591,
    cost: "439.254,24 €",
    state: "En ejecución",
    year: "25/11/2025",
    squareMeters: "20.300 m²",
    budget:
      "Convocatoria de subvenciones para la renaturalización y resiliencia de ciudades 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
    properties1: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: [
      "Gestión de praderas sostenibles",
      "Función ambiental y acústica",
      "Red de riego localizado",
      "Integración con el Geoparque Volcanes de Calatrava",
    ],
    image: "/",
    additionalImages: ["/", "/", "/"],
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
    properties1: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/",
    additionalImages: ["/", "/", "/"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
  {
    id: 6,
    name: "B4: Renaturalización del Espacio de los Silos como Nodo Verde (PROIMANCHA)",
    location: "X, 13004 - Ciudad Real",
    latitude: 38.97148113664408,
    longitude: -3.921392951365409,
    cost: "346.829,38 €",
    state: "En ejecución",
    year: " 11/01/2026",
    squareMeters: "16.266 m²",
    budget:
      "Convocatoria de subvenciones para la renaturalización y resiliencia de ciudades 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
    properties1: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: [
      "Recuperación del espacio",
      "Mejora de la conectividad urbana",
      "Plantaciones previstas",
      "Corredor verde y drenaje sostenible",
      "Parcela de la esquina Valdepeñas – Parque Cabañeros",
    ],
    image: "/",
    additionalImages: ["/", "/", "/"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
  {
    id: 7,
    name: "B5: Eje Verde Dehesa C. General Espartero (AGROCANO)",
    location: "X, 13004 - Ciudad Real",
    latitude: 38.96971719340843,
    longitude: -3.9331685306185684,
    cost: "125.303,8 €",
    state: "En ejecución",
    year: " 17/01/2026",
    squareMeters: "9.700 m²",
    budget:
      "Convocatoria de subvenciones para la renaturalización y resiliencia de ciudades 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
    properties1: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: [
      "Ubicación y superficie",
      "Zona esquina Avenida Reyes Católicos",
      "Parcelas próximas a la Ronda Sur",
      "Totales estimados:",
      "Integración paisajística",
      "Riego y mantenimiento",
    ],
    image: "/",
    additionalImages: ["/", "/", "/"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
  {
    id: 8,
    name: "B6: Acupuntura Verde en Barrios",
    location: "X, 13004 - Ciudad Real",
    latitude: 38.97428797080648,
    longitude: -3.942961987374368,
    cost: "225.838,50 €",
    state: "Proceso de licitación",
    year: "Sin determinar",
    squareMeters: "697 m²",
    budget:
      "Convocatoria de subvenciones para la renaturalización y resiliencia de ciudades 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ",
    properties1: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: [
      "Acciones piloto y enfoque de economía circular",
      "Urbanismo táctico verde – Barrio Pío XII",
      "Ubicación y superficie",
      "Diseño y elementos",
      "2️Urbanismo táctico verde – Barrio San Antón",
      "Mejora climática y naturalización",
      "3️Eje arbolado de conexión Ronda Sur – Vía Verde",
      "Conectividad verde y diseño",
      "Finalidad de las acciones",
    ],
    image: "/",
    additionalImages: ["/", "/", "/"],
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
    properties1: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/",
    additionalImages: ["/", "/", "/"],
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
    properties1: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/",
    additionalImages: ["/", "/", "/"],
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
    properties1: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/",
    additionalImages: ["/", "/", "/"],
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
    properties1: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    image: "/",
    additionalImages: ["/", "/", "/"],
    mapCoordinates: { latitude: 38.85, longitude: -77.0369 },
  },
];

export default ProjectList;
