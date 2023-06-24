import React, { useState } from 'react';
import Updateuser from './Updateuser';
import Swal from 'sweetalert2';
import { FaBeer, FaTrash, FaUserEdit } from 'react-icons/fa';


const HomeCard = ({users, refetch}) => {

    const [uapdateInfo, setuapdateInfo] = useState({
        _id: users._id,
        name: users.name,
        email: users.email,
        number: users.number
    })

    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const handleremove = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://user-manegment-server.vercel.app/user/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div>
                <div className="card w-96 mx-auto border-4 border-slate-200 mb-8  ">
                    <div  data-aos="fade-up"
     data-aos-duration="3000" className="card-body items-center text-center space-y-6 ">
                        <h2 className="card-title"> Name: {users.name}</h2>
                        <p>Email: {users.email}</p>
                        <p>Phone Number: {users.number}</p>
                        
                        <div className="card-actions text-white justify-end">
                            <button onClick={() => setIsOpen(true)} className="bg-[#495af0e1]  py-2 px-5 inline-flex items-center gap-2"> 
                           <FaUserEdit className=' text-xl'></FaUserEdit> Modify </button>
                            <button onClick={() => handleremove(users._id)} className=" bg-red-500  py-2 px-5 inline-flex items-center gap-2"> <FaTrash></FaTrash> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <Updateuser
                uapdateInfo={uapdateInfo}
                isOpen={isOpen}
                closeModal={closeModal}
                refetch={refetch}
            ></Updateuser>

        </div>
    );
};

export default HomeCard;