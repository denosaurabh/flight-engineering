import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(): Promise<NextResponse> {
  revalidatePath('/');
  revalidatePath('/terms-conditions');
  revalidatePath('/shipping-return-policy');
  revalidatePath('/privacy-policy');
  revalidatePath('/contact');

  return NextResponse.json({ ok: true });
}
