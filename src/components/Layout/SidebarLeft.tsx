import React, { FunctionComponent, MouseEvent } from "react";
import { useHistory } from "react-router";
import { Constants } from "../../constants";
import { IRouteLink } from "../../types";

interface SidebarLeftProps { };

const SidebarLeft: FunctionComponent<SidebarLeftProps> = () => {

    const history = useHistory();

    // routes and labels
    const routes: IRouteLink[] = Constants.pageRoutes.map((route) => {
        return {
            route: route,
            label: route,
        };
    });

    const handleLinkClick = (e: MouseEvent<HTMLButtonElement>, route: string) => {
        e.preventDefault();
        history.push(route);
    };

    /**********
     * Render
    ***********/

    const routeLinks = routes.map((r, i) => {
        return (
            <button
                key={i}
                className="btn nav-link shadow-none"
                onClick={(e) => handleLinkClick(e, r.route)}>
                {r.label}
            </button>
        );
    });

    return (
        <React.Fragment>
            {routeLinks}
        </React.Fragment>
    );
};

export default SidebarLeft;
