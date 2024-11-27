import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest){
    const userId = new URL(request.url).searchParams.get('userId');

    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { fullname: true, username: true, email: true }
    });
    if(user){
        return new NextResponse(JSON.stringify(user));
    }

    return NextResponse.json({ error: 'No user found'}, { status: 400 })
}