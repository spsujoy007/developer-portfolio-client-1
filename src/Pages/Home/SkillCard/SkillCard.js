import React from 'react';

const SkillCard = ({skill}) => {
    const {img, title} = skill;
    return (
        <div className='pl-4 pr-10 py-4 bg-base-100 rounded-xl shadow-lg text-center flex items-center justify-start'>
            <div>
                <img className='rounded-xl px-5 w-20' src={img} alt={title} />
            </div>
            <div>
                <h2 className='text-xl text-black'>{title}</h2>
            </div>
        </div>
    );
};

export default SkillCard;