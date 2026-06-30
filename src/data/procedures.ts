import type { Procedure } from '../types';

export const procedures: Procedure[] = [
  {
    id: '1',
    title: 'Pago de Impuestos Prediales',
    description: 'Trámite para el pago anual del impuesto predial urbano y rústico.',
    institution: 'Dirección Financiera',
    requirements: [
      'Cédula de identidad original.',
      'Clave catastral del predio.'
    ],
    steps: [
      'Acercarse a las ventanillas de recaudación o portal web.',
      'Proporcionar la clave catastral.',
      'Realizar el pago correspondiente.',
      'Recibir el comprobante de pago.'
    ],
    cost: 'Variable según avalúo.',
    time: '15 minutos',
    modality: 'Mixta',
    documents: ['Comprobante de pago'],
    category: 'Trámites en línea'
  },
  {
    id: '3',
    title: 'Línea de Fábrica',
    description: 'Documento que certifica las afectaciones y regulaciones para un lote de terreno.',
    institution: 'Regulación Urbana',
    requirements: [
      'Copia de escritura.',
      'Certificado de no adeudar al municipio.',
      'Croquis de ubicación.'
    ],
    steps: [
      'Ingresar la solicitud por ventanilla.',
      'Pago de la tasa correspondiente.',
      'Inspección técnica (si aplica).',
      'Emisión del certificado.'
    ],
    cost: '$3.00',
    time: '3 días laborables',
    modality: 'Presencial',
    documents: ['Certificado de Línea de Fábrica'],
    category: 'Construcción'
  }
];
