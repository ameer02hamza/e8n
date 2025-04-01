import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token } = body;
    console.log(token, "token here");

    (await cookies()).set("token", token);
    return NextResponse.json({ status: 200, msg: "saved " });
  } catch {
    return NextResponse.json({
      status: 400,
      message: "failed",
    });
  }
}
export async function DELETE() {
  try {
    (await cookies()).delete("token");
    return NextResponse.json({ status: 200, msg: "DELETED " });
  } catch {
    return NextResponse.json({
      status: 400,
      message: "failed",
    });
  }
}
