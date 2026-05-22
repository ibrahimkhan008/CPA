"use client";

import Script from "next/script";

export function ClarityProvider() {
  return (
    <>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,t,z,s,y){
c[t]=c[t]||[];c[t].push({'gtm.start':new Date().getTime(),event:'z.x.x'});
s=a.createElement(r);y=a.getElementsByTagName(r)[0];
s.async=true;s.src='https://www.clarity.ms/tag/'+z;
y.parentNode.insertBefore(s,y);
})(window,document,'script','clarity','wva4q6ngbq');`}
      </Script>
    </>
  );
}