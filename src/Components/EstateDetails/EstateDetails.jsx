import { Link, useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {

    
    const { id } = useParams();
    const idInt = parseInt(id);
    const estates = useLoaderData();
    const estate = estates.find(estate => estate.id === idInt);

    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Estate Details</h2>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 mx-auto pt-10">
                    <img src={estate.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{estate.estate_title}</h2>
                    <p>{estate.description}</p>
                    <div className="flex justify-between gap-8">
                        <p className="text-base font-semibold">Area: {estate.area}</p>
                        <p className="text-base font-semibold">Location: {estate.location}</p>
                    </div>
                    <div className="flex justify-between gap-8">
                        <p className="text-base font-semibold">Bedrooms: {estate.bedrooms}</p>
                        <p className="text-base font-semibold">Bathrooms: {estate.bathrooms}</p>
                        <p className="text-base font-semibold">Years Built {estate.year_built}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-accent">Buy Now</button>
                       
                    </div>
                    <Link to="/login"><button className="btn btn-accent text-xl">Back to LogIn</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;