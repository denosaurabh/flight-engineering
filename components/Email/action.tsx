'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function addNewsletterEmail(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  try {
    await sql`
    INSERT INTO emails (email)
    VALUES (${String(formData.get('email'))})
  `;

    revalidatePath('/');
    return { message: `Thank you for sharing!` };
  } catch (e) {
    return { message: 'Failed to send form!' };
  }
}
