import nodemailer from 'nodemailer';
import { ProfileResultType } from '@/types';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendResultsEmail(
  to: string,
  results: ProfileResultType,
  testUrl: string
) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Resultados de tu Test de Perfil IT',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(to right, #3b82f6, #6366f1);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 8px 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .profile-card {
              background: #f8fafc;
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 20px;
            }
            .score-bar {
              background: #e5e7eb;
              height: 8px;
              border-radius: 4px;
              margin: 8px 0;
              overflow: hidden;
            }
            .score-fill {
              background: #3b82f6;
              height: 100%;
              border-radius: 4px;
            }
            .button {
              display: inline-block;
              background: #3b82f6;
              color: white;
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: bold;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #6b7280;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>¡Gracias por completar el Test de Perfil IT!</h1>
          </div>
          <div class="content">
            <div class="profile-card">
              <h2 style="color: #1e40af; margin-bottom: 10px;">Tu Perfil IT Principal</h2>
              <h3 style="color: #3b82f6; margin: 0;">${results.primaryProfileName}</h3>
              <p style="color: #4b5563;">${results.primaryDescription}</p>
            </div>

            <div class="profile-card">
              <h2 style="color: #1e40af; margin-bottom: 10px;">Tu Perfil Secundario</h2>
              <h3 style="color: #3b82f6; margin: 0;">${results.secondaryProfileName}</h3>
              <p style="color: #4b5563;">${results.secondaryDescription}</p>
            </div>

            <div>
              <h2 style="color: #1e40af; margin-bottom: 15px;">Distribución de tus habilidades</h2>
              ${Object.entries(results.scores)
                .map(([area, score]) => {
                  const percentage = Math.min(100, (score / 30) * 100);
                  return `
                    <div style="margin-bottom: 15px;">
                      <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="font-weight: 500; text-transform: capitalize;">${area} </span>
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

            <div style="text-align: center;">
              <a href="${testUrl}" class="button">Ver mis resultados completos</a>
            </div>

            <div class="footer">
              <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
              <p>© 2025 Test de Perfil IT. Todos los derechos reservados Fabricio Castro.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
} 