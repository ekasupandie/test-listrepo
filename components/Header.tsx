import Link from "next/link";
import Head from 'next/head'
export default function Header() {
  return (
    <>
    <Head>
        <title>Github App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/next.svg"></link>
    </Head>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900"><Link href={'/'}>Github Repo</Link></h1>
            <div className="flex items-center justify-center">
            <div><Link href={'/'}><p className="text-black-200 hover:text-gray-900 py-6 px-3">Home</p></Link></div>
            <div><Link href={'/repository'}><p className="text-black-200 hover:text-gray-900 py-6 px-3">Repository</p></Link></div>
            </div>
          </div> 
        </header>
      </div>
    </>
  )
}
