import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const SingUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const { email, name, number } = data;
        const addduser = { name: name, email: email, number: number }

        fetch('https://user-manegment-server.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addduser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'user has been successfully added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder=" Enter the Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Enter the email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text"  {...register("number", { required: true })} name="number" placeholder=" Enter Phone Number" className="input input-bordered" />
                                {errors.number && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className=" bg-[#495af0d0] w-full py-3 text-white rounded-lg" type="submit" value="Sign Up" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;