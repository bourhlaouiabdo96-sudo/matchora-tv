const configured=process.env.NEXT_PUBLIC_SITE_URL?.trim();
const host=process.env.VERCEL_PROJECT_PRODUCTION_URL||process.env.VERCEL_URL;
const origin=new URL(configured||(host?`https://${host}`:'http://localhost:3001'));
if(!['https:','http:'].includes(origin.protocol))throw Error('Invalid site URL');
export const site={name:process.env.NEXT_PUBLIC_SITE_NAME||'MATCHORA',url:origin.origin,contactEmail:'bourhlaouia@gmail.com',indexable:process.env.SITE_ALLOW_INDEXING==='true'&&Boolean(configured)};
