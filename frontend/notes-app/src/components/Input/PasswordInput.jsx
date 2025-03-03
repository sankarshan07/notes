import React,{useState} from 'react'

const PasswordInput = ({value, onChange, placeholder}) => {

const [isShowPassword, setIsShowPassword] = useState(false);
const toggleShoWPassword = () => {
  setIsShowPassword(!isShowPassword);
}
  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3 outline-0'>
      Password input
    </div>
  )
}

export default PasswordInput;
   

