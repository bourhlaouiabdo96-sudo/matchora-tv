import StorefrontPage,{salesMetadata} from '@/components/storefront/StorefrontPage';
export const metadata=salesMetadata('en');
export default function Home({searchParams}:{searchParams:Promise<{plan?:string}>}){return <StorefrontPage locale="en" searchParams={searchParams}/>}
