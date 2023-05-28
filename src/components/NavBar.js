import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <div className="d-flex flex-column flex-md-row p-3 border-bottom bg-secondary text-white">
                <h4 className="mr-md-auto">
                    <a href="/" className="text-decoration-none text-white">eBOOK</a>
                </h4>

                <nav className="btn-group">
                    <Link to="/home" className="btn btn-light">Home Page</Link>
                    <Link to="/" className="btn btn-light">My Books</Link>
                    <Link to="/search" className="btn btn-light">Search</Link>
                    <Link to="/signin" className="btn btn-light">Sign in</Link>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
