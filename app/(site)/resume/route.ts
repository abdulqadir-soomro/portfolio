import { NextResponse } from "next/server"

export async function GET() {
  // Update this link to your latest resume URL
  const resumeUrl = "https://drive.google.com/file/d/1hDp9MQVUw8pBYu4sv11XTtdlH5-YWE0J/view?usp=sharing"
  return NextResponse.redirect(resumeUrl, { status: 302 })
}


