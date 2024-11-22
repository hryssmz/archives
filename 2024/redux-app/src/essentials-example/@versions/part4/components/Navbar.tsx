// essential-example/components/Navbar.tsx
import { Link } from "react-router-dom";

export interface NavBarProps {}

export default function Navbar() {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
          </div>
        </div>
      </section>
    </nav>
  );
}
