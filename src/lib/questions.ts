import { ExtendedQuestion } from '../types';
import { ProfileType } from '../types';

export const questionPool: ExtendedQuestion[] = [
    // FRONTEND
    {
        id: 1,
        perfil: 'frontend',
        pregunta: '¿Qué tanto disfrutas diseñar interfaces atractivas y funcionales?',
        opciones: [
            { text: 'Muchísimo, es mi parte favorita del desarrollo', score: { frontend: 5, design: 2 } },
            { text: 'Me interesa, pero no es lo que más me apasiona', score: { frontend: 3 } },
            { text: 'Prefiero otras áreas', score: { backend: 2, devops: 1 } },
        ]
    },
    {
        id: 2,
        perfil: 'frontend',
        pregunta: '¿Qué herramientas de frontend te entusiasman más?',
        opciones: [
            { text: 'React, Tailwind, Figma... ¡todas!', score: { frontend: 5 } },
            { text: 'Uso algunas pero no soy fanático', score: { frontend: 3 } },
            { text: 'No me interesa tanto esa parte', score: { backend: 3 } },
        ]
    },

    // BACKEND
    {
        id: 10,
        perfil: 'backend',
        pregunta: '¿Te gusta diseñar la lógica y estructura de una aplicación?',
        opciones: [
            { text: 'Sí, me encanta trabajar con lógica y arquitectura', score: { backend: 5 } },
            { text: 'Lo hago, pero a veces me resulta complejo', score: { backend: 3 } },
            { text: 'Prefiero enfocarme en otros aspectos', score: { frontend: 2, qa: 1 } },
        ]
    },
    {
        id: 11,
        perfil: 'backend',
        pregunta: '¿Qué preferís en un proyecto nuevo?',
        opciones: [
            { text: 'Diseñar las bases del sistema y los endpoints', score: { backend: 5 } },
            { text: 'Revisar cómo se ve primero', score: { frontend: 3 } },
            { text: 'Pensar en cómo probarlo', score: { qa: 3 } },
        ]
    },

    // QA
    {
        id: 20,
        perfil: 'qa',
        pregunta: '¿Qué tanto te gusta detectar errores o inconsistencias en los sistemas?',
        opciones: [
            { text: 'Mucho, me obsesiona que todo funcione bien', score: { qa: 5 } },
            { text: 'Lo hago si es necesario', score: { qa: 3 } },
            { text: 'Prefiero que otros validen', score: { backend: 2 } },
        ]
    },
    {
        id: 21,
        perfil: 'qa',
        pregunta: '¿Qué sentís cuando encontrás un bug importante?',
        opciones: [
            { text: '¡Una gran satisfacción!', score: { qa: 5 } },
            { text: 'Algo de satisfacción, pero prefiero construir', score: { backend: 3 } },
            { text: 'No me interesa tanto encontrar bugs', score: { frontend: 2 } },
        ]
    },

    // DEVOPS
    {
        id: 30,
        perfil: 'devops',
        pregunta: '¿Qué tan importante es para vos automatizar procesos?',
        opciones: [
            { text: 'Es fundamental. Automatizo todo lo que puedo.', score: { devops: 5 } },
            { text: 'Automatizo algunas cosas, pero no todo', score: { devops: 3 } },
            { text: 'Prefiero dedicarme a otras tareas', score: { backend: 2 } },
        ]
    },
    {
        id: 31,
        perfil: 'devops',
        pregunta: '¿Te gusta trabajar con infraestructura y despliegues?',
        opciones: [
            { text: 'Sí, me encanta montar y optimizar entornos', score: { devops: 5 } },
            { text: 'Algo, si es necesario', score: { devops: 3 } },
            { text: 'Prefiero desarrollo puro', score: { backend: 3 } },
        ]
    },

    // SECURITY
    {
        id: 40,
        perfil: 'security',
        pregunta: '¿Te interesa investigar vulnerabilidades y proteger sistemas?',
        opciones: [
            { text: 'Sí, ¡me apasiona la seguridad informática!', score: { security: 5 } },
            { text: 'Me importa pero no me dedico a eso', score: { security: 3 } },
            { text: 'No es mi prioridad', score: { frontend: 2 } },
        ]
    },
    {
        id: 41,
        perfil: 'security',
        pregunta: '¿Te preocupa la privacidad de los datos y la integridad de los sistemas?',
        opciones: [
            { text: 'Sí, es clave en todo desarrollo', score: { security: 5 } },
            { text: 'Es importante, pero no lo vigilo tan de cerca', score: { backend: 3 } },
            { text: 'No suelo pensar mucho en eso', score: { design: 2 } },
        ]
    },

    // DESIGN
    {
        id: 50,
        perfil: 'design',
        pregunta: '¿Disfrutás pensar en la experiencia del usuario?',
        opciones: [
            { text: 'Muchísimo, me encanta diseñar experiencias intuitivas', score: { design: 5, frontend: 2 } },
            { text: 'Sí, aunque no soy diseñador', score: { frontend: 3 } },
            { text: 'No, me interesa más lo técnico', score: { backend: 3 } },
        ]
    },
    {
        id: 51,
        perfil: 'design',
        pregunta: '¿Qué valorás más en un producto digital?',
        opciones: [
            { text: 'Que sea claro, usable y atractivo', score: { design: 5 } },
            { text: 'Que funcione bien internamente', score: { backend: 4 } },
            { text: 'Que esté bien probado', score: { qa: 3 } },
        ]
    }
];
