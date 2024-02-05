export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return Response.json({ data: data.slice(0, 5) });
}
