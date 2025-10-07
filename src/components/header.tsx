import iconNlw from "../assets/nlw-unit-icon.svg";

export const Header = () => {
  return (
    <div className="flex items-center gap-5">
      <img src={iconNlw} alt="Icone NLW" />

      <nav className="flex items-center gap-5 py-2">
        <a
          className="font-medium text-sm text-zinc-300
        "
          href="#"
        >
          Eventos
        </a>
        <a className="font-medium text-sm" href="#">
          Participantes
        </a>
      </nav>
    </div>
  );
};
