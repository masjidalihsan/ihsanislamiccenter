interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-16 md:py-20">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
