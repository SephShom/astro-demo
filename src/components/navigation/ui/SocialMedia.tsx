import {BsLinkedin, BsTwitterX, BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs'

export default function SocialMedia() {
  return(
    <div className='text-color-200 flex gap-3'>
      <a href={''}>
        <BsLinkedin size={30}></BsLinkedin>
      </a>
      <a href={''}>
        <BsTwitterX size={30}></BsTwitterX>
      </a>
      <a href={''}>
        <BsFacebook size={30}></BsFacebook>
      </a>
      <a href={''}>
        <BsInstagram size={30}></BsInstagram>
      </a>
      <a href={''}>
        <BsYoutube size={30}></BsYoutube>
      </a>
    </div>
  )
}