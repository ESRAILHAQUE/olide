import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState('');

    const onSubmit = () => {
        setSuccessMessage('Your message has been sent successfully!');
    };

    return (
        <div className='p-8'>
            <h3 className='text-3xl text-center mb-6 font-bold'>Contact Us</h3>
            <div className="flex lg:px-16">
                <div className="container mt-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                            <input {...register('name', { required: 'Name is required' })} type="text" id="name" className="input border border-gray-300" />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                            <input {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })} type="email" id="email" className="input border border-gray-300" />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-gray-700 font-semibold">Subject</label>
                            <input {...register('subject', { required: 'Subject is required' })} type="text" id="subject" className="input border border-gray-300" />
                            {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                            <textarea {...register('message', { required: 'Message is required' })} id="message" className="input textarea border border-gray-300" />
                            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary ml-12 mb-2">Submit</button>
                        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                    </form>
                </div>
                <div>
                    <div className='text-center mt-16'>
                        <p className='mb-4'><span className='text-lg font-medium'>Email Address:</span> contact@example.com</p>
                        <p className='mb-4'><span className='text-lg font-medium'>Phone Number:</span> 123-456-7890</p>
                        <p className='mb-4'><span className='text-lg font-medium'>Physical Address:</span> 123 Fake Street, Fictionville, FS 12345</p>
                        <p><span className='text-lg font-medium'>Social Media Links:</span>
                            Facebook: https://www.facebook.com/examplerealestate <br />
                            Twitter: https://twitter.com/examplerealestate <br />
                            Instagram: https://www.instagram.com/examplerealestate</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
