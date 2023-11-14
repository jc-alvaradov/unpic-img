import Head from "next/head";
import { Image } from "@jc-alvaradov/unpic/next";
import styles from "@/styles/Home.module.css";

export default function Error() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          src="https://i.imgur.com/bxSRS3Jb.png"
          width={100}
          height={100}
          layout="fixed"
          alt="Owl"
        />
        <Image
          src="https://placekitten.com/400/300"
          width={400}
          height={300}
          layout="fixed"
          alt="Kittin"
        />
      </main>
    </>
  );
}
