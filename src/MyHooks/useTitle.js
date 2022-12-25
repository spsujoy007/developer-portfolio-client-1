import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - SUJOY PAUL`
    }, [title])
};

export default useTitle;