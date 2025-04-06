'use client';

import Link from 'next/link';
import { AppShell, Stack, Divider, Text, Group } from '@mantine/core';
import SearchComponent from './Search';
import Recommendations from './Recommendations';
import { FOOTER_LINKS } from '@/content/common/aside';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/content/routes';

export default function Aside() {
  const pathname = usePathname();
  return (
    <AppShell.Aside className='!bg-primary p-3 !border-[#363636] !border-r-[1px] w-full h-full'>
      <Stack justify='space-between' h='100%' w='100%'>
        {/* Main Content */}
        <Stack gap='md'>
          {pathname !== ROUTES.EXPLORE && <SearchComponent />}

          <Recommendations />
        </Stack>

        <Stack gap='xs' align='flex-start'>
          <Divider size='xs' w='100%' />
          <Group gap={5} wrap='wrap' justify='flex-start'>
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='text-Gray text-sm hover:underline'
              >
                {link.label}
              </Link>
            ))}
          </Group>
          <Text fz={'sm'}>
            © {new Date().getFullYear()} Asmar social media.
          </Text>
        </Stack>
      </Stack>
    </AppShell.Aside>
  );
}
