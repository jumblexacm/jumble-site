import Image from 'next/image';
import Gallery from './Gallery';
import Link from 'next/link';
import styles from './Post.module.css';
import { toHTML } from 'discord-markdown';
import DOMPurify from 'isomorphic-dompurify';
import CopyToClip from '../Share/CopyToClip';

// Source: https://bobbyhadz.com/blog/javascript-check-if-url-is-image#:~:text=To%20check%20if%20a%20url,return%20true%20if%20it%20does.
function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

function Post({ post, clickable = false, shareable = false }) {
  const text = DOMPurify.sanitize(
    toHTML(post.message_text, { escapeHTML: false })
  ); //Setting up Discord Markdown by converting post msg to HTML, and then escaping HTML to add styling
  
  let attachmentURLs = [];
  for (const url of post.attachment_urls) {
    if (isImage(url)) {
      attachmentURLs.push(url);
    }
  }

  return (
    <div className={styles.postContainer}>
      {shareable ? <CopyToClip /> : null}
      <Link
        href={{
          pathname: '/post/[id]',
          query: { id: post.message_id },
        }}
      >
        <a className={clickable ? styles.postLink : styles.inactiveLink}></a>
      </Link>
      <div className={styles.contentDivide}>
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
        {attachmentURLs.length != 0 && (
          <Gallery images={attachmentURLs} />
        )}
      </div>
    </div>
  );
}

export default Post;
