import {useNavigate} from "react-router-dom";

const NoPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>No Page</h1>
            <button onClick={() => navigate("/")}>Back to home!</button>
        </>
    )
}

export default NoPage;