import { NextResponse, type NextRequest } from "next/server";
import { betterFetch } from "@better-fetch/fetch";
import { Session } from "@/lib/auth/auth-types";

export default async function authMiddleware(request: NextRequest) {

	const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
		baseURL: request.nextUrl.origin,
		headers: {
			cookie: request.headers.get("cookie") || "",
		},
	});

	const { pathname } = request.nextUrl;

	if ((pathname === "/sign-in" || pathname === "/sign-up") && session) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	if (pathname.startsWith("/dashboard") && !session) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard/:path*', '/sign-in', '/sign-up'],
};