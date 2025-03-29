import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { calculateProfile } from '../../../lib/calculateProfile';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { userData, answers } = req.body as {
            userData: {
                name: string;
                email: string;
                age: string;
                gender: string;
            };
            answers: any; // Podés tiparlo mejor si sabés la estructura exacta de las respuestas
        };

        const profile = calculateProfile(answers);

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

        res.status(200).json({ id: result.id });
    } catch (error) {
        console.error('Error al guardar el test:', error);
        res.status(500).json({ message: 'Error al procesar el test' });
    }
}
