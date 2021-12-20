export function get(url) {
  return fetch(url, {
    headers: { "Content-Type": "application/json" },
  }).then((result) => result.json());
}
