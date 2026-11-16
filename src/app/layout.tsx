import type { Metadata } from 'next'
import './styles.css'
import '../components/my-mexico-redesign.css'

export const metadata: Metadata = {
  title: 'My México. My Way. · Travel México',
  description:
    'Design your personal Mexico trip experience. Explore Baja California and the Mexican Caribbean your way.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body data-site="travelmexico">
        <header>
          <a className="brand" href="/">
            TRAVEL MÉXICO
            <span>TRAVEL. YOUR WAY.</span>
          </a>
        </header>
        <main id="main">{children}</main>
      </body>
    </html>
  )
}
