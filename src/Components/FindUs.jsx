import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100 space-y-2">
            <button className="btn join-item justify-start">
                <FaFacebook /> Facebook
            </button>
            <button className="btn join-item justify-start">
                <FaInstagram /> Instagram
            </button>
            <button className="btn join-item justify-start">
            <FaXTwitter /> Twitter
            </button>
            
            </div>
        </div>
    );
};

export default FindUs;