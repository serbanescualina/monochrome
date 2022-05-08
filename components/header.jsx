export default function Header(){
  return (
    <header className="header">
      <section className="header-top container">
      <section className="header-social-media d-none d-lg-flex">
        <ul className="d-flex">
          <li>
            <a
              href=""
              title="Youtube"
              target="_blank"
              rel="noopener noreferre"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>

          <li>
            <a
              href=""
              title="Twitter"
              target="_blank"
              rel="noopener noreferre"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>

          <li>
            <a
              href=""
              title="Facebook"
              target="_blank"
              rel="noopener noreferre"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>

          <li>
            <a
              href=""
              title="Instagram"
              target="_blank"
              rel="noopener noreferre"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>

          <li>
            <a
              href="tel:+44 (0)10 2345 6789"
              title="Call us"
            >CALL US +44 (0)10 2345 6789</a>
          </li>
        </ul>
      </section>
        <section className="header-site-controls">
        <ul>
          <li className="header-logo d-lg-none">
            <a href="https://nbc.com" title="logo">
              monochrome
            </a>
          </li>
          <li className="header-search">
            <form className='d-flex' action="/">
              <button
                type="submit"
                title="Search"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <input
                type="text"
                placeholder="search"
              ></input>
            </form>
          </li>

         <ul className="d-flex">
         <li>
            <a
              href=""
              title="My account"
            >
              <i className="fa-solid fa-user"></i>
            </a>
          </li>

          <li>
            <a
              href=""
              title="Favorites"
            >
              <i className="fa-solid fa-heart"></i>
            </a>
          </li>

          <li>
            <a
              href=""
              title="Cart"
            >
              <i className="fa-solid fa-bag-shopping"></i>
            </a>
          </li>
         </ul>
        </ul>
      </section>
      </section>

      <section className="header-bottom">
        <div className="wrp-header-bottom container">
        <ul className="d-flex">
        <li className="d-lg-none"><a href="" title="Menu"><i className="fa-solid fa-bars"></i></a></li>
            <li className="d-none d-lg-block">
              <a
                href=""
                title="New Arrivals"
              >new arrivals</a>
            </li>

            <li className="d-none d-lg-block">
              <a
                href=""
                title="Brands"
              >Brands</a>
            </li>

            <li className="d-none d-lg-block">
              <a
                href=""
                title="Men's"
              >{'Men\'s'}</a>
            </li>

            <li className="d-none d-lg-block">
              <a
                href=""
                title="Women's"
              >{'Women\'s'}</a>
            </li>

            <li className="d-none d-lg-block">
              <a
                href=""
                title="Accessories"
              >Accessories</a>
            </li>

            <li className="d-none d-lg-block">
              <a
                href=""
                title="Lookbook"
              >Lookbook</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="header-mobile-banner d-lg-none">
        <div>
          <img src="./images/banners/banner-mobile.png" alt="Banner" className="banner" />
          <button className="new-in btn">New in</button>
        </div>
      </section>

     </header>
  )
}
