export default function Footer(){
  return <footer className="footer">
  <div className="wrap-footer-container container-lg container-monochrome d-flex d-lg-grid flex-column-reverse flex-lg-column justify-content-center align-items-center">
  <section className="wrap-footer text-center text-lg-start p-lg-0">
    <header className="mobile-header-nav d-lg-none">
      <h1>How can we help?</h1>
    </header>
    <section className="footer-contact d-none d-lg-block">
      <ul>
        <li>
          <a href="tel:+44 (0)10 2345 6789"> <span className="d-lg-block">call us</span> +44 (0)10 2345 6789</a>
        </li>
        <li>
          email custom care
        </li>

        <li>
          <a
            href=""
            title="email custom care"
          >
            see mobile version</a>
        </li>
      </ul>
    </section>

    <section className="footer-nav mt-3 mb-2 mt-lg-0 footer-nav-primary">
      <ul>
          <li>
            <a
              href=""
              title="style & fit advice"
            >style & fit <span className="d-none d-lg-inline-block">advice</span></a>
          </li>

          <li>
            <a
              href=""
              title="faqs"
            >faqs</a>
          </li>

          <li>
            <a
              href=""
              title="delivery"
            >delivery</a>
          </li>

          <li>
            <a
              href=""
              title="exanges & returns"
            ><span className="d-none d-lg-inline-block">exanges &</span> returns</a>
          </li>
      </ul>
    </section>

    <section className="footer-nav mt-3 mb-2 mt-lg-0 footer-nav-secondary">
    <ul>
          <li>
            <a
              href=""
              title="about us"
            >about us</a>
          </li>

          <li>
            <a
              href=""
              title="careers"
            >careers</a>
          </li>

          <li>
            <a
              href=""
              title="affiliates"
            >affiliates</a>
          </li>

          <li>
            <a
              href=""
              title="advertising"
            >advertising</a>
          </li>
        </ul>
    </section>
    <footer className="mobile-footer-nav d-lg-none mt-4">
      <a href="" className="d-block d-lg-none">terms & conditions</a>
      <a href="" className="d-block d-lg-none">privacy & cookies</a>
    </footer>

  </section>

    <section className="footer-connect d-flex flex-column justify-content-center align-items-center text-center p-lg-0 text-lg-start">
      <section className="footer-newsletter ">
        <ul className="">
          <li>
            <span className="d-none d-lg-block">sing up for our newsletter</span>
            <section className="header-form d-lg-none">
              <header>
                <h2>Lets connect</h2>
              </header>

              <section className="desktop-form-text mb-1">
                <span>Be the first to recive exclusives offers</span>
              </section>

            </section>
          </li>

          <li>
            <form action="/" className="d-flex flex-column justify-content-center align-items-center align-items-lg-start">
              <input type="email"></input>
              <button className="mt-3" type="submit">Submit</button>
            </form>
          </li>

          <li>
            <section className="mt-4 mb-3 d-lg-none">
              <span className="text-center">I agrre with <a href="">Privacy Policy</a> and i want to recieve emails from Monochrome</span>
            </section>
          </li>
        </ul>
      </section>

      <section className="footer-social mt-4">
            <ul className="d-flex justify-content-evenly justify-content-lg-start">
              <li className="me-lg-3">
                <a
                  href=""
                  title="Youtube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li className="me-lg-3">
                <a
                  href=""
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li className="me-lg-3">
                <a
                  href=""
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li className="me-lg-3">
                <a
                  href=""
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
      </section>
    </section>
  </div>
  </footer>
}
