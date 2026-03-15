const BrokenMirrorProfile = () => {
  const imageSrc = "/profile.png";

  return (
    <div className="relative w-full max-w-[min(100%,18rem)] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[360px] xl:max-w-[420px] min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] xl:min-h-[480px] mx-auto flex items-center justify-center group">

      {/* glow background */}
      <div className="absolute w-[85%] h-[85%] bg-white/5 blur-2xl sm:blur-3xl rounded-2xl sm:rounded-[32px] opacity-60 group-hover:opacity-90 transition duration-500" />

      {/* frame */}
      <div className="relative w-[min(85vw,260px)] sm:w-[min(90vw,300px)] md:w-[320px] lg:w-[360px] aspect-[3/4] min-h-[280px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[420px] rounded-2xl sm:rounded-[28px] md:rounded-[32px] overflow-hidden border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.65)] transition duration-500 group-hover:scale-[1.03]">

        <img
          src={imageSrc}
          alt="Ahmad Raza"
          className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-110"
          loading="eager"
          sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 320px, 360px"
        />

        {/* glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

      </div>

    </div>
  );
};

export default BrokenMirrorProfile;