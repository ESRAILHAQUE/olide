import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import EstatesCard from "../Estates/EstatesCard";


const Home = ({ title }) => {
    const estates = useLoaderData();
    return (
        <div className="p-6">
            <Banner></Banner>
            <h2 className="text-2xl font-bold text-center">Estates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    estates.map(theEstates => <EstatesCard
                        key={theEstates.id}
                        estates={theEstates}
                    ></EstatesCard>)
                }
            </div>
        </div>
    );
};

export default Home;