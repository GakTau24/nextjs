async function getDetailArticel(id) {
  let detailArticel = await fetch(
`${process.env.API_ARTICLE}/${id}`);
  return detailArticel.json();
}

export default async function Page({ params }) {
  const detail = await getDetailArticel(params.id);
  return (
    <div className="flex items-center">
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={detail.results.thumb} alt=""/>
          <div className="px-6 py-4">
          <h1 className="font-bold text-xl my-2">{detail.results.title}</h1>
          <p>{detail.results.author}</p>
          <p className="text-gray-700 text-base">{detail.results.date_published}</p>
          <p className="text-gray-700 text-base">{detail.results.description}</p>
          </div>
        </div>
    </div>
    </div>
  );
}
