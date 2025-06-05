import { Link } from '@/i18n/navigation';
import { Button } from '@heroui/button';
import { Link as HeroLink } from "@heroui/link"

export default function HomePage() {

  return (
    <div className='lg:p-10 flex flex-col items-center gap-12 '>
      <div className='text-center'>

        <h1 className='text-gray-950 text-2xl font-bold'>My Task</h1>
        <span className='text-xl font-semibold mt-5'>Kaveh Asgari</span>

      </div>

      <Link href={"/orderslist"}>
        <Button
          showAnchorIcon
          variant="solid"
        >
          Orders List Page / SSR
        </Button>
      </Link>

      <Link href={"/art"}>
        <Button
          showAnchorIcon
          variant="solid"
        >
          Art Page / SSG
        </Button>
      </Link>

      <ol className='list-disc'>
        <li>SideBar / ISR</li>
        <li>Status Display in Orders Page / CSR</li>
      </ol>
    </div>
  );
}