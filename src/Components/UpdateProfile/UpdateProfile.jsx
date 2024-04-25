import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h2 className="text-base font-bold p-6">Edit</h2>
            <div className="text-center my-4">
                <h2 className="text-2xl text-center font-bold"></h2>
                {
                    user && <>
                        <img src="" alt="" />
                        <p className="font-medium text-base">Name: {user.displayName}</p>
                        <span className="font-medium text-lg">Email: {user.email}</span>
                        <img src={user.photoURL} alt="" />
                    </>

                }

            </div>
        </div>
    );
};

export default UpdateProfile;