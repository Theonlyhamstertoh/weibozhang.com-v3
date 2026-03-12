export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-2xl mx-auto w-full prose-headings:mt-8 prose-headings:font-semibold py-10 px-6 prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg text-pretty">
      {children}
    </div>
  );
}
