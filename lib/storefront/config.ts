import {site} from '../config';
export function telegramLink(input:string|undefined):string|null{if(!input?.trim())return null;const value=input.trim();try{const url=new URL(value.startsWith('@')?`https://t.me/${value.slice(1)}`:value);if(url.protocol!=='https:'||url.hostname!=='t.me'||url.username||url.password||url.port||!/^\/(?:[a-zA-Z0-9_]{5,32}|\+[a-zA-Z0-9_-]{5,})\/?$/.test(url.pathname))return null;return `https://t.me${url.pathname.replace(/\/$/,'')}`}catch{return null}}
export const storefront={name:site.name,email:site.contactEmail,whatsapp:'212631950008',telegram:telegramLink(process.env.NEXT_PUBLIC_TELEGRAM_URL||'https://t.me/+212624099688'),currency:'USD' as const};
export const salesLocales=['en','de','es','fr'] as const;
export type SalesLocale=typeof salesLocales[number];
export const salesPath=(locale:SalesLocale)=>locale==='en'?'/':`/${locale}`;
export const infoPath=(locale:SalesLocale,page:'privacy'|'terms'|'contact')=>locale==='en'?`/${page}`:`/${locale}/${page}`;
export const salesPlans=[{id:'month',months:1,cents:1499},{id:'quarter',months:3,cents:2699},{id:'half-year',months:6,cents:4499},{id:'year',months:12,cents:6999}] as const;
export type SalesPlanId=typeof salesPlans[number]['id'];
export function salesPrice(cents:number,locale:SalesLocale){return new Intl.NumberFormat(locale,{style:'currency',currency:storefront.currency,currencyDisplay:'narrowSymbol'}).format(cents/100)}
const requestText={
 en:{heading:'IPTV subscription request',language:'Language',plan:'Plan',months:'month(s)',total:'Total',name:'Name',device:'Device',question:'Question',confirm:'Please confirm service availability, device compatibility, simultaneous connections and payment instructions before payment.'},
 de:{heading:'IPTV-Abonnement anfragen',language:'Sprache',plan:'Tarif',months:'Monat(e)',total:'Gesamtpreis',name:'Name',device:'Gerät',question:'Frage',confirm:'Bitte Verfügbarkeit, Gerätekompatibilität, gleichzeitige Verbindungen und Zahlungsanweisungen vor der Zahlung bestätigen.'},
 es:{heading:'Solicitud de suscripción IPTV',language:'Idioma',plan:'Plan',months:'mes(es)',total:'Total',name:'Nombre',device:'Dispositivo',question:'Pregunta',confirm:'Confirmen disponibilidad, compatibilidad, conexiones simultáneas e instrucciones de pago antes del pago.'},
 fr:{heading:'Demande d’abonnement IPTV',language:'Langue',plan:'Forfait',months:'mois',total:'Total',name:'Nom',device:'Appareil',question:'Question',confirm:'Merci de confirmer disponibilité, compatibilité, connexions simultanées et modalités de paiement avant règlement.'}
};
export function orderLinks(plan:typeof salesPlans[number],locale:SalesLocale,name:string,device:string,message:string){const c=requestText[locale];const lines=[`${storefront.name} — ${c.heading}`,`${c.language}: ${locale.toUpperCase()}`,`${c.plan}: ${plan.months} ${c.months}`,`${c.total}: USD ${(plan.cents/100).toFixed(2)}`,name.trim()?`${c.name}: ${name.trim()}`:'',`${c.device}: ${device}`,message.trim()?`${c.question}: ${message.trim()}`:'',c.confirm].filter(Boolean).join('\n');return {whatsapp:`https://wa.me/${storefront.whatsapp}?text=${encodeURIComponent(lines)}`,email:`mailto:${storefront.email}?subject=${encodeURIComponent(`${storefront.name}: ${c.heading} — ${plan.months} ${c.months}`)}&body=${encodeURIComponent(lines)}`}}
