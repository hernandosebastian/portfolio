export default function BackgroundDecoration() {
  return (
    <div className="absolute top-0 left-0 w-full max-w-[972px] h-[400px] lg:h-[700px] z-0 min-[1000px]:max-w-[1680px]">
      <div className="relative w-full h-full">
        <img
          src="/src/assets/backgrounds/background-decoration.png"
          alt="Background decoration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-90% to-[#f7f7f7]" />
      </div>
    </div>
  );
}
