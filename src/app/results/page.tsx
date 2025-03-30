'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import ResultCard from '../../components/ResultCard';
import Link from 'next/link';
import { ProfileResultType } from '../../types';

type ResultData = {
    userData: {
        name: string;
        email: string;
        age: number;
        gender: string;
    };
    profile: ProfileResultType;
};

export default function Results() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [result, setResult] = useState<ResultData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (typeof id === 'string') {
            fetchResult(id);
        }
    }, [id]);

    const fetchResult = async (resultId: string) => {
        try {
            const response = await fetch(`/api/get-result?id=${resultId}`);
            if (response.ok) {
                const data: ResultData = await response.json();
                setResult(data);
            } else {
                setError('No se pudo cargar el resultado. Por favor, intenta de nuevo.');
            }
        } catch (error) {
            console.error('Error al cargar el resultado:', error);
            setError('Ocurrió un error al cargar el resultado.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Resultados | Test de Perfil IT</title>
                <meta name="description" content="Resultados de tu test de perfil IT" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto py-12 px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-blue-800 mb-4">Tus Resultados</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Basado en tus respuestas, hemos identificado tu perfil profesional en el sector IT
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {loading ? (
                        <div className="text-center py-12">
                            <svg
                                className="animate-spin mx-auto h-12 w-12 text-blue-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            <p className="mt-4 text-gray-600">Cargando tus resultados...</p>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-lg text-center">
                            <p className="mb-4">{error}</p>
                            <Link href="/" legacyBehavior>
                                <a className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700">
                                    Volver al inicio
                                </a>
                            </Link>
                        </div>
                    ) : result ? (
                        <>
                            <ResultCard result={result.profile} />

                            <div className="mt-8 text-center">
                                <p className="mb-4 text-gray-700">
                                    ¿Te gustaron tus resultados? Compártelos con tus amigos o vuelve a realizar el test.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link href="/" legacyBehavior>
                                        <a className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700">
                                            Realizar nuevo test
                                        </a>
                                    </Link>
                                    <button
                                        onClick={() => {
                                            if (navigator.share) {
                                                navigator.share({
                                                    title: 'Mi perfil IT',
                                                    text: `Acabo de descubrir que mi perfil IT es ${result.profile.primaryProfileName}. ¡Descubre el tuyo!`,
                                                    url: window.location.href,
                                                });
                                            } else {
                                                navigator.clipboard.writeText(window.location.href);
                                                alert('¡Enlace copiado al portapapeles!');
                                            }
                                        }}
                                        className="inline-block bg-gray-100 text-gray-800 border border-gray-300 px-6 py-2.5 rounded-md font-medium hover:bg-gray-200"
                                    >
                                        Compartir resultados
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-6 rounded-lg text-center">
                            <p className="mb-4">No se encontraron resultados.</p>
                            <Link href="/" legacyBehavior>
                                <a className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700">
                                    Realizar el test
                                </a>
                            </Link>
                        </div>
                    )}
                </div>
            </main>

            <footer className="bg-gray-100 py-6 mt-12">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    <p>© 2024 Test de Perfil IT. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
