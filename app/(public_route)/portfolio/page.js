import Image from "next/image";
function PortfolioPage() {
  return (
    <div className="flex items-start justify-center">
      <div className="card bg-base-100  shadow-xl">
        <figure className=" pt-10">
          <Image
            src="/images/01.jpg"
            alt="Shoes"
            className="rounded-xl"
            width={400}
            height={200}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
