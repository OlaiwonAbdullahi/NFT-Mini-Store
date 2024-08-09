import NFT1 from './assets/NFT1.jpg'
import NFT2 from './assets/NFT2.jpg'
import NFT3 from './assets/NFT3.jpg'
import NFT4 from './assets/NFT4.jpg'
import NFT5 from './assets/NFT5.jpg'
import Footer from './Footer.jsx'
import Hero from './Hero.jsx'
import NavBar from './NavBar.jsx'
import ProductList from './ProductList.jsx';
import Timeline from './Timeline.jsx'

function App(){
  return (
        <>
      
      <NavBar/>
      <Hero/>
      <Timeline/>
      <ProductList Img={NFT1} name="Bored Ape" price="$300" description="lorem" Availability="true" cartegory="ApeNFT"/>
      <ProductList Img={NFT2} name="Monkey NFT" price="$250" description="lorem" Availability="false" cartegory="ApeNFT"/>
      <ProductList Img={NFT3} name="Ape King" price="$600" description="lorem" Availability="true" cartegory="ApeNFT"/>
      <ProductList Img={NFT4} name="Crypto Monk" price="$300" description="lorem" Availability="true" cartegory="ApeNFT"/>
      <ProductList Img={NFT5} name="Blossom Tree" price="$200" description="lorem" Availability="true" cartegory="ApeNFT"/>
      <Footer></Footer>
      </>
  );

  
}

export default App;
