import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../libs/mongodb';
import Collection from '../../../../models/collection';
export async function GET() {
  await connectMongoDB();
  const collections = await Collection.find();
  return NextResponse.json({ collections });
}

export async function POST(request) {
  const { title, content } = await request.json();
  await connectMongoDB();
  await Collection.create({ title, content });
  return NextResponse.json({ message: 'Collecton created' }, { status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Collection.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Collection deleted' }, { status: 200 });
}
