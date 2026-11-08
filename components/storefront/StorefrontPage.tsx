import type {Metadata} from 'next';
import {site} from '@/lib/config';
import {salesCopy} from '@/lib/storefront/copy';
import {salesPath,salesPlans,type SalesLocale} from '@/lib/storefront/config';
import Storefront from './Storefront';
export function salesMetadata(locale:SalesLocale):Metadata{const c=salesCopy[locale];return {robots:{index:site.indexable,follow:true},title:c.title,description:c.description,alternates:{canonical:salesPath(locale),languages:{en:'/',de:'/de',es:'/es',fr:'/fr','x-default':'/'}},openGraph:{title:`${site.name} · ${c.title}`,description:c.description,url:salesPath(locale),type:'website',locale:{en:'en_GB',de:'de_DE',es:'es_ES',fr:'fr_FR'}[locale]},twitter:{card:'summary',title:c.title,description:c.description}}}
export default async function StorefrontPage({locale,searchParams}:{locale:SalesLocale;searchParams:Promise<{plan?:string}>}){const {plan}=await searchParams;const selected=salesPlans.find(p=>p.id===plan)?.id||'year';return <Storefront locale={locale} initialPlan={selected}/>}
