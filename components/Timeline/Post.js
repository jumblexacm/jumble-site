import Image from 'next/image';
import Gallery from './Gallery';
import Link from 'next/link';

function Post({ post }) {
  const text = post.message_text
    .split('\n')
    .map((str, index) => (str ? <p key={index}>{str}</p> : <br key={index} />));

  return (
    <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <Link
            href={{
              pathname: '/organizations/[id]',
              query: { id: post.org_id },
            }}
          >
            <a className="hover:contrast-80 hover:brightness-95">
              <Image
                src={post.author_avatar_url}
                alt={post.message_author}
                width={64}
                height={64}
                className="object-cover rounded-full"
              />
            </a>
          </Link>
          <div>
            <Link
              href={{
                pathname: '/organizations/[id]',
                query: { id: post.org_id },
              }}
            >
              <a className="text-lg font-semibold hover:underline">
                {post.message_author}
              </a>
            </Link>
            <div className="mt-2 text-lg text-gray-600">{post.date}</div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm text-gray-600">{text}</div>
      {post.attachment_urls.length != 0 ? (
        <Gallery images={post.attachment_urls} />
      ) : null}
    </div>
  );
}

export default Post;
