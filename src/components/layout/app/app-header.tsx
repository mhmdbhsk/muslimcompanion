import Container from 'components/ui/container';
import { Fragment } from 'react';
import Link from 'next/link';

export default function AppHeader() {
  return (
    <Fragment>
      <header className='flex items-center justify-center fixed w-full h-16 z-40 shadow-sm'>
        <Container className='flex items-center justify-between h-full px-4'>
          <Link href='/'>
            <a className='align-middle'>MuslimCompanion</a>
          </Link>
          <div>Setting</div>
        </Container>
      </header>
    </Fragment>
  );
}
