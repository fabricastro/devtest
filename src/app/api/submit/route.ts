import { NextResponse } from 'next/server';
import { sendResultsEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const { email, results } = await request.json();

    // Generar la imagen de resultados
    const imageUrl = await generateResultsImage(results);

    // Enviar el email
    const emailResult = await sendResultsEmail(email, results, email);

    if (!emailResult.success) {
      throw new Error('Error al enviar el email');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    );
  }
}

async function generateResultsImage(results: any): Promise<string> {
  // Aquí implementarías la generación de la imagen
  // Por ahora, retornamos una URL temporal
  return 'https://devtest-nine.vercel.app/results-image.png';
} 