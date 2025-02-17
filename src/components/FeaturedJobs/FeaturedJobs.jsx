import React, { useEffect, useState } from 'react';

import FeaturedJob from '../featuredJob/FeaturedJob';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    // TODO: Fetch featured jobs data from an API and display them here
    const api = './jobs.json';
    useEffect(()=>{
        fetch(api)
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    }, []);
    return (
        <div className='container mx-auto'>
            <h3 className='mt-12 text-5xl font-bold text-center'>Featured Jobs</h3>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            
            <div className='grid grid-cols-1 gap-4 mt-6 mb-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    featuredJobs.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            
        </div>
    );
};

export default FeaturedJobs;