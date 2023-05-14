import { NextResponse } from 'next/server';
import { createHash } from '@/utils/bcrypt';
import prisma from '@/utils/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const email = searchParams.get('email');
  let data;

  if (id) {
    data = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        username: true,
        tokens_hold: true,
        history: true,
        _count: true
      }
    });
  } else if (email) {
    data = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        username: true,
        password: true,
        tokens_hold: true,
        history: true,
        _count: true
      }
    });
  } else {
    data = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        tokens_hold: true,
        history: true,
        _count: true
      }
    });
  }
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();
  body.password = await createHash(body.password);
  const data = await prisma.user.create({ data: body });

  return NextResponse.json({ data });
}

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const body = await request.json();
  if (!id || !body) {
    return NextResponse.json({ message: 'invalid params' });
  }
  const data = await prisma.user.update({ where: { id }, data: body });
  return NextResponse.json({ data });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ message: 'invalid params' });
  }
  await prisma.user.delete({ where: { id } });
  return NextResponse.json({});
}
