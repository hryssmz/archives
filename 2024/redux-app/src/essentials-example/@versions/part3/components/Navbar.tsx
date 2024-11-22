// essential-example/components/Navbar.tsx
export interface NavBarProps {}

export default function Navbar() {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>
        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </section>
    </nav>
  );
}
