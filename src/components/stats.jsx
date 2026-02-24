function Stats() {
    return ( 
        <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-500/50">
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-extrabold mb-2">100%</div>
              <div className="text-blue-100 font-medium tracking-wide">Quality Care</div>
            </div>
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-extrabold mb-2">7,861</div>
              <div className="text-blue-100 font-medium tracking-wide">Patients a year</div>
            </div>
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-extrabold mb-2">50+</div>
              <div className="text-blue-100 font-medium tracking-wide">Staff Members</div>
            </div>
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-extrabold mb-2">30</div>
              <div className="text-blue-100 font-medium tracking-wide">Years of experience</div>
            </div>
          </div>
        </div>
      </section>
     );
}

export default Stats;