import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TopPostCard from './TopPostCard';

const SecSection = () => {
    const {data:posts = [], } = useQuery({
        queryKey: ['post'],
        queryFn: () => fetch("http://localhost:5000/posts")
        .then((res) => res.json())
      })
    return (
        <div className='mt-10'>
            <h1 className='text-5xl font-semibold'>Top Posted:</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
                {
                    posts.sort((a, b) => b.like >  a.like ? 1 : -1).slice(0, 3).map( post => <TopPostCard
                    key={post._id}
                    post={post}
                    ></TopPostCard>)
                }
            </div>
        </div>
    );
};

export default SecSection;