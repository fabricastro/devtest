import type { NextPage } from 'next';
import Head from 'next/head';
import TestStepper from '../components/TestStepper';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Test de Perfil IT</title>
        <meta name="description" content="Descubre tu perfil profesional en el mundo IT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Test de Perfil IT</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre qué rol en tecnología se adapta mejor a tu personalidad, habilidades e intereses
          </p>
        </div>

        <TestStepper />
      </main>

      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Test de Perfil IT. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;