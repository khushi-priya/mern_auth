import {Link,useNavigate} from 'react-router-dom';
import { useState, } from 'react';

export default function SignIn() {
  const [formData,setFormData]=useState({});
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value});

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();//prvent from refreshing the page
    try{
      setLoading(true);
      setError(false);
      const res=await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data = await res.json();
      
      setLoading(false);
      if(data.success===false){
        setError(true);
        return;
      }
      navigate('/')
    }catch(error){
        setLoading(false);
        setError(true);
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
        <Link to='/sign-Up'>
          <span className='text-blue-600'>Sign Up</span>
        </Link>
        
      </div>
      <p className='text-red-700 mt-5'>{error && 'something went wrong!'}</p>
    </div>
    
  )
}

