import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='p-10 text-center'>
            <h2 className="text-5xl font-bold mb-6">Wrong Direction!!!!</h2>
            <p className="text-xl font-semibold">404 not found!</p>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;