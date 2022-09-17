import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>

        <a href='https://github.com/NexCodeJimM' target='_blank'>
          <div>
              <BsGithub />
          </div>
        </a>

        <a href='https://www.linkedin.com/in/ronjimuelmendoza/' target='_blank'>
          <div>
              <BsLinkedin />
          </div>
        </a>
    </div>
  )
}

export default SocialMedia