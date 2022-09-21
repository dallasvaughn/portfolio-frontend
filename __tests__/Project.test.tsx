import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Project from '../components/Project';

const project = {
  url: 'https://skymeta.com',
  title: 'SkyMeta',
  description: 'Commercial Real Estate Lending',
};

describe('Project', () => {
  it('renders the project element', () => {
    render(
      <Project
        url={project.url}
        title={project.title}
        description={project.description}
      />
    );

    const heading = screen.getByRole('heading', {
      name: 'SkyMeta',
    });
    const description = screen.getByText('Commercial Real Estate Lending');

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('contains the appropriate href link', () => {
    render(
      <Project
        url={project.url}
        title={project.title}
        description={project.description}
      />
    );

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://skymeta.com'
    );
  });
});
