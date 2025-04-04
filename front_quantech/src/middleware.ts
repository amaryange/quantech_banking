import {logger} from "@/lib/logger";
import {NextResponse} from "next/server";

export function middleware(request) {

    logger.info("middleware running...");

    const token = request.cookies.get('authToken')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/account', '/comptes/transfert', '/dashboard', '/comptes',],
};
