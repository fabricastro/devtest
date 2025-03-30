import { ExtendedQuestion } from '../types';
import { questionPool } from './questions';
import { ProfileType } from '../types';

// Función para mezclar un array (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// Agrupa las preguntas por perfil
function agruparPorPerfil(pool: ExtendedQuestion[]): Record<ProfileType, ExtendedQuestion[]> {
    const agrupadas: Record<ProfileType, ExtendedQuestion[]> = {
        frontend: [],
        backend: [],
        qa: [],
        devops: [],
        dba: [],
        security: [],
        design: []
    };

    for (const pregunta of pool) {
        agrupadas[pregunta.perfil].push(pregunta);
    }

    return agrupadas;
}

// Función principal para obtener preguntas aleatorias
export function generarPreguntasAleatorias(cantidadPorPerfil: number = 1): ExtendedQuestion[] {
    const agrupadas = agruparPorPerfil(questionPool);
    const seleccionadas: ExtendedQuestion[] = [];

    for (const perfil in agrupadas) {
        const preguntas = agrupadas[perfil as ProfileType];
        const aleatorias = shuffleArray(preguntas).slice(0, cantidadPorPerfil);

        // Mezclar las opciones de cada pregunta seleccionada
        const mezcladas = aleatorias.map(p => ({
            ...p,
            opciones: shuffleArray(p.opciones)
        }));

        seleccionadas.push(...mezcladas);
    }

    // Mezclar el orden general de las preguntas
    return shuffleArray(seleccionadas);
}
