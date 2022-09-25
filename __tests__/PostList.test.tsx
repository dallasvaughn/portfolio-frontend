import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostList from '../components/PostList';

const allPostsData = [
  {
    title: 'Test',
    preview: 'This is a test post!',
    displayDate: 'October 26, 1994',
    id: 'test',
  },
];

describe('PostList', () => {
  it('renders the post list heading', () => {
    render(<PostList allPostsData={allPostsData} />);

    const heading = screen.getByRole('heading', {
      name: 'Test',
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders the post preview', () => {
    render(<PostList allPostsData={allPostsData} />);

    const preview = screen.getByText('This is a test post!');

    expect(preview).toBeInTheDocument();
  });
});
