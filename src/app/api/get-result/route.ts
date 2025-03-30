import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        console.log('📥 ID recibido:', id);

        if (!id) {
            return NextResponse.json({ message: 'ID is required' }, { status: 400 });
        }

        const testResult = await prisma.testResult.findUnique({
            where: { id },
        });

        console.log('📦 Resultado encontrado:', testResult);

        if (!testResult) {
            return NextResponse.json({ message: 'Result not found' }, { status: 404 });
        }

        const profile = JSON.parse(testResult.profileData);

        return NextResponse.json({
            userData: {
                name: testResult.name,
                email: testResult.email,
                age: testResult.age,
                gender: testResult.gender,
            },
            profile,
        }, { status: 200 });

    } catch (error) {
        console.error('❌ Error en /api/get-result:', error);
        return NextResponse.json({ message: 'Error al obtener el resultado' }, { status: 500 });
    }
}
