import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, TestResult } from '@prisma/client';

const prisma = new PrismaClient();

type ApiResponse =
    | {
        userData: {
            name: string;
            email: string;
            age: number;
            gender: string;
        };
        profile: any; // podés reemplazar "any" si conocés la estructura de "profileData"
    }
    | { message: string };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { id } = req.query;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        const testResult: TestResult | null = await prisma.testResult.findUnique({
            where: { id },
        });

        if (!testResult) {
            return res.status(404).json({ message: 'Result not found' });
        }

        res.status(200).json({
            userData: {
                name: testResult.name,
                email: testResult.email,
                age: testResult.age,
                gender: testResult.gender,
            },
            profile: JSON.parse(testResult.profileData),
        });
    } catch (error) {
        console.error('Error al obtener el resultado:', error);
        return res.status(500).json({ message: 'Error al obtener el resultado' });
    }
}
