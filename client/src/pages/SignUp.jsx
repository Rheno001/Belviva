import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({});

  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields');

    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });



      const data = await res.json();

      if (data.success === false) {
        return errorMessage('data.message');
      }

      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    } catch (error) {

      setErrorMessage(error.message);
      setLoading(false);

    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold text-center ">Create an Account</h1>

          <div>
            <p>Your Username</p>
            <Label value='Your username' htmlFor="username" />
            <TextInput
              type="text"
              placeholder="username"
              id="username"
              color="none"
              className="bg-white text-gray-700"
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Your Email</p>
            <Label value='Your Email' htmlFor="email" />
            <TextInput
              type="email"
              placeholder="johndoe@gmail.com"
              id="email"
              color="none"
              className="bg-white text-gray-700"
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Your Password</p>
            <Label value='Your Password' htmlFor="password" />
            <div className="relative">
              <TextInput
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                id="password"
                color="none"
                className="bg-white text-gray-700 pr-10"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>

          <Button color="none" type="submit" disabled={loading} className="bg-[#7C9CA2] text-white rounded-lg hover:scale-105 ease-in-out cursor-pointer duration-200">
            {
              loading ? (
                <>
                <Spinner size="sm"/>
                <span className="pl-3">Loading...</span>
              </>) : 'Sign Up'
            }
          </Button>
        </form>

        <div className="flex gap-2 text-sm mt-5 justify-center">
          <span>Have an account?</span>
          <Link to='/sign-in' className="text-[#7C9CA2] hover:underline">Sign In</Link>
        </div>
        <div>
          {typeof errorMessage === 'string'
            && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )

          }
        </div>

      </div>
    </div>
  );
}

export default SignUp;

