

const Header = () => {

    return (

        <>

            {/* Header desktop */}
            <header className="fixed h-screen w-12 border bg-red-500 z-10 ml-12 text-gray-600 hover:text-gray-700">


                <p>hola</p>

                <nav className="flex flex-col gap-5 w-full h-auto">

                    <a href="#aboutWe" className="-rotate-90">About</a> 
                    <a href="#services" className="-rotate-90">Services</a>
                    <a href="#testimonios" className="-rotate-90">Testimonies</a>
                    <a href="#contact" className="-rotate-90">Contact</a>

                </nav>

            </header>

            {/* Header mobile */}
            <header className="hidden">


            </header>

        </>

    )

};

export default Header;