import './hero.css'
import NFT1 from './assets/NFT1.jpg'
function Hero (){

    return(
        <div className="flex h-96 w-auto bg-slate-300 hero">
            <div className="hero-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet beatae
            </div>
            <div>
                <img src={NFT1} className='heroImg '></img>
            </div>
        </div>
    )
}
export default Hero