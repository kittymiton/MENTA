import { Fragment } from 'react';
import { posts } from '../data/posts';


export const ArticleList = () => {

  // 日付を変換
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP');
  }
  // <br/>タグを\n（改行）に置き換え
  //const replaceBrTags = (content) => content.replace(/<br\/>/g, '\n');

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">お問い合わせ</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {posts.map((post) => (
          <section>
            <div key={post.id} className="post">
              <div className="post-info">
                <p>{formatDate(post.createdAt)}</p>
                <ul>{post.categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
                </ul>
              </div>
              <h1>{post.title}</h1>
              {/* 改行コード毎に<br />を追加 gフラグで文字列内のすべてから検索*/}
              <p>{post.content.split(/<br\/>/g).map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
              </p>
            </div>
          </section>
        ))};
      </main>
    </>
  );
};
