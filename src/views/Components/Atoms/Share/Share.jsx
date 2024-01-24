import React, { useState } from 'react';
import { IoShareSocialSharp } from 'react-icons/io'
import { AiOutlineMail, AiOutlineWhatsApp ,AiOutlineTwitter} from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import { FaPinterestP,FaFacebookF } from 'react-icons/fa'


const Share = () => {
    const [show, setShow] = useState(false)
    return (
        <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className='flex gap-2 items-center'>

            <IoShareSocialSharp />
            <span>Share</span>

            {show && <div className='flex items-center gap-2'>

                <FaFacebookF />
                <AiOutlineTwitter />
                <FaPinterestP />
                <GrLinkedinOption />
                <AiOutlineMail />
                <AiOutlineWhatsApp />
            </div>}
        </div>
    );
};

export default Share;