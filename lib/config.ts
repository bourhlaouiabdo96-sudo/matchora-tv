const configured=process.env.NEXT_PUBLIC_SITE_URL?.trim();
const origin=new URL(configured||'https://www.matchoratv.com');
if(!['https:','http:'].includes(origin.protocol))throw Error('Invalid site URL');
export const site={name:process.env.NEXT_PUBLIC_SITE_NAME||'MATCHORA',url:origin.origin,contactEmail:'bourhlaouia@gmail.com',indexable:process.env.SITE_ALLOW_INDEXING==='true'&&Boolean(configured)};
