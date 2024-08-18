import Link from "next/link";
import Image from "next/legacy/image";
function BlogCard({ item }) {
  return (
    <div className="flex px-3 py-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={item.imgUrl}
          alt="Sunset in the mountains"
          width={500}
          height={300}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 hover:text-orange-500">
            <Link href={`/blog/post/${item._id}`}>{item.title}</Link>
          </div>
          <p className="text-gray-700 text-base">{item.content}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
