import { NextResponse } from 'next/server';

export const NextResponseWrapper = (data) => {
  return NextResponse.json({ data });
};
