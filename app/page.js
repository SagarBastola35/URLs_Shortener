import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-col-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold">
            The best URL shortener in the market
          </p>
          <p className="px-56 text-center">
            We are most strightforward URL Shortener in the world. Most of the URL shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>

          <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 py-1 font-bold rounded-lg text-white'>Try Now</button></Link>
            <Link href="/contact"><button className='bg-purple-500 shadow-lg p-3 py-1 font-bold rounded-lg text-white'>GitHub</button></Link>
          </div>

        </div>
        <div className="flex justify-center items-center relative">
          <Image className="mix-blend-darken" alt="An Image of a Vector" src={"/vector.jpg"} width={400} height={400} />
        </div>

      </section>
    </main>
  );
}