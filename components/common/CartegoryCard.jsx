import Link from "next/link";
import Image from "next/image";

function CartegoryCard({ title, link, img }) {
  return (
    <div className="card bg-white relative rounded-md shadow shadow-standart  hover:shadow-lg overflow-hidden">
      <Image src={img} width={300} height={200} alt="card image" />

      <div className="p-6">
        <Link
          href="blog-detail.html"
          className="text-2xl font-semibold text-gray-700 hover:text-orange-600 dark:hover:text-orange-600 transition-all duration-500 ease-in-out"
        >
          {title}
        </Link>

        <div className="mt-5">
          <button className="btn bg-orange-500 text-white rounded-md ">
            <Link href="#">Check our work</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartegoryCard;
