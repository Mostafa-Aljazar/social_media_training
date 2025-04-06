'use client';
import { ROUTES } from '@/content/routes';
import { ActionIcon, Affix, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { SquarePen } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Floating_Add_Post() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 80, left: 30 }} hiddenFrom='md'>
      <Transition transition='slide-up' mounted={scroll.y > 200}>
        {(transitionStyles) => (
          <Link
            style={transitionStyles}
            href={ROUTES.ADD_POST}
            className='flex justify-center items-center bg-purple-500 shadow-xl rounded-full w-12 h-12'
          >
            <ActionIcon variant='transparent'>
              <SquarePen size={20} color='white' />
            </ActionIcon>
          </Link>
        )}
      </Transition>
    </Affix>
  );
}
