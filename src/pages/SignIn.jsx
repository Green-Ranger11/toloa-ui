import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import baseUrl from '../data/baseUrl';

const initState = {
  username: '',
  password: ''
}

function SignIn() {
  const [formData, setFormData] = React.useState(initState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if(username === '' || password === ''){
      toast.error('Please fill in all fields');
      return;
    }
    try{
      const response = await axios.post( baseUrl + '/user/auth/login', {
        username,
        password
      });
      if(response.status === 200 || response.status === 201){
        setFormData(initState);
        window.location.href = '/feed?auth=signIn';
      }else{
        throw new Error();
      }
    }catch(error){
      toast.error('Invalid username or password');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
                <h1 className="h1">Welcome back. We exist to make collaboration between CSOs easier.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <label className="block mb-1 text-sm font-medium text-gray-800" htmlFor="username">Username</label>
                      <input id="username" type="text" name="username" className="w-full text-gray-800 form-input" placeholder="Enter your username" onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block mb-1 text-sm font-medium text-gray-800" htmlFor="password">Password</label>
                        <Link to="reset-password" className="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</Link>
                      </div>
                      <input id="password" type="password" name="password" className="w-full text-gray-800 form-input" placeholder="Enter your password" onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="ml-2 text-gray-600">Keep me signed in</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6 -mx-3">
                    <div className="w-full px-3">
                      <button className="w-full text-white bg-blue-600 btn hover:bg-blue-700" onClick={handleSubmit}>Sign in</button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="flex-grow mr-3 border-t border-gray-300" aria-hidden="true"></div>
                  <div className="italic text-gray-600">Or</div>
                  <div className="flex-grow ml-3 border-t border-gray-300" aria-hidden="true"></div>
                </div>
                <form>
                  <div className="flex flex-wrap mb-3 -mx-3">
                    <div className="w-full px-3">
                      <button className="relative flex items-center w-full px-0 text-white bg-gray-900 btn hover:bg-gray-800">
                        <svg className="flex-shrink-0 w-4 h-4 mx-4 text-white opacity-75 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Continue with GitHub</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="relative flex items-center w-full px-0 text-white bg-red-600 btn hover:bg-red-700">
                        <svg className="flex-shrink-0 w-4 h-4 mx-4 text-white opacity-75 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Continue with Google</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-6 text-center text-gray-600">
                  Don’t you have an account? <Link to="/signup" className="text-blue-600 transition duration-150 ease-in-out hover:underline">Sign up</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </>
  );
}

export default SignIn;