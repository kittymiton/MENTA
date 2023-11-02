import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ArticleDetail = () => {

  // idが変更されたときにデータをAPIから取得
  const [post, setPost] = useState();

  // 外部通信の結果
  const [isError, setIsError] = useState(false); // エラーかどうかを持たせる変数
  const [isLoading, setLoading] = useState(false); // 読み込み中かを持たせる変数

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP');
  }
  // URLからidパラメータを取得し、特定の投稿をAPIエンドポイントから取得
  const { id } = useParams();
  // const post = posts.find((post) => post.id === Number(id));

  // APIからデータ取得
  useEffect(() => {
    fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data.post))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }, [id])

  if (isError) return <div>読み込みに失敗しました</div>
  if (isLoading || !post) return <div>データ読み込み中</div> // 読み込みが終わるまでpostのデータ反映をしない

  return (
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
    </main>
  );
};
