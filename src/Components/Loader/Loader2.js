import React from 'react';
import './Loader.css'

const Loader2 = () => {
    return (
        <div>
            {/* <!-- SPINNING SQUARES --> */}
            <div class="spinner-box">
            <div class="configure-border-1">  
                <div class="configure-core"></div>
            </div>  
            <div class="configure-border-2">
                <div class="configure-core"></div>
            </div> 
            </div>
        </div>
    );
};

export default Loader2;