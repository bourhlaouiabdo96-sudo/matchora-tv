import {NextRequest,NextResponse} from 'next/server';
export function proxy(request:NextRequest){const headers=new Headers(request.headers);headers.delete('x-store-locale');const first=request.nextUrl.pathname.split('/')[1];headers.set('x-store-locale',['de','es','fr'].includes(first)?first:'en');return NextResponse.next({request:{headers}})}
export const config={matcher:['/((?!_next/static|_next/image|icon.svg|robots.txt|sitemap.xml).*)']};
