import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const members = [
  {
    id: 1,
    name: "Minji",
    role: "Leader, Main Vocalist",
    img: "/picnjz/minji.jpg",
    color: "#2377D5"
    ,    decribtion: "sadadsad"
  },
  {
    id: 2,
    name: "Hanni",
    role: "Main Dancer, Vocalist",
    img: "/picnjz/hanni.jpg",
    color: "#f71ec8"
    ,    decribtion: "sadadsad"
  },
  {
    id: 3,
    name: "Danielle",
    role: "Vocalist, Visual",
    img: "/picnjz/dani.jpg",
    color: "#FFE81B"
    ,    decribtion: "sadadsad"
  },
  {
    id: 4,
    name: "Haerin",
    role: "Lead Vocalist",
    img: "/picnjz/haein.jpg",
    color: "#00C12D"
    ,    decribtion: "sadadsad"

  },
  {
    id: 5,
    name: "Hyein",
    role: "Maknae, Vocalist",
    img: "/picnjz/hyerin.jpg",
    color: "#B375F3",
    decribtion: "สวยและรวยมาก"
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
