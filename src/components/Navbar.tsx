import { Link } from "@tanstack/react-router";
import { LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="brand">
            <div className="mark">
                <div className="glyph" />
            </div>
            <Link to="/">
                <span>Our Skills</span>
            </Link>
        </div>

        <div className="action">
            <Link to="/sign-in/$" className="btn-primary">
                <LogIn size="16" />
                Sign In
            </Link>
        </div>
    </nav>
  )
}
