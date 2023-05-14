import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  let data;

  if (id) {
    data = await prisma.history.findUnique({
      where: { id: id },
      select: {
        id: true,
        balance: true,
        user_id: true
      }
    });
  } else {
    data = await prisma.history.findMany({
      select: {
        id: true,
        balance: true,
        user_id: true
      }
    });
  }
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();

  const data = await prisma.history.create({ data: body });

  return NextResponse.json({ data });
}
