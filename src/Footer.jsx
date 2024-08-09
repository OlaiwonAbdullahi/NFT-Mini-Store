function Footer(){

    return(
        <footer className="bg-slate-600 text-slate-400 h-auto">
            <div>
                <span className="text-slate-200 text-2xl">NFT Store</span>
            </div>
            <p className="text-slate-200 text-xl">Quick Link</p>
            <div className="flex list-none text-x gap-4">
                
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Shop</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <hr className="text-slate-200"></hr>
                <div>
                    <p className="text-center">&copy; {new Date().getFullYear()} All Right Reserved </p>
                </div>
        </footer>
    )
}
export default Footer