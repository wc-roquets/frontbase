export default function ({ app, redirect }) {
  console.log(`middleware protect`)
  const auth = app.$cookies.get('auth')
  if (!auth) return redirect('/')
}