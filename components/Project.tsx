interface Project {
  url: string;
  title: string;
  description: string;
}

const Project = ({ url, title, description }: Project) => {
  return (
    <a href={url} target="_blank">
      <div className="border rounded-md relative w-screen sm:w-[29rem] h-48 bg-gradient-to-r from-slate-100 hover:from-slate-200 hover:shadow flex flex-col gap-4 justify-center items-center">
        <h2 className="text-4xl font-black">{title}</h2>
        <p className="tracking-widest">{description}</p>
      </div>
    </a>
  );
};

export default Project;
