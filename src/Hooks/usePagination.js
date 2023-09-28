import  { useState } from 'react';

export const  usePagination = (dataInOnePage, totalDatas) => {
    

    const pages = [];
    const numofpage = Math.ceil(totalDatas / dataInOnePage);
    // console.log(numofpage)
    for(let i = 0; i < numofpage; i++ )
    {
        pages.push({num: i+1})
    }

    const zip = { pages, dataInOnePage, totalDatas}

    return zip
};