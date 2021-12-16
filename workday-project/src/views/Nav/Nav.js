import React from 'react'
import {Link} from "@reach/router";
import './nav.css'

const NavLink = props => {
    return (
        <div>
            <Link
                {...props}
                className={"nav-link"}
                getProps={({isCurrent}) => {
                    return{
                        style: {
                            color: isCurrent ? "#F2EBC7" : "#FAFAFA"
                        }
                    }
                }}>
            </Link>
        </div>
    )
}

const Nav = () => {
    return(
      <div className="nav-container">
        <div>
            <div className={"nav-logo"}>Yulp!</div>
            <ul>
                <li>
                    <NavLink to="/" >Search</NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">Favorites</NavLink>
                </li>
            </ul>
        </div>
      </div>
    )
}

export default Nav
