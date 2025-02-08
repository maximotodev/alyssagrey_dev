export default async function getTracks() {
  const res = await fetch("http://localhost:3000/api/");
  return res.json();
}
