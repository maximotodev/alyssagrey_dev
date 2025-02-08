export default async function getTracks() {
  const res = await fetch("http://127.0.0.1:3000/api/");
  return res.json();
}
