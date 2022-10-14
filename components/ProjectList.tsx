import { NextPage } from 'next';
import Project from './Project';

const ProjectList: NextPage = () => {
  return (
    <div>
      <h3 className="uppercase tracking-widest mb-4">
        Previous Work / Projects
      </h3>
      <div className="flex flex-col gap-3">
        <Project
          url="https://sneakers.dallasvaughn.com"
          title="Sneakers"
          description="Single Product Mock UI"
        />
        <Project
          url="https://skymeta.com"
          title="SkyMeta"
          description="Commercial Real Estate Lending"
        />
        <Project
          url="https://krave.vercel.app"
          title="Krave"
          description="E-commerce Mock UI"
        />
        <Project
          url="https://dallasvaughn.github.io/testing-site-locator/"
          title="COVID-19 Testing"
          description="Sample Testing Data Visualization"
        />
      </div>
    </div>
  );
};

export default ProjectList;
