import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/contact">お問い合わせ</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
};
