import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { useEffect } from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {

  useEffect(() => {
    const thumbs = document.querySelectorAll('.thumb_image')
    const starbucks = document.querySelector('.starbucks')

    function changeCircleColor(color) {
      const circle = document.querySelector('.circle')
      circle.style.background = color;
    }

    function handleClick(thumb) {
      return thumb.addEventListener('click', () => {
        console.log('click')
        starbucks.src = thumb.src
        starbucks.srcset = thumb.srcset
        changeCircleColor(thumb.getAttribute('color'))
      })
    }

    thumbs.forEach(handleClick)
  })

  return (<>
    <Head>
      <title>Starbucks</title>
      <link rel="icon" href="/images/logo.png" />
    </Head>
    <div className={`${styles.circle} circle`}></div>
    <div className={styles.content}>
      <div className={styles.textBox}>
        <h2>It&apos;s not just Coffee<br />It&apos;s <span>Starbucks</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut ipsum in purus elementum scelerisque vel et sem. Maecenas dignissim placerat aliquam. Aliquam erat volutpat. Aliquam suscipit urna et volutpat porttitor. In venenatis, felis id porttitor sagittis, dui est accumsan augue, vel lacinia justo ex porta risus. Nullam lacinia rutrum nisl. Ut in faucibus erat, eget vehicula felis. In consequat risus vel nisl tempor efficitur.</p>
        <Link href="#" passHref><a className={styles.link}>
          Learn more
        </a></Link>
      </div>

      <div className={styles.imgBox}>
        <Image
          className="starbucks"
          src="/images/img1.png"
          alt="Starbucks"
          width="340px"
          height="100%"
          objectFit="contain"
        ></Image>
      </div>
    </div>

    <ul className={styles.thumb}>
      <li><Image className={`${styles.thumb_image} thumb_image`} src="/images/thumb1.png" width="100%" height="100%" objectFit="contain" alt="" color="#017143" /></li>
      <li><Image className={`${styles.thumb_image} thumb_image`} src="/images/thumb2.png" width="100%" height="100%" objectFit="contain" alt="" color="#eb7495" /></li>
      <li><Image className={`${styles.thumb_image} thumb_image`} src="/images/thumb3.png" width="100%" height="100%" objectFit="contain" alt="" color="#d752b1" /></li>
    </ul>

    <ul className={styles.sci}>
      <li><Link href="#" passHref><a>
        <Image src="/images/facebook.png" width="100%" height="100%" objectFit="contain" alt="" />
      </a></Link></li>

      <li><Link href="#" passHref><a>
        <Image src="/images/twitter.png" width="100%" height="100%" objectFit="contain" alt="" />
      </a></Link></li>

      <li><Link href="#" passHref><a>
        <Image src="/images/instagram.png" width="100%" height="100%" objectFit="contain" alt="" />
      </a></Link></li>
    </ul>
  </>)
}
