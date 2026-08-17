import Navbar from "../components/navBar";
function Home() {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="p-10">
            <Navbar />
            <h1 className="text-3xl font-bold">
                welcome {user ? user.name : "Guest"} to Food Delivery App

            </h1>
        </div>
    );
}
export default Home;