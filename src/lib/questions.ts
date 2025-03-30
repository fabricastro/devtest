import { ExtendedQuestion } from '../types';

export const questionPool: ExtendedQuestion[] = [
    // FRONTEND
    {
        id: 1,
        perfil: 'frontend',
        pregunta: '¿Qué tanto disfrutas diseñar interfaces atractivas y funcionales?',
        opciones: [
            { text: 'Me apasiona completamente', score: { frontend: 5, design: 2 } },
            { text: 'Me gusta bastante', score: { frontend: 4 } },
            { text: 'Lo hago con gusto si es necesario', score: { frontend: 3 } },
            { text: 'Prefiero tareas más técnicas', score: { backend: 2 } },
            { text: 'No me interesa para nada', score: { backend: 3, devops: 1 } }
        ]
    },
    {
        id: 2,
        perfil: 'frontend',
        pregunta: '¿Qué tan familiarizado estás con frameworks de UI como React, Vue o Angular?',
        opciones: [
            { text: 'Trabajo con ellos a diario', score: { frontend: 5 } },
            { text: 'Tengo buena experiencia', score: { frontend: 4 } },
            { text: 'Los conozco pero no los uso mucho', score: { frontend: 2 } },
            { text: 'Solo he visto algo por encima', score: { qa: 1 } },
            { text: 'No los conozco', score: { backend: 1 } }
        ]
    },
    {
        id: 3,
        perfil: 'frontend',
        pregunta: '¿Qué es más importante para vos al diseñar una UI?',
        opciones: [
            { text: 'La estética visual', score: { design: 5, frontend: 2 } },
            { text: 'La usabilidad y accesibilidad', score: { frontend: 5 } },
            { text: 'El rendimiento de carga', score: { devops: 2, frontend: 2 } },
            { text: 'El cumplimiento de specs', score: { qa: 2 } },
            { text: 'No es algo que considere', score: { backend: 1 } }
        ]
    },
    {
        id: 4,
        perfil: 'frontend',
        pregunta: '¿Qué tipo de tareas frontend preferís?',
        opciones: [
            { text: 'Prototipado y diseño de componentes', score: { design: 4, frontend: 2 } },
            { text: 'Integración con APIs y manejo de estado', score: { frontend: 5 } },
            { text: 'Animaciones y microinteracciones', score: { frontend: 4, design: 1 } },
            { text: 'Debug de errores visuales', score: { qa: 3, frontend: 2 } },
            { text: 'Ninguna de esas', score: { backend: 2 } }
        ]
    },
    {
        id: 5,
        perfil: 'frontend',
        pregunta: '¿Qué herramientas usás regularmente en tareas de frontend?',
        opciones: [
            { text: 'Figma, Tailwind, Next.js, Storybook', score: { frontend: 5 } },
            { text: 'CSS puro y HTML clásico', score: { frontend: 3 } },
            { text: 'Bootstrap o librerías sencillas', score: { frontend: 3 } },
            { text: 'No suelo hacer frontend', score: { backend: 3 } },
            { text: 'Solo diseño en papel o prototipos', score: { design: 3 } }
        ]
    },
    // BACKEND
    {
        id: 10,
        perfil: 'backend',
        pregunta: '¿Qué tan cómodo te sentís trabajando con bases de datos?',
        opciones: [
            { text: 'Muy cómodo, diseño y optimizo consultas', score: { backend: 5, dba: 2 } },
            { text: 'Sé lo básico para CRUDs', score: { backend: 4 } },
            { text: 'Prefiero que otro se encargue de eso', score: { frontend: 2 } },
            { text: 'Me interesa pero necesito aprender más', score: { backend: 3 } },
            { text: 'Evito todo lo relacionado a bases de datos', score: { qa: 1 } }
        ]
    },
    {
        id: 11,
        perfil: 'backend',
        pregunta: '¿Qué lenguaje preferís para lógica de servidor?',
        opciones: [
            { text: 'JavaScript / TypeScript con Node.js', score: { backend: 4 } },
            { text: 'Python o Ruby', score: { backend: 4 } },
            { text: 'Java o .NET', score: { backend: 5 } },
            { text: 'No trabajo en backend', score: { frontend: 2 } },
            { text: 'Solo conozco scripts básicos', score: { devops: 2 } }
        ]
    },
    {
        id: 12,
        perfil: 'backend',
        pregunta: '¿Cuál es tu rol ideal en un equipo de desarrollo?',
        opciones: [
            { text: 'Diseñar arquitecturas y APIs robustas', score: { backend: 5 } },
            { text: 'Optimizar queries y modelos de datos', score: { dba: 4, backend: 3 } },
            { text: 'Controlar integraciones y seguridad', score: { backend: 3, security: 2 } },
            { text: 'Apoyar en tareas de frontend también', score: { frontend: 3 } },
            { text: 'Testear y validar funcionalidades', score: { qa: 3 } }
        ]
    },
    {
        id: 13,
        perfil: 'backend',
        pregunta: '¿Qué tan familiarizado estás con arquitecturas modernas (microservicios, serverless, etc.)?',
        opciones: [
            { text: 'Trabajo con ellas constantemente', score: { backend: 5 } },
            { text: 'Las conozco y a veces las uso', score: { backend: 4 } },
            { text: 'Me interesan pero no tengo experiencia real', score: { backend: 3 } },
            { text: 'Prefiero monolitos simples', score: { devops: 2 } },
            { text: 'No sé de qué se trata', score: { frontend: 1 } }
        ]
    },
    {
        id: 14,
        perfil: 'backend',
        pregunta: '¿Qué tipo de problemas disfrutás resolver más?',
        opciones: [
            { text: 'Problemas algorítmicos y de rendimiento', score: { backend: 5 } },
            { text: 'Errores complejos en lógica de negocio', score: { backend: 4 } },
            { text: 'Bugs visuales o de layout', score: { frontend: 2 } },
            { text: 'Problemas de infraestructura', score: { devops: 3 } },
            { text: 'Vulnerabilidades y fallas de seguridad', score: { security: 3 } }
        ]
    },
    // QA
    {
        id: 20,
        perfil: 'qa',
        pregunta: '¿Cómo reaccionás ante un pequeño bug en producción?',
        opciones: [
            { text: 'Investigo rápido cómo ocurrió y lo reporto', score: { qa: 5 } },
            { text: 'Lo reviso si es urgente', score: { qa: 3 } },
            { text: 'Espero que el desarrollador lo arregle', score: { backend: 2 } },
            { text: 'Me frustra que pase eso', score: { qa: 4, security: 1 } },
            { text: 'No me interesa demasiado', score: { devops: 1 } }
        ]
    },
    {
        id: 21,
        perfil: 'qa',
        pregunta: '¿Qué métodos de testing preferís?',
        opciones: [
            { text: 'Tests manuales y exploratorios', score: { qa: 5 } },
            { text: 'Automatización con herramientas', score: { qa: 5, devops: 2 } },
            { text: 'Ambas opciones según el caso', score: { qa: 4 } },
            { text: 'No uso tests frecuentemente', score: { backend: 2 } },
            { text: 'No sé cómo se testea', score: { frontend: 1 } }
        ]
    },
    {
        id: 22,
        perfil: 'qa',
        pregunta: '¿Qué rol asumís al validar funcionalidades nuevas?',
        opciones: [
            { text: 'Busco romper la aplicación con escenarios extremos', score: { qa: 5 } },
            { text: 'Reviso que cumpla los requisitos', score: { qa: 4 } },
            { text: 'Solo pruebo los casos principales', score: { qa: 3 } },
            { text: 'Solo miro si carga bien', score: { frontend: 1 } },
            { text: 'No suelo testear funciones', score: { backend: 1 } }
        ]
    },
    {
        id: 23,
        perfil: 'qa',
        pregunta: '¿Qué importancia le das a los detalles en una app?',
        opciones: [
            { text: 'Muchísima, incluso en la ortografía', score: { qa: 5, design: 1 } },
            { text: 'Importa, pero más la funcionalidad', score: { qa: 4, backend: 2 } },
            { text: 'Solo si son visibles al usuario', score: { frontend: 3 } },
            { text: 'No tanto, soy más técnico', score: { devops: 2 } },
            { text: 'Casi ninguna', score: { security: 1 } }
        ]
    },
    {
        id: 24,
        perfil: 'qa',
        pregunta: '¿Qué sentís al encontrar un error no detectado antes?',
        opciones: [
            { text: '¡Me da orgullo descubrirlo!', score: { qa: 5 } },
            { text: 'Me alegra ayudar al equipo', score: { qa: 4 } },
            { text: 'Lo marco pero no me involucro más', score: { qa: 3 } },
            { text: 'Evito involucrarme en testing', score: { backend: 2 } },
            { text: 'No es parte de mi rol', score: { devops: 1 } }
        ]
    },
    // DEVOPS
    {
        id: 30,
        perfil: 'devops',
        pregunta: '¿Qué tan importante te parece automatizar procesos?',
        opciones: [
            { text: 'Es esencial, todo debe estar automatizado', score: { devops: 5 } },
            { text: 'Automatizo siempre que puedo', score: { devops: 4 } },
            { text: 'Solo automatizo tareas repetitivas', score: { devops: 3 } },
            { text: 'Prefiero resolver manualmente si es más rápido', score: { backend: 2 } },
            { text: 'No suelo automatizar procesos', score: { frontend: 1 } }
        ]
    },
    {
        id: 31,
        perfil: 'devops',
        pregunta: '¿Qué herramientas de infraestructura conocés o usás?',
        opciones: [
            { text: 'Docker, Kubernetes, Terraform, etc.', score: { devops: 5 } },
            { text: 'Docker y algo de CI/CD', score: { devops: 4 } },
            { text: 'GitHub Actions, Jenkins, etc.', score: { devops: 3 } },
            { text: 'Uso pipelines básicos', score: { backend: 2 } },
            { text: 'No conozco esas herramientas', score: { frontend: 1 } }
        ]
    },
    {
        id: 32,
        perfil: 'devops',
        pregunta: '¿Qué opinás sobre el trabajo con servidores y entornos productivos?',
        opciones: [
            { text: 'Me encanta y lo hago seguido', score: { devops: 5 } },
            { text: 'Es interesante, aunque estresante', score: { devops: 4 } },
            { text: 'Lo hago si me toca, pero no me gusta mucho', score: { backend: 2 } },
            { text: 'Evito trabajar en producción', score: { qa: 2 } },
            { text: 'Nunca me involucré con eso', score: { frontend: 1 } }
        ]
    },
    {
        id: 33,
        perfil: 'devops',
        pregunta: '¿Qué tanto te interesa optimizar el rendimiento y escalabilidad?',
        opciones: [
            { text: 'Muchísimo, siempre busco mejorar', score: { devops: 5 } },
            { text: 'Sí, especialmente en proyectos grandes', score: { devops: 4 } },
            { text: 'Solo si hay un problema evidente', score: { backend: 3 } },
            { text: 'No suelo preocuparme mucho por eso', score: { design: 1 } },
            { text: 'Nunca trabajé en proyectos donde eso importara', score: { qa: 1 } }
        ]
    },
    {
        id: 34,
        perfil: 'devops',
        pregunta: '¿Qué te resulta más satisfactorio en una entrega de software?',
        opciones: [
            { text: 'Desplegar sin errores de forma automatizada', score: { devops: 5 } },
            { text: 'Reducir tiempos y pasos del pipeline', score: { devops: 4 } },
            { text: 'Ver que el sistema funciona bien', score: { qa: 3 } },
            { text: 'Ver que se ve bien en el frontend', score: { frontend: 2 } },
            { text: 'Cumplir con los requisitos del cliente', score: { backend: 2 } }
        ]
    },
    // SECURITY
    {
        id: 40,
        perfil: 'security',
        pregunta: '¿Qué tan seguido pensás en la seguridad al desarrollar?',
        opciones: [
            { text: 'Siempre, es una prioridad para mí', score: { security: 5 } },
            { text: 'A menudo, especialmente en formularios y APIs', score: { security: 4 } },
            { text: 'Solo si hay datos sensibles involucrados', score: { backend: 3 } },
            { text: 'Dependo de que otros lo validen', score: { qa: 2 } },
            { text: 'Casi nunca lo tengo en cuenta', score: { frontend: 1 } }
        ]
    },
    {
        id: 41,
        perfil: 'security',
        pregunta: '¿Cómo reaccionás ante una vulnerabilidad crítica en tu app?',
        opciones: [
            { text: 'Actúo de inmediato para mitigarla', score: { security: 5 } },
            { text: 'La reporto y busco una solución', score: { security: 4 } },
            { text: 'Intento entender si realmente es grave', score: { backend: 3 } },
            { text: 'Le paso el problema al equipo de seguridad', score: { devops: 2 } },
            { text: 'No sé cómo actuar', score: { design: 1 } }
        ]
    },
    {
        id: 42,
        perfil: 'security',
        pregunta: '¿Qué te interesa más de la ciberseguridad?',
        opciones: [
            { text: 'La prevención y protección de sistemas', score: { security: 5 } },
            { text: 'El análisis forense y auditoría', score: { security: 4 } },
            { text: 'El hacking ético', score: { security: 5 } },
            { text: 'La configuración de firewalls y redes seguras', score: { devops: 2 } },
            { text: 'No es un tema que me interese', score: { frontend: 1 } }
        ]
    },
    {
        id: 43,
        perfil: 'security',
        pregunta: '¿Qué prácticas usás para mejorar la seguridad?',
        opciones: [
            { text: 'Cifrado de datos, autenticación fuerte, validaciones', score: { security: 5 } },
            { text: 'Revisión de permisos y roles', score: { security: 4 } },
            { text: 'Validaciones básicas de inputs', score: { backend: 3 } },
            { text: 'Dependencias actualizadas', score: { devops: 2 } },
            { text: 'Ninguna, confío en los frameworks', score: { qa: 1 } }
        ]
    },
    {
        id: 44,
        perfil: 'security',
        pregunta: '¿Qué tan informado estás sobre amenazas actuales?',
        opciones: [
            { text: 'Leo blogs, sigo comunidades y estoy al día', score: { security: 5 } },
            { text: 'Sigo algunas noticias de vez en cuando', score: { security: 3 } },
            { text: 'Solo investigo cuando hay un problema', score: { backend: 2 } },
            { text: 'Confío en el equipo de seguridad', score: { devops: 2 } },
            { text: 'No estoy al tanto de eso', score: { design: 1 } }
        ]
    },
    // DESIGN
    {
        id: 50,
        perfil: 'design',
        pregunta: '¿Qué tan importante es para vos la estética en una app?',
        opciones: [
            { text: 'Fundamental, el diseño es lo primero que veo', score: { design: 5 } },
            { text: 'Muy importante, pero debe ser funcional también', score: { design: 4, frontend: 1 } },
            { text: 'Solo si afecta la experiencia del usuario', score: { frontend: 3 } },
            { text: 'No tanto, me importa más la lógica', score: { backend: 2 } },
            { text: 'No le doy relevancia al diseño', score: { devops: 1 } }
        ]
    },
    {
        id: 51,
        perfil: 'design',
        pregunta: '¿Con qué herramientas de diseño te sentís más cómodo?',
        opciones: [
            { text: 'Figma, Sketch, Adobe XD', score: { design: 5 } },
            { text: 'Herramientas básicas como Canva', score: { design: 3 } },
            { text: 'Prefiero maquetar directamente en código', score: { frontend: 3 } },
            { text: 'Solo edito imágenes cuando hace falta', score: { qa: 1 } },
            { text: 'No uso herramientas de diseño', score: { backend: 1 } }
        ]
    },
    {
        id: 52,
        perfil: 'design',
        pregunta: '¿Qué es lo que más disfrutás en la etapa de diseño?',
        opciones: [
            { text: 'Crear wireframes e interfaces completas', score: { design: 5 } },
            { text: 'Definir colores, tipografía y estilos visuales', score: { design: 4 } },
            { text: 'Pensar en flujos de usuario e interacciones', score: { design: 3, frontend: 1 } },
            { text: 'Asegurar consistencia visual', score: { design: 2, qa: 1 } },
            { text: 'No participo en el diseño', score: { backend: 1 } }
        ]
    },
    {
        id: 53,
        perfil: 'design',
        pregunta: '¿Qué tan importante es la accesibilidad en tus diseños?',
        opciones: [
            { text: 'Es clave, siempre la tengo en cuenta', score: { design: 5, frontend: 2 } },
            { text: 'Intento aplicarla, aunque me falta aprender', score: { design: 4 } },
            { text: 'Solo si el cliente la exige', score: { design: 3 } },
            { text: 'No suelo pensar en eso', score: { frontend: 1 } },
            { text: 'No sé qué es la accesibilidad', score: { backend: 1 } }
        ]
    },
    {
        id: 54,
        perfil: 'design',
        pregunta: '¿Cómo definís una buena experiencia de usuario?',
        opciones: [
            { text: 'Simple, intuitiva y visualmente atractiva', score: { design: 5 } },
            { text: 'Que permita al usuario cumplir sus objetivos', score: { design: 4 } },
            { text: 'Que no genere errores ni frustración', score: { qa: 3 } },
            { text: 'Que cargue rápido y funcione bien', score: { devops: 2 } },
            { text: 'No suelo pensar en experiencia de usuario', score: { backend: 1 } }
        ]
    },
    //DBA
    {
        id: 60,
        perfil: 'dba',
        pregunta: '¿Qué tan cómodo te sentís trabajando con bases de datos?',
        opciones: [
            { text: 'Muy cómodo, hago diseño y optimización avanzada', score: { dba: 5 } },
            { text: 'Sé modelar y escribir consultas eficientes', score: { dba: 4, backend: 1 } },
            { text: 'Hago consultas básicas para lo que necesito', score: { backend: 3 } },
            { text: 'Uso ORMs y no me meto mucho más', score: { frontend: 2 } },
            { text: 'No trabajo con bases de datos', score: { design: 1 } }
        ]
    },
    {
        id: 61,
        perfil: 'dba',
        pregunta: '¿Qué tipo de bases de datos preferís usar?',
        opciones: [
            { text: 'Relacionales como PostgreSQL o MySQL', score: { dba: 5 } },
            { text: 'NoSQL como MongoDB o Firebase', score: { dba: 4 } },
            { text: 'Ambas según el proyecto', score: { dba: 4, backend: 1 } },
            { text: 'No tengo preferencia', score: { qa: 1 } },
            { text: 'No conozco las diferencias', score: { design: 1 } }
        ]
    },
    {
        id: 62,
        perfil: 'dba',
        pregunta: '¿Qué importancia le das a la integridad de los datos?',
        opciones: [
            { text: 'Máxima, uso constraints, validaciones, backups', score: { dba: 5 } },
            { text: 'Alta, me preocupo por la consistencia', score: { dba: 4 } },
            { text: 'Depende del proyecto', score: { backend: 3 } },
            { text: 'Confío en la app para controlar eso', score: { frontend: 2 } },
            { text: 'No es algo que suelo manejar', score: { qa: 1 } }
        ]
    },
    {
        id: 63,
        perfil: 'dba',
        pregunta: '¿Qué tareas disfrutas más relacionadas a bases de datos?',
        opciones: [
            { text: 'Diseñar esquemas bien estructurados', score: { dba: 5 } },
            { text: 'Optimizar queries lentas', score: { dba: 4 } },
            { text: 'Mantener backups y monitoreo', score: { devops: 3, dba: 3 } },
            { text: 'Conectar base de datos con el backend', score: { backend: 2 } },
            { text: 'Ninguna, me resulta aburrido', score: { design: 1 } }
        ]
    },
    {
        id: 64,
        perfil: 'dba',
        pregunta: '¿Qué tan familiarizado estás con normalización y relaciones?',
        opciones: [
            { text: 'Muy, aplico buenas prácticas siempre', score: { dba: 5 } },
            { text: 'Conozco las formas normales y las uso', score: { dba: 4 } },
            { text: 'Sé lo básico para evitar duplicación', score: { backend: 3 } },
            { text: 'Lo dejo al ORM', score: { frontend: 2 } },
            { text: 'No sé qué es normalización', score: { design: 1 } }
        ]
    },

];
