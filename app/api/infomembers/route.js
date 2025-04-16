import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const members = [
  {
    id: 1,
    name: "Minji",
    role: "Leader, Main Vocalist",
    img: "/picnjz/minji.png",
    color: "#2377D5"
  },
  {
    id: 2,
    name: "Hanni",
    role: "Main Dancer, Vocalist",
    img: "/picnjz/hanni.png",
    color: "#f71ec8"
  },
  {
    id: 3,
    name: "Danielle",
    role: "Vocalist, Visual",
    img: "/picnjz/danielle.png",
    color: "#FFE81B"
  },
  {
    id: 4,
    name: "Haerin",
    role: "Lead Vocalist",
    img: "/picnjz/haerin.png",
    color: "#00C12D"
  },
  {
    id: 5,
    name: "Hyein",
    role: "Maknae, Vocalist",
    img: "/picnjz/hyein.png",
    color: "#B375F3"
  }
];

export async function GET() {
  return NextResponse.json(members, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store'
    }
  });
}
