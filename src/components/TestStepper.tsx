'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Question from './Question';
import { questions } from '../lib/questions';
import { AnswerType, UserDataType } from '../types';

const TestStepper: React.FC = () => {
    const searchParams = useSearchParams();
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [answers, setAnswers] = useState<AnswerType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserDataType>({
        name: '',
        email: '',
        age: '',
        gender: ''
    });

    const totalSteps = questions.length + 1; // Preguntas + datos personales

    const handleOptionSelect = (optionIndex: number): void => {
        const newAnswers = [...answers];
        newAnswers[currentStep - 1] = {
            questionId: questions[currentStep - 1].id,
            optionIndex
        };
        setAnswers(newAnswers);
    };

    const handleUserDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const isCurrentStepComplete = (): boolean => {
        if (currentStep === 0) {
            // Validar datos personales
            return Boolean(userData.name && userData.email && userData.age && userData.gender);
        } else {
            // Validar respuestas
            return answers[currentStep - 1] !== undefined;
        }
    };

    const handleNext = (): void => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleSubmit();
        }
    };

    const handleBack = (): void => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (): Promise<void> => {
        setLoading(true);
        try {
            const response = await fetch('/api/submit-test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userData,
                    answers
                }),
            });

            if (response.ok) {
                const data = await response.json();
                router.push(`/results?id=${data.id}`);
            } else {
                alert('Hubo un error al enviar el test. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error al enviar el test:', error);
            alert('Hubo un error al enviar el test. Por favor, inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            {/* Barra de progreso */}
            <div className="mb-6">
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-700">Progreso</span>
                    <span className="text-sm font-medium text-blue-700">{currentStep + 1} de {totalSteps}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Contenido del paso actual */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                {currentStep === 0 ? (
                    // Formulario de datos personales
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Para comenzar, dinos un poco sobre ti</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleUserDataChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleUserDataChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-700">Edad</label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={userData.age}
                                    onChange={handleUserDataChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Tu edad"
                                    min="18"
                                    max="100"
                                />
                            </div>

                            <div>
                                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-700">Género</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={userData.gender}
                                    onChange={handleUserDataChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Femenino</option>
                                    <option value="non-binary">No binario</option>
                                    <option value="other">Otro</option>
                                    <option value="prefer-not-to-say">Prefiero no decirlo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Preguntas del test
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Pregunta {currentStep} de {questions.length}</h2>
                        <Question
                            question={questions[currentStep - 1]}
                            onSelect={handleOptionSelect}
                            selectedOptionIndex={answers[currentStep - 1]?.optionIndex}
                        />
                    </div>
                )}
            </div>

            {/* Botones de navegación */}
            <div className="flex justify-between">
                <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`px-6 py-2.5 rounded-md font-medium ${currentStep === 0
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'
                        }`}
                >
                    Atrás
                </button>

                <button
                    onClick={handleNext}
                    disabled={!isCurrentStepComplete() || loading}
                    className={`px-6 py-2.5 rounded-md font-medium transition-all ${isCurrentStepComplete() && !loading
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    {loading ? (
                        <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Procesando
                        </span>
                    ) : currentStep === totalSteps - 1 ? (
                        'Finalizar'
                    ) : (
                        'Siguiente'
                    )}
                </button>
            </div>
        </div>
    );
};

export default TestStepper;