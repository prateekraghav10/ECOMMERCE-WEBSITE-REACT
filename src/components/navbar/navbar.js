import { Link } from "react-router-dom"
import { useState } from "react"
import LoginButton from "../LoginButton"
import LogoutButton from "../LogoutButton"
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
const NavBar = ({ onSearch, cartItemCount }) => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }

    return (
        <Wrapper>
        <div className="wrapper">
        <header className="container">
            <div className="header py-2">
                <div className="grid">
                    <Link to="/" className="link">
                        <h1 className="brand">E-commerce</h1>
                    </Link>
                    <div className="formContainer">
                        <form className="search">
                            <div className="form-control">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    placeholder="Search products..."
                                />
                            </div>
                            <button type="button" className="search-btn" onClick={handleSubmit} >
                                Search
                            </button>
                        </form>
                    </div>
                    <div>
                    {isAuthenticated ? (<LogoutButton/>) : (<LoginButton/>)}
                    </div>
                    <Link to="/cart" className="link headerCart">
                        <img className="cartImg" src="/cart.svg" alt="cart" />
                        {cartItemCount > 0 && (
                            <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    </div>
        </Wrapper>
    )
}
const Wrapper=styled.section`
.grid{
    grid-template-colums: 1fr 3fr 1fr 1fr;
}
`;
export { NavBar }