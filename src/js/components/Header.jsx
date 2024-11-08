import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-purple">
            <div className="container">
                <a className="navbar-brand" href="/">Recetas sabrosas</a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

               <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link text-white" href="/">Recetas saladas</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="/">Repostería</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="/">Veganas</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="/">Sin gluten</a></li>
                    </ul>
                </div>
                
            </div>
        </nav>
    );
};

export default Header;