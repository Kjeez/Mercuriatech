import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, companyName, companyEmail, phone, productInterest, message } = data;

    if (!firstName || !companyEmail) {
      return NextResponse.json({ success: false, message: 'First name and company email are required' }, { status: 400 });
    }

    if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
      return NextResponse.json({ success: false, message: 'Server configuration error.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    const fullName = `${firstName} ${lastName || ''}`.trim();
    
    // MercuriaTech Email Template
    const template = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #020810;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #020810; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, #0A1E3D 0%, #081228 100%); border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); overflow: hidden;">
          <tr>
            <td style="background: linear-gradient(90deg, #D71920 0%, #A8101A 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">New Contact Request</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #64748b; font-size: 14px; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 2px;">Contact Details</p>
              
              <table width="100%" style="margin-bottom: 20px;">
                <tr>
                  <td style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border-left: 4px solid #3B8EED;">
                    <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0; text-transform: uppercase;">Name</p>
                    <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">\${fullName}</p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" style="margin-bottom: 20px;">
                <tr>
                   <td style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border-left: 4px solid #3B8EED;">
                    <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0; text-transform: uppercase;">Email</p>
                    <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">\${companyEmail}</p>
                  </td>
                </tr>
              </table>
              
              \${phone ? \`
              <table width="100%" style="margin-bottom: 20px;">
                <tr>
                   <td style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border-left: 4px solid #3B8EED;">
                    <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0; text-transform: uppercase;">Phone</p>
                    <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">\${phone}</p>
                  </td>
                </tr>
              </table>\` : ''}

              \${companyName ? \`
              <table width="100%" style="margin-bottom: 20px;">
                <tr>
                   <td style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border-left: 4px solid #3B8EED;">
                    <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0; text-transform: uppercase;">Company</p>
                    <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">\${companyName}</p>
                  </td>
                </tr>
              </table>\` : ''}

              \${productInterest ? \`
              <table width="100%" style="margin-bottom: 20px;">
                <tr>
                  <td style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border-left: 4px solid #D71920;">
                    <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0; text-transform: uppercase;">Product Interest</p>
                    <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">\${productInterest}</p>
                  </td>
                </tr>
              </table>\` : ''}

              \${message ? \`
              <table width="100%" style="margin-bottom: 20px;">
                <tr>
                  <td style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border-left: 4px solid #D71920;">
                    <p style="color: #64748b; font-size: 12px; margin: 0 0 5px 0; text-transform: uppercase;">Message</p>
                    <p style="color: #e2e8f0; font-size: 16px; margin: 0; line-height: 1.6;">\${message}</p>
                  </td>
                </tr>
              </table>\` : ''}
            </td>
          </tr>
          <tr>
            <td style="background: rgba(255,255,255,0.01); padding: 20px 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
              <p style="color: #3B8EED; font-size: 12px; margin: 0;">Sent via MercuriaTech Website</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>\`;
    const recipients = [process.env.MAIL_RECIPIENT_1].filter(Boolean) as string[];

    await transporter.sendMail({
      from: \`"MercuriaTech Contacts" <\${process.env.MAIL_USER}>\`,
      to: recipients,
      subject: \`New Contact Request: \${fullName}\`,
      html: template
    });

    console.log(\`Contact email sent from \${fullName}\`);
    return NextResponse.json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
