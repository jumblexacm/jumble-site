import Image from 'next/image';
import Gallery from './Gallery';
import Link from 'next/link';
import styles from './Post.module.css';
import { toHTML } from 'discord-markdown';
import DOMPurify from 'isomorphic-dompurify';

function Post({ post, clickable = false, shareable = false }) {
  const text = DOMPurify.sanitize(
    toHTML(post.message_text, { escapeHTML: false })
  ); //Setting up Discord Markdown by converting post msg to HTML, and then escaping HTML to add styling

  return (
    <div>
      <Link
        href={{
          pathname: 'post/[id]',
          query: { id: post.message_id },
        }}
      >
        <a className={clickable ? null : styles.inactiveLink}>
          <div className={styles.postContainer}>
            <div className={styles.postInfoWrapper}>
              <Link
                href={{
                  pathname: '/organizations/[id]',
                  query: { id: post.org_id },
                }}
              >
                <a>
                  <div className={styles.authorImage}>
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
                  <a className={styles.authorName}>{post.message_author}</a>
                </Link>
                <div className={styles.postDate}>{post.date}</div>
              </div>
            </div>
            <div className={styles.postText}>
              <div
                className={styles.htmlText}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
            {post.attachment_urls.length != 0 ? (
              <Gallery images={post.attachment_urls} />
            ) : null}
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Post;
