import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { calculateProfile } from '@/lib/calculateProfile';
import { AnswerType, ExtendedQuestion, UserDataType } from '@/types';
import { sendResultsEmail } from '@/lib/email';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { userData, answers, questions } = body as {
            userData: UserDataType;
            answers: AnswerType[];
            questions: ExtendedQuestion[];
        };        

        const profile = calculateProfile(answers, questions);

        // Guardar en la base de datos
        const result = await prisma.testResult.create({
            data: {
                name: userData.name,
                email: userData.email,
                age: parseInt(userData.age),
                gender: userData.gender,
                answers: JSON.stringify(answers),
                primaryProfile: profile.primaryProfile,
                secondaryProfile: profile.secondaryProfile,
                profileScores: JSON.stringify(profile.scores),
                profileData: JSON.stringify(profile),
            },
        });

        // Generar la URL de la imagen de resultados
        const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/results-image/${result.id}`;
        const testUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/results?id=${result.id}`;

        // Enviar email con los resultados
        const emailResult = await sendResultsEmail(
            userData.email,
            profile,
            testUrl
        );

        if (!emailResult.success) {
            console.error('Error al enviar el email:', emailResult.error);
            // No interrumpimos el flujo si falla el email, solo lo registramos
        }

        return NextResponse.json({ 
            id: result.id,
            profile: profile,
            imageUrl: imageUrl
        }, { status: 200 });
    } catch (error) {
        console.error('Error al guardar el test:', error);
        return NextResponse.json({ message: 'Error al procesar el test' }, { status: 500 });
    }
}
