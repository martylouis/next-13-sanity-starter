import { sanityClientFetch } from '@/lib/sanity/client'
import { queryAllPosts } from '@/lib/sanity/queries/post'
import { Post } from '@/lib/sanity/types/post'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home = async () => {
  let posts: Post[]

  // TODO: add sanity preview mode
  posts = await sanityClientFetch(queryAllPosts)

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug?.current}`}
            className={styles.card}
          >
            <h2 className={inter.className}>
              {post.title} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Updated at {post._updatedAt}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Home

export const revalidate = 10
