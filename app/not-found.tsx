import {getLocale} from '@/lib/locale';
import {salesPath} from '@/lib/storefront/config';
export default async function NotFound(){const locale=await getLocale();return <main id="main" className="sales-container sales-info"><span>404</span><h1>{{en:'Page not found',de:'Seite nicht gefunden',es:'Página no encontrada',fr:'Page introuvable'}[locale]}</h1><a className="sales-button sales-primary" href={salesPath(locale)}>{{en:'Home',de:'Startseite',es:'Inicio',fr:'Accueil'}[locale]}</a></main>}
