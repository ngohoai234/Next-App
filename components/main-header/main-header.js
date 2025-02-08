'use client';

import logoImg from '@/assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import classes from './main-header.module.css';
import { usePathname } from 'next/navigation';

const MainHeader = () => {
  const path = usePathname();
  console.log(path, ' path');
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              href="/meals"
              className={path.startsWith('/meals') ? classes.active : ''}
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className={path === '/community' ? classes.active : ''}
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
