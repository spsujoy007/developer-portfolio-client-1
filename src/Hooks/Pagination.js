import React from 'react';

const Pagination = ({onPage, datas, stateMent}) => {
    
    const {setFirstPage, setLastPage, firstPage, lastPage}  = stateMent;

    const pages = [];
    const numofpage = Math.ceil(datas / onPage);
    for(let i = 0; i < numofpage; i++ )
    {
        pages.push({num: i+1})
    }

    return (
        <div>
            {/* pagination start //////////////////////////////////////////////////////// */}
            <div className='flex justify-center'>
            
            <div className='flex items-center mt-5 gap-2'>
                <button onClick={() => {
                        if(lastPage >onPage){
                            setFirstPage(firstPage-onPage)
                            setLastPage(lastPage-onPage)
                        }
                }} className='rounded-md border-2 bg-[#3e825e] border-[#2E4A3B] text-white py-2 px-4 '>Previous</button>

                <div className='flex gap-1 '>
                {
                    pages.map(({num}) => <button
                        onClick={() => {
                            setFirstPage(num*onPage - onPage)
                            setLastPage(onPage*num)
                        }}
                        key={num} 
                        className={`${firstPage/onPage+1 === num ? 'bg-[#181818] border-black':'bg-[#3e825e] border-[#2E4A3B]'} rounded-md border-2  text-white py-2 px-4`}
                     >
                        {num}
                     </button>)
                }
                </div>

                <button onClick={() => {
                        if(firstPage < pages.length-onPage){
                            setFirstPage(firstPage+onPage)
                            setLastPage(lastPage+onPage)
                        }
                }} className='rounded-md border-2 bg-[#3e825e] border-[#2E4A3B] text-white py-2 px-4 '>Next</button>
            </div>
            </div>
            {/* pagination end ////////////////////////////////////////////////////////// */}
        </div>
    );
};

export default Pagination;