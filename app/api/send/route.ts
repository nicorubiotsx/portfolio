import { EmailTemplate } from '../../utils/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend("re_77UmKYnQ_6351u9jN7cV995qt87ErAVfL");

export async function POST(request: Request) {
  try {
    const {name,email,message} = await request.json()
    console.log(name,email,message)

    
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['nicolasrubioolivares96@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ name:name ,email:email,message:message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
