import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import PostItem from "./PostItem";

const PostList = () => {
  return (
    <Card className="mb-20 w-3/4">
      <CardHeader>
        <CardTitle>전체 보기</CardTitle>
        <CardDescription>모든 카테고리의 글을 볼 수 있습니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </CardContent>
    </Card>
  );
};

export default PostList;
