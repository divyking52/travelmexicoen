import { getSiteConfig } from '@/lib/site-config'
import { catalogForSite } from '@/lib/site-catalog'
import MyMexicoRedesign from '@/components/MyMexicoRedesign'

export const dynamic = 'force-static'

export default function HomePage() {
  const site = getSiteConfig('travelmexico')
  const catalog = catalogForSite('en', site)

  return <MyMexicoRedesign locale="en" catalog={catalog} />
}
