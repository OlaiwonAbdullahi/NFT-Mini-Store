import Cart from './assets/cart.png'
import'./Navbar.css'
function Navbar (){

  return(
    <div>
      <nav className=" bg-slate-400 h-12 gap-48">
        <div className="brandName mt-2">
          NFT Store
        </div>
        <div className="Menu flex right-0 mt-2 gap-3 ">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
        </div>

        <div className='mt-2'>
          <img src={Cart} className='text-slate-900'></img>
        </div>
      </nav>
    </div>
  )
}
export default Navbar