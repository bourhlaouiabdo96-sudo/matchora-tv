import {notFound} from 'next/navigation';
import InfoPage,{infoMetadata} from '@/components/storefront/InfoPage';
import {isSalesLocale} from '@/lib/locale';
import {isInfoPage} from '@/lib/info-copy';
type Props={params:Promise<{slug:string;page:string}>};
export async function generateMetadata({params}:Props){const {slug,page}=await params;return isSalesLocale(slug)&&slug!=='en'&&isInfoPage(page)?infoMetadata(slug,page):{}}
export default async function Page({params}:Props){const {slug,page}=await params;if(!isSalesLocale(slug)||slug==='en'||!isInfoPage(page))notFound();return <InfoPage locale={slug} page={page}/>}
