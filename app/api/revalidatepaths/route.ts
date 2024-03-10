import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(): Promise<NextResponse> {
  revalidatePath('/');
  revalidatePath('/about');
  revalidatePath('/terms-conditions');
  revalidatePath('/shipping-return-policy');
  revalidatePath('/privacy-policy');
  revalidatePath('/contact');
  revalidatePath('/product/[handle]', 'page');

  return NextResponse.json({ ok: true });
}
