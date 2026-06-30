import type { NewsArticle } from '../types';

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Nueva planta de tratamiento de aguas residuales iniciará operaciones',
    excerpt: 'El alcalde de Loja anunció la inauguración de la nueva planta en el sector occidente de la ciudad.',
    content: 'En un esfuerzo continuo por mejorar los servicios básicos, el Municipio de Loja anuncia que la nueva planta de tratamiento de aguas residuales entrará en operaciones la próxima semana. Este proyecto beneficiará a más de 50,000 habitantes y reducirá significativamente la contaminación de los ríos locales. La obra representa una inversión de 5 millones de dólares y fue ejecutada en un plazo de 18 meses.',
    category: 'Obras Públicas',
    date: '15 Jun 2026',
    imageUrl: 'https://picsum.photos/seed/planta/800/500'
  },
  {
    id: '2',
    title: 'Festival Internacional de Artes Vivas Loja 2026',
    excerpt: 'Conoce la agenda oficial del mayor encuentro cultural del sur del país.',
    content: 'El Festival Internacional de Artes Vivas de Loja se prepara para su edición 2026 con más de 200 eventos programados, incluyendo teatro, danza, música y artes plásticas. Participarán delegaciones de 15 países. Las plazas y parques de la ciudad se llenarán de color y arte durante 11 días. El evento espera atraer a más de 100,000 turistas nacionales y extranjeros.',
    category: 'Cultura',
    date: '10 Jun 2026',
    imageUrl: 'https://picsum.photos/seed/teatro/800/500'
  },
  {
    id: '3',
    title: 'Campaña de reforestación "Loja Verde"',
    excerpt: 'Se sembraron más de 5,000 árboles nativos en las cuencas hidrográficas del cantón.',
    content: 'Con la participación de estudiantes, voluntarios y personal municipal, se llevó a cabo la primera jornada de la campaña "Loja Verde". Se sembraron especies nativas como alisos y romerillos en las zonas de recarga hídrica para garantizar el abastecimiento de agua en el futuro y proteger la biodiversidad local.',
    category: 'Ambiente',
    date: '05 Jun 2026',
    imageUrl: 'https://picsum.photos/seed/bosque/800/500'
  },
  {
    id: '4',
    title: 'Renovación de semáforos inteligentes en el centro de la ciudad',
    excerpt: 'El plan de movilidad urbana contempla la instalación de 50 nuevas intersecciones semaforizadas.',
    content: 'Para mejorar el flujo vehicular y garantizar la seguridad de los peatones, el Municipio ha comenzado la instalación de semáforos inteligentes en el casco céntrico. Estos dispositivos cuentan con sensores de tráfico y pueden ser monitoreados desde el centro de control de movilidad.',
    category: 'Movilidad',
    date: '01 Jun 2026',
    imageUrl: 'https://picsum.photos/seed/trafico/800/500'
  }
];
