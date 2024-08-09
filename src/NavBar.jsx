import Cart from './assets/cart.png'
import'./Navbar.css'
function Navbar (){

  return(
    <div className=' bg-slate-400 h-12 md:gap-32 md:px-80 px-5 gap-5 flex'>
      
        <div className="brandName mt-2 text-slate-800 text-2xl flex">
         NFTStore 
        </div>
        <nav>
        <div className="Menu flex mx-auto right-0 md:mt-2 mt-3 md:gap-5 gap-4 md:text-xl text-sm ml-4">
          <ul className='flex gap-4'>
            <li className='list-none p-0 m-0'><a href="#">Home</a></li>
            <li className='list-none p-0 m-0'><a href="#">About</a></li>
            <li className='list-none p-0 m-0'><a href="#">Shop</a></li>
            <li className='list-none p-0 m-0'><a href="#">Contact</a></li>
            </ul>
        </div>

        
      </nav>
      <div className='md:mt-2 mt-3 ml-8 '>
          <img src={Cart} className='text-slate-900 h-10 w-11'></img>
        </div>
    </div>
  )
}
export default Navbar