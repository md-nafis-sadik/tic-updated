function ServiceHeader({ title, subtitle, description, breadcrumb }) {
  return (
    <div className="h-96  pt-24 px-10 flex flex-col justify-center items-center space-y-3 bg-service-bg bg-cover">
      <h1 className="font-bold text-4xl">{title}</h1>
      <h3 className="font-semibold text-lg">{subtitle}</h3>
      {description && (
        <p className="max-w-prose text-pretty text-center">{description}</p>
      )}
      {breadcrumb}
    </div>
  );
}

export default ServiceHeader;
