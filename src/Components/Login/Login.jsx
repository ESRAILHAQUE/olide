import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "../Providers/AuthProvider";



const Login = () => {
    const [logError, setLogError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const { logInUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            });
    };

    const handleGoogleLogOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogin = async (data) => {
        const { email, password } = data;
        setLogError('');
        setSuccess('');

        try {
            await logInUser(email, password);
            setSuccess('User logged in successfully');
            setLogError('');
        } catch (error) {
            console.error(error);
        }

        if (password.length < 6) {
            setLogError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLogError('Password should contain at least 1 capital letter');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setLogError('Password should contain at least 1 lowercase letter');
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess('User registered successfully');
        } catch (error) {
            console.error(error);
            setLogError(error.message);
        }
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login now</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            {errors.email && <p className="text-red-700">Email is required</p>}
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? "text" : "password"} {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                <span className="absolute top-2/3 right-3 transform -translate-y-1/2" onClick={() => setShowPass(!showPass)}>
                                    {showPass ? <IoMdEyeOff /> : <IoMdEye />}
                                </span>
                            </div>
                            {errors.password && <p className="text-red-700">Password is required</p>}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-outline">Login</button>
                            </div>
                        </form>
                        {
                            logError && <p className="text-red-700">{logError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                        <div>
                            {user ?
                                <button onClick={handleGoogleLogOut}>Log Out</button> :
                                <>
                                    <h2 className="text-lg">LogIn With</h2>
                                    <button className="btn btn-outline" onClick={handleGoogleSignIn}>Google SignIn</button>
                                    <button className="btn btn-outline" onClick={handleFacebookSignIn}>Facebook LogIn</button>
                                </>
                            }
                            {user && <div>
                                User: {user?.displayName} <br />
                                email: {user?.email} <br />
                                <img src={user?.photoURL} alt="" />
                            </div>}
                        </div>
                        <p className="text-base p-4">New to the website? please <Link className='text-lg font-bold' to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

