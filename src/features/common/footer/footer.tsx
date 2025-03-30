import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <div className="w-full h-full pt-24 px-8 bg-white flex flex-col gap-4 items-center text-[#1a1a1a] justify-center">
      <p className="text-left sm:text-center text-3xl font-neue-montreal-medium">
        ¿Interesado en colaborar o en contacto profesional?
      </p>
      <p className="text-left sm:text-center text-lg font-neue-montreal-regular">
        Estaré encantado de responder a cualquier consulta o propuesta.
      </p>
      <ButtonMailto
        label="Enviar un E-Mail"
        mailto="mailto:sebastianhernando.dev@gmail.com"
      />
      <p className="text-center text-xl font-neue-montreal-italic pt-16 pb-8">
        Sebastián Hernando
      </p>
    </div>
  );
}

function ButtonMailto({ label, mailto }: { label: string; mailto: string }) {
  return (
    <a
      href={mailto}
      className="bg-blue-800 hover:text-white hover:bg-blue-950 transition-colors duration-300 text-white px-4 py-2 rounded-md mr-auto sm:mr-0"
    >
      {label}
    </a>
  );
}
