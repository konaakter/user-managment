import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import HomeCard from './HomeCard';

const Home = () => {




    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users '],
        queryFn: async () => {
            const response = await fetch('https://user-manegment-server.vercel.app/user')
            return response.json()

        },

    })
   
   
   

   


    return (
        <div className=' bg-slate-200 pt-11 pb-10'>
            <div className=' bg-white w-11/12 mx-auto  lg:w-10/12 shadow-2xl  '>

                <div className=' grid lg:grid-cols-2  gap-4 py-24'>
                    {
                        users.map(users =>

                           <HomeCard
                           users={users}
                           refetch={refetch}
                           ></HomeCard>
                        )
                    }
                </div>

            </div>

           
        </div>
    );
};

export default Home;