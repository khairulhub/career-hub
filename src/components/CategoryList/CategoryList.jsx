import React from 'react';

import accounts from '../../assets/icons/accounts.png';
import engineering from '../../assets/icons/chip.png';
import creative from '../../assets/icons/creative.png';
import marketing from '../../assets/icons/marketing.png';

const CategoryList = () => {
    return (
        <div>
            <h1 className='mt-10 text-5xl font-bold text-center'>Job Category List</h1>
            <p className='mt-4 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='container grid gap-4 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-4'> 
                <div className='p-5 bg-gray-200 rounded-lg'>
                    <img src={accounts} alt='developer' className='w-16 h-16 ' />
                    <h1 className='mt-4 text-xl font-bold'>Account & Finance</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className='p-5 bg-gray-200 rounded-lg'>
                    <img src={creative} alt='developer' className='w-16 h-16 ' />
                    <h1 className='mt-4 text-xl font-bold'>Creative Design</h1>
                    <p>100+ Jobs Available</p>
                </div>
                <div className='p-5 bg-gray-200 rounded-lg'>
                    <img src={marketing} alt='developer' className='w-16 h-16 ' />
                    <h1 className='mt-4 text-xl font-bold'>Marketing & Sales</h1>
                    <p>150 Jobs Available</p>
                </div>
                <div className='p-5 bg-gray-200 rounded-lg'>
                    <img src={engineering} alt='developer' className='w-16 h-16 ' />
                    <h1 className='mt-4 text-xl font-bold'>Engineering Job</h1>
                    <p>240 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;