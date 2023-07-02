import React from 'react';
import ContainItem from '../../../../Components/Container/ContainItem';
import CommonHeading from '../../../../Components/CommonHeading/CommonHeading';
import img1 from '../../../../assets/graphicsimg/vr logo.jpg'
import img2 from '../../../../assets/graphicsimg/facebook-add.gif'
import img3 from '../../../../assets/graphicsimg/Free_Business_Cards_Mockup_4.jpg'
import img4 from '../../../../assets/graphicsimg/GGGA.gif'
import img5 from '../../../../assets/graphicsimg/Movie poster design2.jpg'
import img6 from '../../../../assets/graphicsimg/Ocean logo.jpg'
import img8 from '../../../../assets/graphicsimg/sp logo 4.jpg'
import img9 from '../../../../assets/graphicsimg/SPLOGOYTUBE.jpg'

const GraphicSkill = () => {

	const images = [
		{image: img1},
		{image: img2},
		{image: img3},
		{image: img4},
		{image: img5},
		{image: img6},
		{image: img8},
		{image: img9},
	]

    return (
        <div className=''>
            <ContainItem>
			<CommonHeading>Other Skills</CommonHeading>
            <p className=' text-gray-200 text-center'>Graphic design logos and other</p>
            <section className="py-6">
	<div className="container flex flex-col justify-center p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			{
				images.map((img, i) => <div
					key={i}
				>
					<img alt='images' loading='lazy' className='object-cover w-full dark:bg-gray-500 aspect-square' src={img.image} />
				</div>)
			}
			{/* <img alt='images' className="" src={img1} />
			<img alt='images' className="object-cover w-full dark:bg-gray-500 aspect-square" src={img2} />
			<img alt='images' className="object-cover w-full dark:bg-gray-500 aspect-square" src={img3} />
			<img alt='images' className="object-cover w-full dark:bg-gray-500 aspect-square" src={img4} />
			<img alt='images' className="object-cover w-full dark:bg-gray-500 aspect-square" src={img5} />
			<img alt='images' className="object-cover w-full dark:bg-gray-500 aspect-square" src={img6} />
			<img alt='images' className="object-cover w-full dark:bg-gray-500 aspect-square" src={img8} />
			<img alt='images' className="object-cover w-full dark:bg-gray-500 aspect-square" src={img9} /> */}
		</div>
	</div>
</section>
			</ContainItem>
        </div>
    );
};

export default GraphicSkill;