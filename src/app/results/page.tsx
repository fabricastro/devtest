'use client';

import { Suspense } from 'react';
import ResultsInner from './ResultsInner';

export default function ResultsPage() {
    return (
        <Suspense fallback={<div className="text-center mt-10">Cargando resultados...</div>}>
            <ResultsInner />
        </Suspense>
    );
}
