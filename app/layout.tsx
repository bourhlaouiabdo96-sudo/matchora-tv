import type {Metadata,Viewport} from 'next';
import {site} from '@/lib/config';
import {getLocale} from '@/lib/locale';
import './globals.css';
export const viewport:Viewport={themeColor:'#0a1012',width:'device-width',initialScale:1};
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:`${site.name} TV`,template:`%s | ${site.name} TV`},robots:{index:site.indexable,follow:true}};
export default async function RootLayout({children}:{children:React.ReactNode}){const locale=await getLocale();return <html lang={locale} dir="ltr"><body><a href="#main" className="skip-link">{{en:'Skip to content',de:'Zum Inhalt springen',es:'Saltar al contenido',fr:'Aller au contenu'}[locale]}</a>{children}</body></html>}
