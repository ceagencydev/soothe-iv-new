import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "Soothe IV - Orange County Mobile IV Therapy",
  description:
    "IV therapy that comes to YOU, anywhere in Orange County. Boost energy, recover from hangovers, strengthen immunity, and more.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="callrail-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              '//cdn.callrail.com/companies/338618398/f403566eec24cd223e6c/12/swap.js'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','callrail');
            `,
          }}
        />
      </body>
    </html>
  )
}
