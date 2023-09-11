import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../../libs/mongodb';
import Collection from '../../../../../models/collection';

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const collection = await Collection.findOne({ _id: id });
  return NextResponse.json({ collection }, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newContent: content } = await request.json();
  await connectMongoDB();
  await Collection.findByIdAndUpdate(id, { title, content });
  return NextResponse.json({ message: 'Collection Updated' }, { status: 200 });
}
