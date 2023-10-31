import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const ArticleList = () => {

  // 日付を変換
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP');
  }
  // <br/>タグを\n（改行）に置き換え
  //const replaceBrTags = (content) => content.replace(/<br\/>/g, '\n');

  const [posts, setPost] = useState([]);

  // APIからデータ取得
  useEffect(() => {
    fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts`)
      .then(response => response.json())
      .then(data => setPost(data.posts))
  }, [])

  return (
    <main>
      {posts.map((post) => (
        <section key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <div className="post">
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
              {/* 改行コード毎に<br />を追加 gフラグで文字列内のすべてから検索 */}
              {/* <p>{post.content.split(/<br\/>/g).map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </p>*/}
            </div>
          </Link>
        </section>
      ))}
    </main >
  );
};
