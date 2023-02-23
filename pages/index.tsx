import Head from "next/head";
import Image from "next/image";
import Menu from "@/components/Menu";
import Button from "@/components/Button";
import { LinkIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container mx-auto`}>
        <Menu />

        {/* Header Starts */}
        <div className="flex flex-col place-items-center py-44 space-y-3">
          <h1 className="text-5xl font-bold">Ayo Mulai Voting</h1>
          <h2 className="text-lg bg-zinc-50 px-3 py-1">Web Voting No. 1 di Indonesia</h2>
          <Image src={"/assets/img/logo-vote-app.png"} alt={"Header"} width={100} height={100} />
          <div className="space-x-10">
            <Button text="Buat Vote Baru" />
            <Button text="Ikutan Vote" type="secondary" />
          </div>
        </div>
        {/* Header Ends */}

        {/* Table Starts */}
        <div>
          <p className="py-5 text-lg font-bold">Vote yang saya buat</p>
          <table className="table-auto w-full border border-zinc-100">
            <thead>
              <tr>
                <th className="p5 text-center">No</th>
                <th className="p5 text-center">Judul</th>
                <th className="p5 text-center">Kandidate</th>
                <th className="p5 text-center">Kode</th>
                <th className="p5 text-center">Mulai</th>
                <th className="p5 text-center">Selesai</th>
                <th className="p5 text-center"></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-5 text-center">1</td>
                <td className="p-5 text-center">Vote 1</td>
                <td className="p-5 text-center">2</td>
                <td className="p-5 text-center">123456</td>
                <td className="p-5 text-center">2021-10-10</td>
                <td className="p-5 text-center">2021-10-10</td>
                <td className="p-5 text-center">
                  <div className="flex place-content-center space-x-4">
                    <a href="#">
                      <LinkIcon className="h-9 w-9 p-2 hover:bg-zinc-100" />
                    </a>
                    <a href="#">
                      <TrashIcon className="h-9 w-9 p-2 hover:bg-zinc-100" />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table Ends */}
      </main>
    </div>
  );
}
