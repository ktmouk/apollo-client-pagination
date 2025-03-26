import { Content } from '../_components/Content';
import { SwProvider } from '../_components/SwProvider';
import Link from 'next/link';

export default async function Page() {
  return (
    <SwProvider>
      <Content />
      <Link href="/">Home</Link>
    </SwProvider>
  )
}
