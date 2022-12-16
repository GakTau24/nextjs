import "../styles/globals.css";
import Link from "next/link";

async function resepList () {
  let results = await fetch (process.env.API_RESEP)
  return results.json()
}

export default async function Resepmakanan() {
  let {results} = await resepList()

  return results.map((results) =>
    <div key={results.id} className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="rounded overflow-hidden shadow-2xl">
      <img className="w-full" src={results.thumb} alt=""/>
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl my-2">{results.title}</h1>
          <b className="text-gray-700 text-base">waktu: {results.times}</b>
          <p className="text-gray-700 text-base">kesulitan: {results.difficulty}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded m-5">
          <Link href={`/resep-makanan/${results.key}`}>Lihat Resep</Link>
        </button>
      </div>
    </div>
  );
}