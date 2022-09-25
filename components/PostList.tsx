import { NextPage } from 'next';
import Post from '../components/Post';

interface PostData {
  title: string;
  preview: string;
  displayDate: string;
  id: string;
}

interface Props {
  allPostsData: PostData[];
}

const PostList: NextPage<Props> = ({ allPostsData }) => {
  return (
    <div>
      <h3 className="uppercase tracking-widest mb-4">Recent Posts</h3>
      <div className="flex flex-col gap-5 border rounded p-6 sm:max-w-[32rem]">
        {allPostsData.slice(0, 3).map((post: PostData) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              preview={post.preview}
              displayDate={post.displayDate}
              link={`/blog/${post.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
