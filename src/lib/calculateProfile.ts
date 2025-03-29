import { AnswerType, ProfileResultType, ProfileType } from '../types';
import { questions } from './questions';

export function calculateProfile(answers: AnswerType[]): ProfileResultType {
    // Inicializar puntajes
    const scores: Record<ProfileType, number> = {
        frontend: 0,
        backend: 0,
        qa: 0,
        devops: 0,
        dba: 0,
        security: 0,
        design: 0
    };

    // Calcular puntajes basados en las respuestas
    answers.forEach(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        if (!question) return;

        const selectedOption = question.options[answer.optionIndex];

        // Sumar los puntajes de la opción seleccionada
        if (selectedOption && selectedOption.score) {
            Object.entries(selectedOption.score).forEach(([profile, score]) => {
                const profileKey = profile as ProfileType;
                scores[profileKey] += score || 0;
            });
        }
    });

    // Encontrar el perfil con mayor puntaje
    let maxScore = 0;
    let primaryProfile: ProfileType = 'frontend'; // valor por defecto
    let secondaryProfile: ProfileType | null = null;

    Object.entries(scores).forEach(([profile, score]) => {
        if (score > maxScore) {
            secondaryProfile = primaryProfile;
            primaryProfile = profile as ProfileType;
            maxScore = score;
        } else if (score > 0 && (!secondaryProfile || score > scores[secondaryProfile])) {
            secondaryProfile = profile as ProfileType;
        }
    });

    // Asegurar que siempre tengamos un perfil secundario
    if (!secondaryProfile) {
        secondaryProfile = Object.entries(scores)
            .filter(([profile]) => profile !== primaryProfile)
            .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)[0]?.[0] as ProfileType;

        if (!secondaryProfile) secondaryProfile = primaryProfile;
    }

    // Mapeo de perfiles a nombres más amigables
    const profileNames: Record<ProfileType, string> = {
        frontend: "Desarrollador Frontend",
        backend: "Desarrollador Backend",
        qa: "Analista de Calidad (QA)",
        devops: "Ingeniero DevOps",
        dba: "Administrador de Base de Datos",
        security: "Especialista en Ciberseguridad",
        design: "Diseñador UI/UX"
    };

    // Mapeo de perfiles a descripciones
    const profileDescriptions: Record<ProfileType, string> = {
        frontend: "Tienes un fuerte interés en crear experiencias visuales atractivas e interfaces de usuario. Tu perfil indica una inclinación hacia el desarrollo frontend, donde puedes combinar habilidades técnicas con creatividad.",
        backend: "Te destacas en el pensamiento lógico y la resolución de problemas complejos. Tu perfil sugiere que disfrutarías trabajando en sistemas y arquitecturas de backend, desarrollando la lógica que hace funcionar las aplicaciones.",
        qa: "Tienes un ojo para el detalle y una pasión por garantizar la calidad. Como Analista QA, puedes aplicar tu pensamiento crítico para encontrar casos extremos y asegurar que los productos cumplan con los estándares esperados.",
        devops: "Te entusiasma la automatización y optimización de procesos. Como ingeniero DevOps, puedes aplicar tus habilidades para mejorar los flujos de trabajo, implementar integración continua y gestionar infraestructuras eficientes.",
        dba: "Muestras interés en la gestión y optimización de datos. Como Administrador de Base de Datos, puedes aplicar tus habilidades analíticas para diseñar, implementar y mantener sistemas de bases de datos eficientes.",
        security: "Tienes una mentalidad orientada a la seguridad y un interés en proteger sistemas. Como especialista en ciberseguridad, puedes aplicar tu pensamiento preventivo para identificar vulnerabilidades y proteger activos digitales.",
        design: "Demuestras un fuerte sentido estético y creatividad. Como diseñador UI/UX, puedes aplicar estas habilidades para crear interfaces atractivas y experiencias de usuario memorables."
    };

    return {
        primaryProfile,
        secondaryProfile,
        primaryProfileName: profileNames[primaryProfile],
        secondaryProfileName: profileNames[secondaryProfile],
        primaryDescription: profileDescriptions[primaryProfile],
        secondaryDescription: profileDescriptions[secondaryProfile],
        scores
    };
}
