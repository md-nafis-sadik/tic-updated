import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="footer-section-wrapper bg-bg_dipdark w-full relative pb-[90px]">
        <div className="fs-shape">
          <Image
            src="/images/03.png"
            width={400}
            height={400}
            alt="Image Not Found"
          />
          <Image
            src="/images/04.png"
            alt="Image Not Found"
            width={400}
            height={400}
            className="absolute bottom-0 right-0 z-0"
          />
        </div>
        <div className="footer-newsletter w-full items-center justify-center pb-[30px]">
          <div className="container w-11/12 mx-auto">
            <div className="footer-newsletter-wrapper flex max-1199px:flex-col justify-between border-b border-customGrayDark pb-[120px]">
              <div className="footer-newsletter-text min-1200px:w-[50%] min-1200px:absolute top-[74px]">
                <div className="footer-newsletter-text-wrapper w-[70%] mx-auto max-1199px:pb-[50px]">
                  <h3 className="text-25px font-bold text-white text-center">
                    Want Us To Email You About Special Offers And Updates?
                  </h3>
                </div>
              </div>
              <div className="footer-newsletter-form min-1200px:w-[50%] flex items-center justify-center min-1200px:absolute min-1200px:top-[60px] min-1200px:right-0">
                <form action="/" className="align-middle w-[80%]">
                  <div className="nfs bg-bg_white outline-none text-xl w-full flex justify-between px-[5px] py-[6px] max-575px:relative">
                    <div>
                      <i className="fa-regular fa-paper-plane text-bg_green p-[2px] text-base"></i>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="outline-none pt-10px pr-0px pb-10px pl-5px text-base"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-bg_green text-white font-bold px-[10px] py-[0px] max-575px:py-[8px] max-575px:absolute max-575px:top-[80px] max-575px:right-[30%] max-575px:mr-[-25px]"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-top z-10">
            <div className="footer-top-items flex w-11/12 mx-auto flex-wrap">
              <div className="footer-top-wrapper-items min-w-1/4% z-10 max-991px:min-w-[300px] mt-[20px]">
                <div>
                  <h4 className="relative text-white after:content-[''] after:block after:w-[50px] after:h-[2px] after:bg-green-500 after:absolute after:left-0 after:bottom-[-10px] font-bold text-2xl leading-c-1.3">
                    Site Map
                  </h4>
                </div>
                <ul className="mt-[10px]">
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Documentation
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Feedback
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Plugins
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Support Forums
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Themes
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer-top-wrapper-items min-w-1/4% z-10 max-991px:min-w-[300px] mt-[20px]">
                <div>
                  <h4 className="relative text-white after:content-[''] after:block after:w-[50px] after:h-[2px] after:bg-green-500 after:absolute after:left-0 after:bottom-[-10px] font-bold text-2xl leading-c-1.3">
                    Useful Links
                  </h4>
                </div>
                <ul className="mt-[10px]">
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      About Us
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Contact Us
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-top-wrapper-items min-w-1/4% z-10 max-991px:min-w-[300px] mt-[20px]">
                <div>
                  <h4 className="relative text-white after:content-[''] after:block after:w-[50px] after:h-[2px] after:bg-green-500 after:absolute after:left-0 after:bottom-[-10px] font-bold text-2xl leading-c-1.3">
                    Social Contact
                  </h4>
                </div>
                <ul className="mt-[10px]">
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Facebook
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Twitter
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Instagram
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      YouTube
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Linkedin
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-top-wrapper-items min-w-1/4% z-10 max-991px:min-w-[300px] mt-[20px]">
                <div>
                  <h4 className="relative text-white after:content-[''] after:block after:w-[50px] after:h-[2px] after:bg-green-500 after:absolute after:left-0 after:bottom-[-10px] font-bold text-2xl leading-c-1.3">
                    Our Support
                  </h4>
                </div>
                <ul className="mt-[10px]">
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Paid with Mollie
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Status
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Changelog
                    </Link>
                  </li>
                  <li className="px-0 py-2">
                    <Link href="#" className="text-white text-[16px] px-0 py-2">
                      Contact Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="footer-bottom w-full">
        <div className="footer-bottom-wrapper w-[80%] mx-auto px-0 py-[30px]">
          <p className="text-center text-[20px] text-customGrayDark">
            © 2024
            <Link
              href="/"
              className="font-semibold text-midDark hover:text-customOrg transition-all duration-300 ease p-[5px]"
            >
              All Rights Reserved
            </Link>
            Designed by
            <Link
              href="/"
              className="font-semibold text-midDark hover:text-customOrg transition-all duration-300 ease p-[5px]"
            >
              Tech IT Center
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
