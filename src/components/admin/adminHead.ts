export function adminHead(tab: string, description: string) {
  const title = `${tab} · Programme admin · AI Adventure`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
  };
}
