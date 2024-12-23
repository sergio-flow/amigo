import { NextResponse } from "next/server";

let locales = [
    "ar",
    "bn",
    "zh",
    "en",
    "fr",
    "hi",
    "pt",
    "ro",
    "ru",
    "es",
]

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
    const acceptLanguage = request.headers.get('accept-language');
    if (!acceptLanguage) return 'en'; // Default locale if no `Accept-Language` header is found

    const preferredLocales = acceptLanguage
        .split(',')
        .map(lang => lang.split(';')[0].trim().split('-')[0].toLowerCase());

    for (const preferredLocale of preferredLocales) {
        if (locales.includes(preferredLocale)) {
            return preferredLocale;
        }
    }

    return 'en'; // Fallback locale if none of the preferred locales match
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    // console.log('pathnameHasLocale', pathname, pathnameHasLocale)

    if (pathname === '/robots.txt') return
    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!api|_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        // '/(api|trpc)(.*)',        // '/'
    ],
}