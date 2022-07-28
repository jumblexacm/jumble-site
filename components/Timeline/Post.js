import Image from 'next/image';
import Gallery from './Gallery';
import Link from 'next/link';
import styles from './Post.module.css';

function Post({ post }) {
  const text = post.message_text
    .split('\n')
    .map((str, index) => (str ? <p key={index}>{str}</p> : <br key={index} />));

  return (
    <div className={styles.postContainer}>
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <Link
            href={{
              pathname: '/organizations/[id]',
              query: { id: post.org_id },
            }}
          >
            <a>
              <div className={styles.avatarImage}>
                <Image
                  src={post.author_avatar_url}
                  alt={post.message_author}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
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
      <div className="p-4 space-y-2 text-sm text-gray-600 break-words">
        {text}
      </div>
      {post.attachment_urls.length != 0 ? (
        <Gallery images={post.attachment_urls} />
      ) : null}
    </div>
  );
}

export default Post;
