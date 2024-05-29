import { useRouteError } from "react-router-dom";

const Errors = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>404 Page Not Found</h1>
        </div>
    );
}

export default Errors;