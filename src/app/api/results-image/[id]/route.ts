import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { toPng } from 'html-to-image';
import { JSDOM } from 'jsdom';

const prisma = new PrismaClient();

const profileNames: Record<string, string> = {
    frontend: "Desarrollador Frontend",
    backend: "Desarrollador Backend",
    qa: "Analista de Calidad (QA)",
    devops: "Ingeniero DevOps",
    dba: "Administrador de Base de Datos",
    security: "Especialista en Ciberseguridad",
    design: "Diseñador UI/UX"
};

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } } // Cambiado para usar destructuración directa
) {
    const { id } = params;
    try {
        const result = await prisma.testResult.findUnique({
            where: { id }
        });

        if (!result) {
            return NextResponse.json({ error: 'Resultado no encontrado' }, { status: 404 });
        }

        const profile = JSON.parse(result.profileData);
        const scores = JSON.parse(result.profileScores) as Record<string, number>;

        const dom = new JSDOM(`
            <!DOCTYPE html>
            <html>
                <head>
                    <style>
                        body {
                            width: 800px;
                            height: 600px;
                            padding: 20px;
                            background-color: #ffffff;
                            font-family: Arial, sans-serif;
                        }
                        .card {
                            background-color: white;
                            border-radius: 8px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                            overflow: hidden;
                        }
                        .header {
                            background: linear-gradient(to right, #3b82f6, #6366f1);
                            padding: 24px;
                            color: white;
                        }
                        .content {
                            padding: 24px;
                        }
                        .score-bar {
                            width: 100%;
                            height: 8px;
                            background-color: #e5e7eb;
                            border-radius: 4px;
                            overflow: hidden;
                            margin: 4px 0;
                        }
                        .score-fill {
                            height: 100%;
                            background-color: #3b82f6;
                            transition: width 0.5s ease;
                        }
                    </style>
                </head>
                <body>
                    <div class="card">
                        <div class="header">
                            <h2 style="font-size: 24px; margin: 0;">Tu Perfil IT Principal:</h2>
                            <h3 style="font-size: 32px; margin: 8px 0;">${profileNames[profile.primaryProfile]}</h3>
                        </div>
                        <div class="content">
                            <p style="color: #4b5563; margin-bottom: 16px;">${profile.primaryDescription}</p>
                            <div style="margin-bottom: 24px;">
                                <h3 style="font-size: 20px; margin-bottom: 8px;">Perfil Secundario:</h3>
                                <p style="font-weight: 500; color: #1f2937;">${profileNames[profile.secondaryProfile]}</p>
                                <p style="color: #4b5563; margin-top: 4px;">${profile.secondaryDescription}</p>
                            </div>
                            <div>
                                <h3 style="font-size: 20px; margin-bottom: 16px;">Distribución de tus habilidades:</h3>
                                ${Object.entries(scores)
                                    .map(([area, score]) => {
                                        if (score === 0) return '';
                                        const percentage = Math.min(100, (score / 30) * 100);
                                        return `
                                            <div style="margin-bottom: 12px;">
                                                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                                    <span style="color: #4b5563;">${profileNames[area]}</span>
                                                    <span style="color: #6b7280;">${Math.round(percentage)}%</span>
                                                </div>
                                                <div class="score-bar">
                                                    <div class="score-fill" style="width: ${percentage}%"></div>
                                                </div>
                                            </div>
                                        `;
                                    })
                                    .join('')}
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        `);

        const element = dom.window.document.body;
        const dataUrl = await toPng(element);

        return new NextResponse(dataUrl, {
            headers: {
                'Content-Type': 'image/png',
                'Content-Disposition': 'inline; filename="resultados-test.png"'
            }
        });
    } catch (error) {
        console.error('Error al generar la imagen:', error);
        return NextResponse.json({ error: 'Error al generar la imagen' }, { status: 500 });
    }
}