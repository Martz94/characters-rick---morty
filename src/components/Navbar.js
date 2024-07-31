import React from 'react'

const Navbar = ({brand}) => {
    return (
        <nav className="navbar navbar-dark bg-warning">
            <div className="container p-3">
                <h3 className="text-center text-black text-uppercase" >{brand}</h3>
            </div>
        </nav>
    )
}

export default Navbar
