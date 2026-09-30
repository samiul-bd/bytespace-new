import Navbar from "../Navbar";

export default function HeroSection() {
  return (
    <section className="bg-[#2355ef] min-h-screen relative overflow-hidden">
      {/* Background Grid Pattern (CSS diye kora, image lage na) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Navbar />
      
      {/* Red Circle er Ongsho (Text + Search Bar) */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-16 md:pt-24">
        
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-3xl">
          Get Access to Hundreds Courses Available
        </h1>
        
        <p className="text-white/80 mt-6 text-sm md:text-base max-w-2xl">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar Container */}
        <div className="mt-10 flex items-center bg-white rounded-full p-1.5 w-full max-w-[550px] shadow-lg">
          <div className="pl-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Course, topic, creator"
            className="flex-1 bg-transparent outline-none px-3 text-neutral-900 placeholder:text-gray-400 w-full"
          />
          <button className="bg-[#cbfc01] hover:bg-[#b5e001] text-black font-semibold px-7 py-3 rounded-full transition-colors">
            Search
          </button>
        </div>

      </div>
    </section>
  );
}