import hero from "../assets/images/hero.jpg";


const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10">

      <div
        className="relative overflow-hidden rounded-3xl"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 px-12 py-24">

          <p className="mb-6 text-orange-500 font-semibold tracking-[8px] uppercase">
            Premium Collection
          </p>

          <h1 className="max-w-3xl text-6xl font-black leading-tight text-white">
            Explore The World's Best
            <br />
            Automotive Photography
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Discover stunning Ferrari, Lamborghini, Porsche,
            BMW, Audi, Mercedes and thousands of premium car
            photographs from photographers around the world.
          </p>

         

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">

            <div>
              <h2 className="text-4xl font-bold text-white">
                10K+
              </h2>

              <p className="text-slate-300">
                Car Images
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                500+
              </h2>

              <p className="text-slate-300">
                Photographers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                25+
              </h2>

              <p className="text-slate-300">
                Car Brands
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;