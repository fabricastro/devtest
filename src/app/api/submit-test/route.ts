import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { calculateProfile } from '@/lib/calculateProfile';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { userData, answers, questions } = body as {
            userData: {
                name: string;
                email: string;
                age: string;
                gender: string;
            };
            answers: any;
            questions: any;
        };

        const profile = calculateProfile(answers, questions);

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

        return NextResponse.json({ id: result.id }, { status: 200 });
    } catch (error) {
        console.error('Error al guardar el test:', error);
        return NextResponse.json({ message: 'Error al procesar el test' }, { status: 500 });
    }
}
