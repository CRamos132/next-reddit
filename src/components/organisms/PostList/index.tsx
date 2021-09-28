import { IPost } from '../../../contexts/PostsContext';
import Post from '../../molecules/Post';

interface IProps {
    posts: IPost[]
}

export default function PostList({ posts }: IProps) {
  return (
    <>
      {posts?.map(({ data }) => (
        <Post
          key={data.id}
          image={data.thumbnail}
          postLink={data.permalink}
          date={data.created}
          {...data}
        />
      ))}
    </>
  );
}
