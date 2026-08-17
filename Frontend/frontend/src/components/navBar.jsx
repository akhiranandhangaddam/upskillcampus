function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 text-white">
            <h1 className="text-xl font-bold">Food Delivery App</h1>
            <button className="ml-auto bg-blue-700 px-3 py-1 rounded">Home</button>
            <button className="ml-auto bg-blue-700 px-3 py-1 rounded">Register</button>
            <button className="ml-auto bg-blue-700 px-3 py-1 rounded">Login</button>
            <button className="ml-auto bg-blue-700 px-3 py-1 rounded">Logout</button>
            <button className="ml-auto bg-blue-700 px-3 py-1 rounded">Profile</button>
        </nav>
    );
}
export default Navbar;