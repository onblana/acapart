import { Textarea } from "@/components/ui/textarea";
import PostList from "./PostList";

const NewPost = () => {
  return (
    <div className="">
      <PostList title="새 글 작성하기" />
      <Textarea placeholder="Type your message here." />
      <Textarea placeholder="Type your message here." />
    </div>
  );
};

export default NewPost;
