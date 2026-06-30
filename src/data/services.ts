import type { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Pago de Impuestos',
    description: 'Consulta y paga tus impuestos prediales de forma rápida y segura.',
    category: 'Trámites en línea',
    iconName: 'credit-card',
  },
  {
    id: '2',
    title: 'Permiso de Funcionamiento',
    description: 'Obtén o renueva el permiso de funcionamiento para tu local comercial.',
    category: 'Comercial',
    iconName: 'store',
  },
  {
    id: '3',
    title: 'Línea de Fábrica',
    description: 'Solicita la línea de fábrica para iniciar proyectos de construcción.',
    category: 'Construcción',
    iconName: 'ruler',
  },
  {
    id: '4',
    title: 'Recolección de Basura',
    description: 'Consulta los horarios y rutas de recolección en tu sector.',
    category: 'Ambientales',
    iconName: 'trash-2',
  },
  {
    id: '5',
    title: 'Agua Potable',
    description: 'Servicios relacionados con conexiones, medidores y planillas de agua.',
    category: 'Básicos',
    iconName: 'droplet',
  },
  {
    id: '6',
    title: 'Actividades Culturales',
    description: 'Agenda de eventos, talleres y exposiciones en teatros municipales.',
    category: 'Culturales',
    iconName: 'calendar',
  },
  {
    id: '7',
    title: 'Seguridad Ciudadana',
    description: 'Reporte de incidencias y solicitud de cámaras de videovigilancia.',
    category: 'Seguridad',
    iconName: 'shield',
  },
  {
    id: '8',
    title: 'Becas Estudiantiles',
    description: 'Información y postulación para programas de ayuda educativa.',
    category: 'Educativos',
    iconName: 'graduation-cap',
  }
];

export const categories = [
  'Todos',
  'Trámites en línea',
  'Comercial',
  'Construcción',
  'Ambientales',
  'Básicos',
  'Culturales',
  'Seguridad',
  'Educativos',
  'Sociales',
  'Informativos'
];
