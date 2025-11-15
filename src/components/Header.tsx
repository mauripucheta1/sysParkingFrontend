

const Header = () => {

    return (

        <>

            {/* Header desktop */}
            <header className="fixed h-screen w-14 z-10 ml-12 text-gray-500 text-lg flex flex-col">

                <div className="h-1/4 flex items-center">

                    <a href="#heroSection">

                        <img src="/favicon.png" alt="Logo SysParking" className="w-full h-14" />

                    </a>

                </div>

                <nav className="flex flex-col justify-center w-full gap-24 h-2/4 font-medium">

                    <a href="#about" className="-rotate-90 hover:text-gray-700 ease-in transition-all">About</a> 
                    <a href="#services" className="-rotate-90 hover:text-gray-700 ease-in transition-all">Services</a>
                    <a href="#testimonios" className="-rotate-90 hover:text-gray-700 ease-in transition-all">Testimonies</a>
                    <a href="#contact" className="-rotate-90 hover:text-gray-700 ease-in transition-all">Contact</a>

                </nav>

                <div className="w-full h-1/4 flex flex-col gap-4 justify-center items-center">

                    {/* Website */}
                    <a href="https://mauriciopucheta.com" target="_blank">
                
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#004DA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M3.6 9h16.8" />
                            <path d="M3.6 15h16.8" />
                            <path d="M11.5 3a17 17 0 0 0 0 18" />
                            <path d="M12.5 3a17 17 0 0 1 0 18" />
                        </svg>
                    
                    </a>
                    

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/mauriciopucheta20" target="_blank">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#004DA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>

                    </a>

                    {/* Github */}
                    <a href="https://github.com/mauripucheta1" target="_blank">

                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#004DA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>

                    </a>

                </div>

            </header>

            {/* Header mobile */}
            <header className="hidden">


            </header>

        </>

    )

};

export default Header;