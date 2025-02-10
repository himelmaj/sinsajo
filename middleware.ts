import { NextResponse, type NextRequest } from "next/server";

import { getSessionCookie } from "better-auth";

export default async function authMiddleware(request: NextRequest) {

	const session = getSessionCookie(request);

	if ((request.nextUrl.pathname === "/sign-in" || request.nextUrl.pathname === "/sign-up") && session) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	if (request.nextUrl.pathname === "/dashboard" && !session) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}


	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard/:path*', '/sign-in', '/sign-up'],
};