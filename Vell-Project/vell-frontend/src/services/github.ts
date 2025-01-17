export type User = {
  name: string;
  bio: string;
};

export async function getBio(username: string): Promise<User> {
  const url = `https://api.github.com/users/${username}`;

  const res = await fetch(url);
  const obj = await res.json();
  return { name: obj.name, bio: obj.bio };
}
