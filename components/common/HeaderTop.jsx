import Link from "next/link";
function HeaderTop() {
  return (
    <div className="w-full border border-customGray max-991px:border-none">
      <div
        id="header-top-nav"
        className="header-top-nav-controller max-991px:w-full min-992px:mx-auto min-992px:my-0 flex justify-between max-991px:flex-col max-991px:bg-dipOrg max-991px:hidden"
      >
        <ul className="flex list-none px-25 pb-0 max-991px:mx-auto max-991px:my-0 max-767px:flex-col max-767px:mx-auto max-767px:my-0">
          <li className="flex items-center px-25 py-15 border-r border-customGray max-1199px:px-5px">
            <Link
              href="#"
              className="max-1238px:text-13px max-767px:m-auto max-767px:justify-center max-767px:items-center"
            >
              <i className="fa-solid fa-phone mr-1.5 text-customGrayDark max-991px:text-white"></i>
              <span className="text-customGrayDark max-991px:text-white">
                +88 01722-952895
              </span>
            </Link>
          </li>
          <li className="flex items-center pl-2.5 max-1238px:text-13px">
            <i className="fa-solid fa-location-dot mr-1.5 text-customGrayDark max-991px:text-white"></i>
            <span className="text-customGrayDark max-991px:text-white">
              AH.Tower (5th Floor), Alokar More, Ghoramara, Boalia, Rajshahi
            </span>
          </li>
        </ul>

        <ul className="flex list-none px-25 pb-0 items-center max-991px:mx-auto max-991px:my-0">
          <li className="pr-1.5 max-1199px:text-13px">
            <p className="text-customGrayDark max-991px:text-white">
              Find us on :
            </p>
          </li>
          <li className="p-2 items-center px-25 py-15 border-r border-customGray max-1199px:text-13px max-1199px:px-10px">
            <Link href="#">
              <i className="fa-brands fa-facebook-messenger text-customOrg max-991px:text-white"></i>
            </Link>
          </li>
          <li className="p-2 items-center pr-6 pl-4 py-15 border-r border-customGray max-1199px:text-13px max-1199px:px-10px">
            <Link href="#">
              <i className="fa-brands fa-twitter text-customOrg max-991px:text-white"></i>
            </Link>
          </li>
          <li className="p-2 items-center pr-6 pl-4 py-15 border-r border-customGray max-1199px:text-13px max-1199px:px-10px">
            <Link href="#">
              <i className="fa-brands fa-instagram text-customOrg max-991px:text-white"></i>
            </Link>
          </li>
          <li className="p-2 items-center pr-6 pl-4 py-15 border-r border-customGray max-1199px:text-13px max-1199px:px-10px">
            <Link href="#">
              <i className="fa-brands fa-youtube text-customOrg max-991px:text-white"></i>
            </Link>
          </li>
          <li className="p-2 items-center pr-6 pl-4 py-15 max-1199px:text-13px max-1199px:px-10px">
            <Link href="#">
              <i className="fa-brands fa-linkedin text-customOrg max-991px:text-white"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;
