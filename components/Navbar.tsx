import Container from '@/components/ui/Container'
import Link from 'next/link'
import MainNav from '@/components/MainNav'
import getCategories from '@/actions/getCategories'
import NavbarAction from './NavbarAction';
import MobileNavbar from './MobileNavbar';

export const revalidate = 0;

 async function Navbar() {
  const categories = await getCategories();
  return (
    <div className='border-b'>
      <Container >
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
      <Link href={"/"} className='flex ml-4 lg:ml-0 gap-x-2'>
      <p className='font-bold text-xl'>E-store</p>
      </Link>
     <div className='lg:block hidden'>
     <MainNav data={categories}/>
     </div>
      
    
     <NavbarAction />
      <div className='lg:hidden block ml-4'>
       <MobileNavbar data={categories} />
      </div>
     
        </div>
      </Container>
    </div>
  )
}
export default Navbar;
