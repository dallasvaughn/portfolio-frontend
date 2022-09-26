import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Post from '../components/Post';

describe('Post', () => {
  it('renders the Post element with post data', () => {
    render(
      <Post
        title="Test Post"
        preview="Test post"
        displayDate="October 26, 1994"
        link="/blog/test-post"
      />
    );

    const heading = screen.getByRole('heading', {
      name: 'Test Post',
    });

    expect(heading).toBeInTheDocument();
  });
});
