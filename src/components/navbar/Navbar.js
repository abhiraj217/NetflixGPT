import netflixLogo from "../../assets/images/Netflix_Logo.png";
const Navbar = () =>{
    return(
    <section className="absolute top-0 z-50 px-6 md:px-10 lg:px-16 py-5">
            <div className="">
                <img src={netflixLogo} alt="netflixLogo" className=" h-12"/>
            </div>
        </section>
    )
}

export default Navbar;