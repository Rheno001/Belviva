import { Label, TextInput, Button } from "flowbite-react";
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <form className="flex flex-col gap-4">
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
            />
          </div>

          <div>
            <p>Your Email</p>
            <Label value='Your Email' htmlFor="email" />
            <TextInput
              type="text"
              placeholder="johndoe@gmail.com"
              id="email"
              color="none"
              className="bg-white text-gray-700"
            />
          </div>

          <div>
            <p>Your Password</p>
            <Label value='Your Password' htmlFor="password" />
            <TextInput
              type="text"
              placeholder="Password"
              id="password"
              color="none"
              className="bg-white text-gray-700"
            />
          </div>

          <Button color="none" type="submit" className="bg-[#7C9CA2] text-white rounded-lg">
            Sign Up
          </Button>
        </form>

        <div className="flex gap-2 text-sm mt-5 justify-center">
          <span>Have an account?</span>
          <Link to='/sign-in' className="text-[#7C9CA2] hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
