import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  let data;

  if (id) {
    data = await prisma.position.findUnique({ where: { id } });
  } else {
    data = await prisma.position.findMany();
  }
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();

  const data = await prisma.position.create({ data: body });

  return NextResponse.json({ data });
}

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const body = await request.json();
  if (!id || !body) {
    return NextResponse.json({ message: 'invalid params' });
  }
  const data = await prisma.position.update({ where: { id }, data: body });
  return NextResponse.json({ data });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ message: 'invalid params' });
  }
  await prisma.position.delete({ where: { id } });
  return NextResponse.json({});
}
