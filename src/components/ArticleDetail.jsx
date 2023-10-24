import { useParams } from "react-router-dom";
import { posts } from '../data/posts';

export const ArticleDetail = () => {

  const { id } = useParams();

  const post = posts.find((post) => post.id === Number(id));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP');
  }

  return (
    <>
      <main>
        <section>
          <div className="post-detail">
            <img src={post.thumbnailUrl} alt={post.title} />
            <div className="post-info">
              <p>{formatDate(post.createdAt)}</p>
              <ul>{post.categories.map((category, index) => (
                <li key={index}>{category}
                </li>
              ))}
              </ul>
            </div>
            <h1>{post.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </section>
      </main >
    </>
  );
};
