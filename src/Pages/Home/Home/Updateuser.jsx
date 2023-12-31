import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Updateuser = ({ uapdateInfo, isOpen, closeModal, refetch }) => {
    console.log(uapdateInfo)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const {email, name,  number} = data;
        const updateaddduser = {name: name, email: email, number: number}



        fetch(`https://user-manegment-server.vercel.app/user/${uapdateInfo._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateaddduser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch()
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${uapdateInfo.name} information hass been change!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                    <Dialog.Title
                                        as='h3'
                                        className='text-lg font-medium text-center leading-6 text-gray-900 uppercase'
                                    >
                                        Uapdate your information
                                    </Dialog.Title>



                                    <div className='border-4 border-slate-200 mt-2 '>
                                        <div className='    transition-colors duration-200 delay-500 '>
                                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Name</span>
                                                    </label>
                                                    <input type="text"  {...register("name", { required: true })} name="name"  defaultValue={ uapdateInfo.name} className="input input-bordered" />
                                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                                </div>
                                               
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Email</span>
                                                    </label>
                                                    <input type="email"  {...register("email", { required: true })} name="email"  defaultValue={ uapdateInfo.email} className="input input-bordered" />
                                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Phone Number</span>
                                                    </label>
                                                    <input type="text"  {...register("number", { required: true })} name="number"  defaultValue={uapdateInfo.number} className="input input-bordered" />
                                                    {errors.number && <span className="text-red-600">Email is required</span>}
                                                </div>

                                                <div className="form-control mt-6">
                                                    <input className="bg-[#495af0e1]  py-4  w-full text-white" type="submit" value="Sign Up" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <hr className='mt-8 ' />

                                    <div className='flex mt-2 justify-around'>
                                        <button
                                            type='submit'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>




                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Updateuser;