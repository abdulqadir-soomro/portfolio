import { NextResponse } from "next/server"

export async function GET() {
  // Update this link to your latest resume URL
  const resumeUrl = "https://drive.google.com/file/d/1RmDNn8x82ksNrv_3LHbxHATT5an9vdzm/view?usp=drive_link"
  return NextResponse.redirect(resumeUrl, { status: 302 })
}


