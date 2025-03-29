import { QuestionType } from '../types';

export const questions: QuestionType[] = [
    {
        id: 1,
        question: "¿Qué prefieres hacer en tu tiempo libre?",
        options: [
            { text: "Diseñar interfaces o mejorar experiencias visuales", score: { frontend: 3, design: 2 } },
            { text: "Resolver problemas lógicos o matemáticos", score: { backend: 2, dba: 1 } },
            { text: "Encontrar fallos en sistemas o aplicaciones", score: { qa: 3, security: 1 } },
            { text: "Automatizar tareas repetitivas", score: { devops: 3, backend: 1 } },
            { text: "Investigar sobre seguridad informática", score: { security: 3, devops: 1 } }
        ]
    },
    {
        id: 2,
        question: "¿Cómo te sientes respecto a trabajar directamente con clientes o usuarios finales?",
        options: [
            { text: "Me encanta entender sus necesidades y crear soluciones visuales", score: { frontend: 3, design: 2 } },
            { text: "Prefiero trabajar en los sistemas internos sin interacción directa", score: { backend: 2, dba: 2 } },
            { text: "Me gusta validar si lo que desarrollamos cumple sus expectativas", score: { qa: 3 } },
            { text: "No me importa siempre que pueda optimizar procesos", score: { devops: 2, backend: 1 } },
            { text: "Me interesa proteger sus datos y privacidad", score: { security: 3 } }
        ]
    },
    {
        id: 3,
        question: "Cuando trabajas en un proyecto nuevo, ¿qué es lo primero que te llama la atención?",
        options: [
            { text: "Cómo se ve y cómo interactúan los usuarios", score: { frontend: 3, design: 2 } },
            { text: "La arquitectura y lógica detrás del sistema", score: { backend: 3, dba: 1 } },
            { text: "Si funciona correctamente en todos los escenarios", score: { qa: 3 } },
            { text: "Cómo se despliega y mantiene el sistema", score: { devops: 3 } },
            { text: "Las posibles vulnerabilidades de seguridad", score: { security: 3 } }
        ]
    },
    {
        id: 4,
        question: "¿Qué te frustra más en un entorno de trabajo?",
        options: [
            { text: "Diseños inconsistentes o poco intuitivos", score: { frontend: 2, design: 3 } },
            { text: "Código ineficiente o mal estructurado", score: { backend: 3, devops: 1 } },
            { text: "Errores que llegan al usuario final", score: { qa: 3 } },
            { text: "Procesos manuales que podrían automatizarse", score: { devops: 3, backend: 1 } },
            { text: "Falta de atención a los aspectos de seguridad", score: { security: 3 } }
        ]
    },
    {
        id: 5,
        question: "¿Cómo te sientes respecto a aprender constantemente nuevas tecnologías?",
        options: [
            { text: "Me encanta estar al día con los frameworks de UI más recientes", score: { frontend: 3 } },
            { text: "Disfruto aprendiendo nuevos lenguajes y paradigmas de programación", score: { backend: 3 } },
            { text: "Me interesa conocer nuevas herramientas y metodologías de testing", score: { qa: 3 } },
            { text: "Me fascina explorar nuevas tecnologías de infraestructura y CI/CD", score: { devops: 3 } },
            { text: "Siempre estoy investigando las últimas amenazas y soluciones de seguridad", score: { security: 3 } }
        ]
    },
    {
        id: 6,
        question: "¿Qué tipo de problemas disfrutas más resolviendo?",
        options: [
            { text: "Problemas de diseño y experiencia de usuario", score: { frontend: 3, design: 2 } },
            { text: "Problemas algorítmicos y de optimización", score: { backend: 3, dba: 1 } },
            { text: "Encontrar casos de uso no contemplados", score: { qa: 3 } },
            { text: "Problemas de escalabilidad y rendimiento", score: { devops: 2, dba: 2 } },
            { text: "Identificar y mitigar vulnerabilidades", score: { security: 3 } }
        ]
    },
    {
        id: 7,
        question: "¿Qué afirmación describe mejor tu forma de trabajar?",
        options: [
            { text: "Presto mucha atención a los detalles visuales y la experiencia del usuario", score: { frontend: 3, design: 2 } },
            { text: "Me concentro en crear sistemas robustos y escalables", score: { backend: 3, devops: 1 } },
            { text: "Siempre pienso en qué podría fallar y cómo evitarlo", score: { qa: 3, security: 1 } },
            { text: "Busco constantemente formas de automatizar y mejorar procesos", score: { devops: 3 } },
            { text: "Evalúo todo desde una perspectiva de seguridad", score: { security: 3 } }
        ]
    },
    {
        id: 8,
        question: "¿Qué habilidad consideras más importante en tu trabajo diario?",
        options: [
            { text: "Creatividad y sentido estético", score: { frontend: 3, design: 3 } },
            { text: "Pensamiento lógico y resolución de problemas complejos", score: { backend: 3, dba: 1 } },
            { text: "Atención al detalle y pensamiento crítico", score: { qa: 3, security: 1 } },
            { text: "Capacidad para optimizar y automatizar procesos", score: { devops: 3 } },
            { text: "Análisis de riesgos y prevención", score: { security: 3 } }
        ]
    },
    {
        id: 9,
        question: "En un proyecto, ¿qué rol asumes naturalmente?",
        options: [
            { text: "El que se preocupa por cómo se ve y se siente el producto", score: { frontend: 3, design: 2 } },
            { text: "El que desarrolla la lógica central del sistema", score: { backend: 3, dba: 1 } },
            { text: "El que verifica que todo funcione como debe", score: { qa: 3 } },
            { text: "El que asegura que el sistema sea rápido y escale bien", score: { devops: 3, dba: 1 } },
            { text: "El que identifica riesgos y protege el sistema", score: { security: 3 } }
        ]
    },
    {
        id: 10,
        question: "¿Qué aspecto de la tecnología te apasiona más?",
        options: [
            { text: "Crear interfaces innovadoras y experiencias atractivas", score: { frontend: 3, design: 2 } },
            { text: "Desarrollar sistemas y algoritmos eficientes", score: { backend: 3 } },
            { text: "Garantizar la calidad y fiabilidad de los productos", score: { qa: 3 } },
            { text: "Construir infraestructuras robustas y automatizadas", score: { devops: 3, dba: 1 } },
            { text: "Proteger datos y sistemas contra amenazas", score: { security: 3 } }
        ]
    }
];