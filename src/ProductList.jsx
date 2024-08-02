
import './ProductList.css'
function ProductList(props){

    return(
        <>
        <div className="card">
            <img src={props.Img} alt="Profile Picture" className='card-image'></img>
            <div className='flex gap-20'>
            <h2 className='card-title text-slate-800 text-lg'>{props.name}</h2>
            <p className='card-text price text-slate-500'>{props.price}</p>
            </div>
            <div className='flex gap-32'>
            <p className='card-text  text-slate-500 text-sm'>{props.description}</p>
            <p className='card-text text-green-500' >{props.Availability ? "Available" : "UnAvailable"}</p>
            </div>
            <div className='flex gap-20 '>
                <div>
                    <code>{props.cartegory}</code>
                </div>
                <div className='flex gap-2 bottom-2'>
                    <button className='bg-slate-600 rounded-2xl h-10 w-24'>Add to Cart</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductList