import Mantine_Layout from '@/components/common/Main_Layout';

export default function Social_Pages_Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Mantine_Layout>{children}</Mantine_Layout>;
}
