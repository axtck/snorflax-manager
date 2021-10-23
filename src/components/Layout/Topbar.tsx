import React, { FunctionComponent, MouseEvent } from "react";
import { useHistory } from "react-router";
import { IRouteLink } from "../../types";

interface TopbarProps {
    isLoggedIn: boolean;
    onLoginLogoutClick: (e: MouseEvent<HTMLLinkElement>) => void;
};

const Topbar: FunctionComponent<TopbarProps> = ({ isLoggedIn, onLoginLogoutClick }) => {

    const history = useHistory();

    // routes and labels
    const routes: IRouteLink[] = [
        {
            route: "/home",
            label: "Home"
        }
    ];

    const handleLinkClick = (e: MouseEvent<HTMLSpanElement>, route: string) => {
        e.preventDefault();
        history.push(route);
    };

    const handleTitleClick = (e: MouseEvent) => {
        e.preventDefault();
        history.push("/home");
    };

    /**********
     * Render
    ***********/

    const navLis = routes.map((r, i) => {
        return <li key={i} className="nav-item mx-3">
            <span
                className="text-white"
                role="button"
                onClick={(e) => handleLinkClick(e, r.route)}>
                {r.label}
            </span>
        </li>;
    });

    return (
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-neat">
            <div className="container">
                <h3
                    className="navbar-brand my-2"
                    onClick={handleTitleClick}
                    role="button">
                    Snorflax Manager
                </h3>
                <ul className="navbar-nav">
                    {navLis}
                    <li className="nav-item mx-3">
                        <span
                            className="text-white"
                            role="button"
                            onClick={onLoginLogoutClick}>
                            {isLoggedIn ? "Logout" : "Login"}
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Topbar;
