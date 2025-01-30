import {Link,useNavigate} from 'react-router-dom';
import { useState, } from 'react';
import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice';
import {useDispatch,useSelector} from 'react-redux';

export default function SignIn() {
  const [formData,setFormData]=useState({});

  const {loading,error}=useSelector((state)=>state.user);
  const navigate=useNavigate();
  const dispatch = useDispatch();

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();//prvent from refreshing the page
    try{
      dispatch(signInStart());
      const res=await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data = await res.json();
      
      if(data.success===false){
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/')
    }catch(error){
        dispatch(signInFailure(error));
    }
  };
  return (
  
    <div className="p-3 max-w-lg mx-auto bg-black mt-12">
      
      <h1 className="text-3xl text-center 
      font-semibolded my-7 text-white ">Sign In</h1>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

       
        
        <input type="email" placeholder="email" id='email' 
        className='bg-gray-300 p-3 rounded-lg' 
        onChange={handleChange}
        />

        <input type="password" placeholder="password" id='password' 
        className='bg-gray-300 p-3 rounded-lg' 
        onChange={handleChange}
        />

        <button disabled={loading} className='bg-slate-700 p-3 disabled:opacity-80 hover:opacity-95 
        uppercase rounded-lg text-red-500'>
          {loading ? 'Loading...':'Sign In'}
        
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-white'>Dont Have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-600'>Sign up</span>
        </Link>
        
      </div>
      <p className='text-red-700 mt-5'>{error ? error.message || 'something went wrong!':''}</p>
    </div>
    
  )
}

