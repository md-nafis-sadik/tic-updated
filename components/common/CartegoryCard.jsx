import Link from "next/link";
import Image from "next/image";

const FALLBACK_IMAGE = "/images/fallback-image.png";
function CartegoryCard({ title, link, img }) {
  return (
    <div className="bg-white rounded-md shadow-standard  hover:shadow-lg overflow-hidden">
      <div className="relative h-60">
        <Image src={img ? img : FALLBACK_IMAGE} fill alt="card image" />
      </div>

      <div className="p-6">
        <Link
          href="blog-detail.html"
          className="text-2xl font-semibold text-gray-700 hover:text-orange-600 dark:hover:text-orange-600 transition-all duration-500 ease-in-out"
        >
          {title}
        </Link>

        <div className="mt-5">
          <button className="btn bg-orange-500 text-white rounded-md ">
            <Link href={link}>Check our work</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartegoryCard;
