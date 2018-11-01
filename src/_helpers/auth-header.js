export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.toke) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}
