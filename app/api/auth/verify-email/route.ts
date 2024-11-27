import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from '@/lib/utils';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

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


export { handler as GET, handler as POST};