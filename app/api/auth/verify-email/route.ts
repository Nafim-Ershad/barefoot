import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/utils';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

  if (!token || typeof token !== 'string') {
    return NextResponse.json({ error: 'Invalid token' }, { status: 400 });
  }

  try {
    // Verify the JWT token
    const decoded = verifyToken(token);

    console.log(decoded);

    // Find the user and mark them as verified
    const user = await prisma.user.update({
      where: { id: decoded.userId },
      data: { isVerified: true },
    });
    if(user){
      // Redirect to the verification success page
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verified/${decoded.userId}`);
    }
    return NextResponse.json({ message: 'User not found' }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 200 });
  }
}
