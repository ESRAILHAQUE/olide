import { Link } from "react-router-dom";

const EstatesCard = ({ estates }) => {

    const { estate_title, image, view_property_button, price, area, location, segment_name, id, status5 } = estates;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl p-4">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {estate_title}
                    </h2>
                    <p className="text-base font-medium">{price}</p>
                    <div className="flex justify-between">
                        <p className="text-base font-semibold">Area: {area}</p>                       
                        <p className="text-base font-semibold">Location: {location}</p>
                    </div>
                    <p className="text-xl font-bold">{status5}</p>
                    <p className="text-lg font-semibold">segment_name: {segment_name}</p>
                    <div className="card-actions justify-center">
                        <Link to={`./estate/${id}`}><button className="btn btn-primary">{view_property_button}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstatesCard;