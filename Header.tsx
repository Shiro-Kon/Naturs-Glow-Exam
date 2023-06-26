import "./Header.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="header-section">
        <div className="header-item header-logo animated-header">
          <img className="logo" src="./image/natural2.svg" alt="fake-logo" />
          <span className="logo-text">Nature's Glow</span>
        </div>
      </div>
      <div className="header-section">
        <div className="header-item header-button animated-header">
          <a href="#">Home</a>
        </div>
        <div className="header-item header-button animated-header">
          <a href="#">Products</a>
        </div>
        <div className="header-item header-button animated-header">
          <a href="#">Blog</a>
        </div>
        <div className="header-item header-button animated-header">
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="header-section">
        <div className="header-item header-search">
          <input
            className="search animated-header"
            type="search"
            placeholder="Search"
            id="search"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
