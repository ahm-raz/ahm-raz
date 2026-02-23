const BrokenMirrorProfile = () => {
  const imageSrc = "/profile.jpeg";
  
  return (
    <div className="relative w-full max-w-[400px] md:max-w-[480px] h-[600px] md:h-[720px] mx-auto md:mx-0 group">
      <div className="relative w-full h-full flex items-center justify-center">
        <div 
          className="relative rounded-[40%] w-96 h-[28rem] md:w-[28rem] md:h-[32rem] overflow-hidden border-2 border-[#00ff00]/30 transition-all duration-400 ease-out group-hover:scale-[1.02] group-hover:border-[#00ff00]/50 group-hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
          style={{
            clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
        >
          <img
            src={imageSrc}
            alt="Ahmad Raza"
            className="w-full h-full object-cover object-center"
            loading="eager"
            onLoad={() => console.log("Profile image loaded successfully")}
            onError={(e) => {
              console.error("Failed to load profile image. Path:", imageSrc);
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = "#1a1a1a";
              target.style.display = "block";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BrokenMirrorProfile;
