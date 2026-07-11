import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, password, role, branchId } = body;

    // Validate request parameters
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, password, role" },
        { status: 400 }
      );
    }

    // Role validation
    if (!["ADMIN", "MANAGER", "STAFF"].includes(role)) {
      return NextResponse.json(
        { error: "Invalid role. Must be ADMIN, MANAGER, or STAFF" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email address already exists." },
        { status: 409 }
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Save user
    const newUser = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        passwordHash,
        role,
        branchId: branchId || null,
      },
    });

    return NextResponse.json(
      {
        message: "Staff member registered successfully.",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          branchId: newUser.branchId,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Register API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
