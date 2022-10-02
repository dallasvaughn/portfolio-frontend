const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row justify-between p-10 mt-auto text-slate-400 items-center">
      <span className="text-xs tracking-wider text-center">
        Developed by Dallas Vaughn in Seattle{' '}
        <i className="fa-solid fa-cloud-rain"></i>
      </span>
      <div className="text-2xl flex gap-4">
        <a
          href="https://www.linkedin.com/in/dallas-vaughn/"
          aria-label="LinkedIn"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin hover:text-teal-700"></i>
        </a>
        <a
          href="https://github.com/dallasvaughn"
          aria-label="GitHub"
          target="_blank"
        >
          <i className="fa-brands fa-github hover:text-teal-700"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
