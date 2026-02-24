import PARTNERS from "../sources/partners.json";
function Partners() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 font-semibold mb-8 uppercase tracking-wider text-sm">
          Insurance we accept
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {PARTNERS.map((d, key) => {
            <span
              key={key}
              className="font-bold text-xl md:text-2xl font-serif"
            >
              {d.name}
            </span>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Partners;
