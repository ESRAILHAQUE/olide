import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Register = () => {
    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const { name, email, password, image } = e.target;
        setRegError('');
        setSuccess('');

        if (password.value.length < 6) {
            setRegError('Password should be at least 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password.value)) {
            setRegError('Password should contain at least 1 capital letter');
            return;
        } else if (!/[a-z]/.test(password.value)) {
            setRegError('Password should contain at least 1 lowercase letter');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
            await updateProfile(userCredential.user, {
                displayName: name.value,
                photoURL: image.files[0] ? URL.createObjectURL(image.files[0]) : null
            });
            setSuccess('User registered successfully');
            e.target.reset();
        } catch (error) {
            console.error(error);
            setRegError(error.message);
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register here</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                            <span onClick={() => setShowPass(!showPass)}>
                                {showPass ? <IoMdEyeOff /> : <IoMdEye />}
                            </span>
                        </div>
                        <div className="form-control">
                            <label htmlFor="image">Select an image:</label>
                            <input type="file" id="image" name="image" accept="image/*" className="input" />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-outline">Register</button>
                        </div>
                    </form>
                    {regError && <p className="text-red-700">{regError}</p>}
                    {success && <p className="text-green-600">{success}</p>}
                    <p className="text-base p-4">Already have an account? <Link className='text-lg font-bold' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
