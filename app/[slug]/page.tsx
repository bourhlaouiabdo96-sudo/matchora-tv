import {notFound} from 'next/navigation';
import StorefrontPage,{salesMetadata} from '@/components/storefront/StorefrontPage';
import InfoPage,{infoMetadata} from '@/components/storefront/InfoPage';
import {isSalesLocale} from '@/lib/locale';
import {isInfoPage} from '@/lib/info-copy';
type Props={params:Promise<{slug:string}>;searchParams:Promise<{plan?:string}>};
export async function generateMetadata({params}:Props){const {slug}=await params;if(isSalesLocale(slug)&&slug!=='en')return salesMetadata(slug);if(isInfoPage(slug))return infoMetadata('en',slug);return {}}
export default async function Page({params,searchParams}:Props){const {slug}=await params;if(isSalesLocale(slug)&&slug!=='en')return <StorefrontPage locale={slug} searchParams={searchParams}/>;if(isInfoPage(slug))return <InfoPage locale="en" page={slug}/>;notFound()}
