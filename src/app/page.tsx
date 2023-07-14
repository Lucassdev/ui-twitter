import Image from 'next/image'

import Tweet from '@/components/Tweet'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Separator from '@/components/Separator'

const tweets = ['Meu primeiro Tweet', 'Teste', 'Deu certo Tweetar!']

export default function Home() {
  return (
    <div className="layout mx-auto my-0 grid max-w-screen-lg grid-cols-[300px_1fr]">
      <Sidebar />

      <div className="content border-x border-[#ebeef0]">
        <main className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form flex flex-col gap-2 px-5 py-6">
            <label className="flex items-center gap-3" htmlFor="tweet">
              <Image
                className="h-12 w-12 rounded-full"
                src="https://github.com/Lucassdev.png"
                alt="Foto de perfil do usuário"
                width={460}
                height={460}
              />
              <textarea
                className="flex flex-1 resize-none text-xl font-medium placeholder-[#5b7083af] focus:outline-none"
                id="tweet"
                placeholder="What's happening?"
              ></textarea>
            </label>

            <button
              className="ml-auto rounded-full bg-[var(--twitter-blue)] px-6 py-3 text-base font-black text-white hover:brightness-95"
              type="submit"
            >
              Tweet
            </button>
          </form>

          <Separator />

          {tweets.map((tweet) => {
            return <Tweet key={tweet} content={tweet} />
          })}
        </main>
      </div>
    </div>
  )
}
