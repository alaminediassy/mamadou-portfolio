/* import { EmailTemplate } from '../../../components/EmailTemplate';
 */import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "diassy.alamine@gmail.com",
      subject: 'Hello World',
      react: (
        <>
          <p>Congrats on sending your <strong>first email</strong>!</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
