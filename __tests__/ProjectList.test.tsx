import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectList from '../components/ProjectList';

describe('ProjectList', () => {
  it('renders the project list heading', () => {
    render(<ProjectList />);

    const heading = screen.getByRole('heading', {
      name: 'Previous Work / Projects',
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders individual projects in the list', () => {
    render(<ProjectList />);

    const project1 = screen.getByRole('heading', {
      name: 'SkyMeta',
    });
    const project2 = screen.getByRole('heading', {
      name: 'Krave',
    });

    expect(project1).toBeInTheDocument();
    expect(project2).toBeInTheDocument();
  });
});
