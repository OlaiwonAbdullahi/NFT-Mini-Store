import Filter from './assets/browser.png'
import './Timeline.css'
function Timeline(){

    return(
        <div className="bg-slate-400 h-12 flex gap-5">
            <h1 className="text-slate-900 timeLineText">NFTs</h1>
            <p className='flex mt-4'><img src={Filter} className='h-7 w-7'></img>Filter</p>
        </div>
    )
}
export default Timeline