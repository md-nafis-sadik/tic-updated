function PageHeader({ title }) {
  return (
    <div className=" pt-48 flex justify-center items-center bg-pageheader-bg bg-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-12 text-gray-700 text-5xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
