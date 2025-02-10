import { NextResponse, type NextRequest } from "next/server";

import { getSessionCookie } from "better-auth";

const publicRoutes = ["/sign-in", "/sign-up", "/terms", "/privacy"];

const authRoutes = ["/sign-in", "/sign-up"];

export default async function authMiddleware(request: NextRequest) {

	const session = await getSessionCookie(request);

	const { pathname } = request.nextUrl;

	const isPublicRoute = publicRoutes.includes(pathname);

	const isAuthRoute = authRoutes.includes(pathname);

	if (isAuthRoute && session) return NextResponse.redirect(new URL("/", request.url));

	if (isPublicRoute) return NextResponse.next();

	if (!session) return NextResponse.redirect(new URL("/sign-in", request.url));

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};