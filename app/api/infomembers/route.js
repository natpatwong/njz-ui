import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const members = [
  {
    id: 1,
    name: "Minji",
    role: "Leader, Main Vocalist",
    img: "/picnjz/minji.jpg",
    color: "#2377D5",
    Birthday:"Birthday : 7 May 2004",
    Height: "Height : 169 cm"
   
  },
  {
    id: 2,
    name: "Hanni",
    role: "Main Dancer, Vocalist",
    img: "/picnjz/hanni.jpg",
    color: "#f71ec8",
    Birthday:"Birthday : 6 October 2004",
    Height: "Height : 162 cm"
  
  },
  {
    id: 3,
    name: "Danielle",
    role: "Vocalist, Visual",
    img: "/picnjz/dani.jpg",
    color: "#FFE81B"
    ,    Birthday:"Birthday : 11 April 2005",
    Height: "Height : 165 cm"

  },
  {
    id: 4,
    name: "Haerin",
    role: "Lead Vocalist",
    img: "/picnjz/haein.jpg",
    color: "#00C12D"
    ,   Birthday:"Birthday : 15 May 2006",
    Height: "Height : 164.5 cm"
  

  },
  {
    id: 5,
    name: "Hyein",
    role: "Maknae, Vocalist",
    img: "/picnjz/hyerin.jpg",
    color: "#B375F3",
    Birthday:"Birthday : 21 April 2008",
    Height: "Height : 170 cm"

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
