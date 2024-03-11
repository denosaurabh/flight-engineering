'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function createNewModuleReq(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  try {
    await sql`
    INSERT INTO newmodules_requests (name)
    VALUES (${String(formData.get('module'))})
  `;

    revalidatePath('/');
    return { message: `Thank you for telling us!` };
  } catch (e) {
    return { message: 'Failed to send form!' };
  }
}
