import {Link} from 'react-router';
import {ShoppingCart, User, Search } from 'lucide-react';



export default function HeaderPage() {
    const cartCount = 2; //dummy will Modify later
  return (
    <nav className='flex shadow flex-col'>
        <div className='bg-gray-900 w-full h-10 flex justify-center items-center font-mono'>
            <span className='text-gray-100'>Sale is Started and Free Express Delivery - Upto 85%! <Link to='/' className='underline ml-4'>ShopNow</Link></span>
        </div>
        <div className='container flex w-full mx-auto'>
        <div className='flex w-full h-14 justify-around'>
            <div className='p-2 flex items-center'>
                <span>ShopLeyIndia</span>
            </div>
            <div className='flex items-center'>
                <form className='flex'>
                    <Search className='text-gray-100 bg-white-500 w-10 p-2 h-10 rounded-l-lg'/>
                    <input type='text' placeholder='Search for Products...' className='p-2 w-[40rem] bg-white-500 rounded-r-lg placeholder-black focus:ring-persian_green-400 focus:placeholder-gray-100'/>
                </form>
            </div>
            <div className='flex p-2 gap-6 items-center'>
                <div className='flex gap-2 items-center'>
                    <User/>
                    <Link to="/login" className='font-medium '>Login</Link>
                </div>
                <div className='flex gap-2 items-center relative '>
                    <ShoppingCart className='h-5 w-5'/>
                    <span>Cart</span>
                    {/* used relative on parent div and absolute on child also -top to position it above the cart */}
                    <span className='absolute -top-2 right-8 bg-red-500 w-5 h-5 flex items-center border-2 border-solid border-red-500 justify-center rounded-[50%] font-medium'>
                        {cartCount}
                    </span>
                </div>
            </div>
        </div>
        </div>
    </nav>
  )
}
