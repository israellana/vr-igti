import Head from 'next/head'
import Button from '../components/Button'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Landing | Undonkey VR</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex items-center justify-center h-screen w-screen">
        <Button />
      </main>
    </div>
  )
}
