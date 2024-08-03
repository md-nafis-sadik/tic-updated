function PageHeader({ title }) {
  return (
    <div class=" pt-48 flex justify-center items-center bg-pageheader-bg bg-center">
      <div class="container mx-auto">
        <div class="flex items-center justify-center">
          <div class="text-center text-white">
            <h1 class="mb-12 text-gray-700 text-5xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
