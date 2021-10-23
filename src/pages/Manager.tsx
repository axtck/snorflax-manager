import React, { FunctionComponent, MouseEvent } from "react";
import api from "../apis/snorflaxManagerAPI";

interface ManagerProps { };

const Manager: FunctionComponent<ManagerProps> = () => {

    const handleClick = (e: MouseEvent<HTMLButtonElement>, type: string) => {
        e.preventDefault();

        api.get("/users/" + type).then((res) => {
            console.log(res.data);
        });
    };

    return (
        <div>
            <button onClick={(e) => handleClick(e, "all")}>all</button>
            <button onClick={(e) => handleClick(e, "user")}>user</button>
            <button onClick={(e) => handleClick(e, "admin")}>admin</button>
            <button onClick={(e) => handleClick(e, "moderator")}>mod</button>

        </div>
    );
};

export default Manager;
