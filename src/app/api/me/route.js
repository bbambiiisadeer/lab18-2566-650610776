import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "NUunnapat Sirithanachokpaisan",
    studentId: "650610776",
  });
};
