import { Link } from "react-router";

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <img
                    src="/logo/cube.svg" 
                    alt="Home" 
                    title="Home"
                    className="h-32 w-auto"/>
            </Link>
        </div>  
    );
}
export default Logo