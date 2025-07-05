import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    TextInput,
    Button,
} from 'flowbite-react';

import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

function Header() {
    const path = useLocation().pathname;
    
    return (
        <Navbar color="none" className="border-b-2 p-4 bg-red-500">
            <NavbarBrand as={Link} to="/">
                <span className="self-center text-white font-bold text-xl md:text-2xl bg-[#7C9CA2] rounded-lg p-2">
                    Belviva
                </span>
            </NavbarBrand>

            <form className="hidden lg:block">
                <TextInput
                    type="text"
                    placeholder="Search"
                    icon={AiOutlineSearch}
                />
            </form>

            <Button color="none" className="bg-[#7C9CA2] text-white rounded-lg">
                <AiOutlineSearch className="w-12 h-6" />
            </Button>

            <div className="flex gap-2 md:order-2">
                <Button color="none" className="hidden md:block bg-[#7C9CA2] text-white rounded-lg">
                    <FaMoon className="m-auto" />
                </Button>
                <Link to="/sign-in">
                    <Button color="none" className="bg-[#7C9CA2] text-white rounded-lg hover:scale-105 ease-in-out cursor-pointer duration-200">
                        Sign In
                    </Button>
                </Link>
                <NavbarToggle/>
            </div>
            <NavbarCollapse>
                <NavbarLink active={path === "/"} as={Link} to="/" className=''>Home</NavbarLink>
                <NavbarLink active={path === "/about"} as={Link} to="/about" className=''>About</NavbarLink>
                <NavbarLink active={path === "/projects"} as={Link} to="/projects" className=''>Projects</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}

export default Header;
