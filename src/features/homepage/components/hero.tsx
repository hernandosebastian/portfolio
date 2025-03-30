export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6 px-12 sm:px-24">
      <h1 className="text-5xl text-[#1a1a1a] font-neue-montreal tracking-tight">
        Hola. Soy{" "}
        <span className="font-neue-montreal-medium-italic">Sebastián</span>.
      </h1>
      <h2 className="text-2xl text-[#1a1a1a] font-neue-montreal-medium tracking-tight">
        Ingeniero de Software.
      </h2>
      <p className="text-[1.45rem] leading-7 text-[#1a1a1a] font-neue-montreal tracking-tight">
        Con 2+ años de experiencia, me especializo en soluciones escalables y
        buenas prácticas de ingeniería de software, como{" "}
        <span className="text-blue-800">SOLID</span>,{" "}
        <span className="text-blue-800">testing automatizado</span> y{" "}
        <span className="text-blue-800">optimización de procesos</span>.
        Actualmente, en Bigger, desarrollo soluciones eficientes para MVPs y
        optimizo plataformas en producción.
      </p>
    </div>
  );
}
