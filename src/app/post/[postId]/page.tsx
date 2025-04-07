import Post from '@/components/feed/Post';

export default async function Page({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  return <Post />;
}
