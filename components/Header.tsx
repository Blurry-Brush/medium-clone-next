import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex space-x-5 items-center">
            <Link href="/">
                 <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="" />
            </Link>

            <div className="hidden md:inline-flex items-center space-x-5">
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className="bg-green-600 text-white px-4 py-1 rounded-full">Follow</h3>
            </div>
        </div>

        <div className="flex text-green-600 items-center space-x-5">
            <h3>Sign In</h3>
            <h3 className="border px-4 py-1 border-green-600 rounded-full">Get Started</h3> 
        </div>
    </header>
  )
}

export default Header