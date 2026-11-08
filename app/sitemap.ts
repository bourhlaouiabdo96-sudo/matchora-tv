import type {MetadataRoute} from 'next';
import {site} from '@/lib/config';
import {salesLocales,salesPath,infoPath} from '@/lib/storefront/config';
export default function sitemap():MetadataRoute.Sitemap{return site.indexable?salesLocales.flatMap(locale=>[salesPath(locale),infoPath(locale,'contact'),infoPath(locale,'privacy'),infoPath(locale,'terms')]).map(path=>({url:site.url+path,changeFrequency:'monthly',priority:path==='/'?1:.6})):[]}
