import React from 'react';
import ContainItem from '../../../../Components/Container/ContainItem';
import CommonHeading from '../../../../Components/CommonHeading/CommonHeading';
import img1 from '../../../../assets/graphicsimg/vr logo.jpg'
import img2 from '../../../../assets/graphicsimg/n43.jpg'
import img3 from '../../../../assets/graphicsimg/functionofheart.jpg'
import img4 from '../../../../assets/graphicsimg/Free_Business_Cards_Mockup_4.jpg'
import img5 from '../../../../assets/graphicsimg/Movie poster design2.jpg'
import img6 from '../../../../assets/graphicsimg/programcover.jpg'
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
        {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2"> */}
        <div className="flex flex-wrap gap-5 justify-center">
			{
				images.map((img, i) => <div
					key={i}
					className='flex justify-center w-[200px] overflow-hidden'
				>
					<img alt='images' loading='lazy' className='object-cover  dark:bg-gray-500 aspect-square' src={img.image} />
				</div>)
			}
		</div>
	</div>
</section>
			</ContainItem>
        </div>
    );
};

export default GraphicSkill;