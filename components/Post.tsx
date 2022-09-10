import Link from 'next/link';

interface Post {
  title: string;
  preview: string;
  displayDate: string;
  link: string;
}

const Post = ({ title, preview, displayDate, link }: Post) => {
  return (
    <Link href={link}>
      <div className="w-full text-left border-b hover:border-teal-600 pb-4 cursor-pointer">
        <span className="text-sm text-teal-700">{displayDate}</span>
        <h2 className="font-black text-2xl mb-2 mt-1">{title}</h2>
        <p className="font-extralight leading-6 text-base">{preview}</p>
      </div>
    </Link>
  );
};

export default Post;
