import './hero.css'
import NFT1T from './assets/NFT1T.png'
function Hero (){

    return(
        <div className="flex-col md:flex-row  h-auto w-auto bg-slate-300 hero">
            <div>
                <h1  className="hero-text mt-5 text-slate-900 ml-3 md:ml-6">Buy Your Favourite Ape NFTs At Affordable Prices</h1>
                <h6 className='mt-5 text-slate-950 ml-4 md:ml-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quo rerum beatae, porro eligendi, consectetur mollitia atque voluptatibus laborum error fuga explic</h6>
                <div className='btn flex gap-3 mt-5 ml-4 md:ml-6'>
                    <button className='bg-slate-600 rounded-2xl h-10 w-24 text-slate-300'>Learn More</button>
                    <button  className='bg-slate-300 border-slate-600 border-2 rounded-2xl h-10 w-24 text-slate-600'>Shop</button>
                </div>
            </div>
            <div>
                <img src={NFT1T} className='heroImg '></img>
            </div>
        </div>
    )
}
export default Hero