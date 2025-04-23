'use client'

import React from 'react';
import { ProfileResultType, ProfileType } from '../types';
import { toPng } from 'html-to-image';

interface ResultCardProps {
    result: ProfileResultType;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
    const cardRef = React.useRef<HTMLDivElement>(null);

    const downloadImage = async () => {
        if (cardRef.current) {
            try {
                const dataUrl = await toPng(cardRef.current);
                const link = document.createElement('a');
                link.download = 'resultados-test-it.png';
                link.href = dataUrl;
                link.click();
            } catch (error) {
                console.error('Error generating image:', error);
            }
        }
    };

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

    return (
        <div>
            <div ref={cardRef} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
                    <h2 className="text-2xl font-bold">Tu Perfil IT Principal:</h2>
                    <h3 className="text-3xl font-bold mt-2">{result.primaryProfileName}</h3>
                </div>

                <div className="p-6">
                    <p className="text-gray-700 mb-6">{result.primaryDescription}</p>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3">Perfil Secundario:</h3>
                        <p className="font-medium text-gray-800">{result.secondaryProfileName}</p>
                        <p className="text-gray-700 mt-2">{result.secondaryDescription}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3">Distribución de tus habilidades:</h3>
                        <div className="space-y-3">
                            {Object.entries(result.scores).map(([profile, score]) => {
                                // Mostrar solo perfiles con puntuación
                                if (score === 0) return null;

                                const typedProfile = profile as ProfileType;

                                // Calcular porcentaje relativo para las barras (máximo 100)
                                const maxPossibleScore = 30; // Suponiendo que el máximo posible
                                const percentage = Math.min(100, (score / maxPossibleScore) * 100);

                                return (
                                    <div key={profile}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-700">{profileNames[typedProfile]}</span>
                                            <span className="text-gray-500">{Math.round(percentage)}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="h-2.5 rounded-full bg-blue-600"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={downloadImage}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
                Descargar Resultados
            </button>
        </div>
    );
};

export default ResultCard;