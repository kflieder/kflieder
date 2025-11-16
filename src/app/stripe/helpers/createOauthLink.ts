export async function createOAuthLink() {
  const res = await fetch("/api/stripe/create-oauth-link");
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to get OAuth link");
  return data.url;
}
