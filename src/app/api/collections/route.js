import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../libs/mongodb';
import Collection from '../../../../models/collection';

export async function POST(request) {
  const { title } = await request.json();
  await connectMongoDB();
  await Collection.create({ title });
  return NextResponse.json({ message: 'Collecton created' }, { status: 200 });
}

export async function GET() {
  await connectMongoDB();
  const collections = await Collection.find();
  return NextResponse.json({ collections });
}
