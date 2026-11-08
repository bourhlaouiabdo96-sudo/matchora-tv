import {headers} from 'next/headers';
import {salesLocales,type SalesLocale} from './storefront/config';
export const isSalesLocale=(value:string):value is SalesLocale=>salesLocales.includes(value as SalesLocale);
export async function getLocale():Promise<SalesLocale>{const value=(await headers()).get('x-store-locale')||'en';return isSalesLocale(value)?value:'en'}
