import {Link} from 'react-router-dom';

export default function SignUp() {
  
  return (
    
    <div className="p-3 max-w-lg mx-auto bg-black mt-12">
      
      <h1 className="text-3xl text-center font-semibolded my-7 text-white ">Sign Up</h1>
      
      <form className='flex flex-col gap-4'>

        <input type="text" placeholder="username" id='username' 
        className='bg-gray-300 p-3 rounded-lg' />
        
        <input type="email" placeholder="email" id='email' 
        className='bg-gray-300 p-3 rounded-lg' />

        <input type="password" placeholder="password" id='password' 
        className='bg-gray-300 p-3 rounded-lg' />

        <button className='bg-slate-700 p-3 disabled:opacity-80 hover:opacity-95 
        uppercase rounded-lg text-red-500'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-white'>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-600'>Sign in</span>
        </Link>
        
      </div>
    </div>
    
  )
}

