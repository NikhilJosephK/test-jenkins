export default async function InnerPage({ params }) {
  const { slug } = await params;

  console.log(slug);

  return (
    <div>
      <h1>inner page : {slug[0]}</h1>
    </div>
  );
}
