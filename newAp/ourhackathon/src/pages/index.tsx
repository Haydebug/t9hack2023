import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/signin/signin">Sign In</Link>
      </li>
      <li>
        <Link href="/survey/surveyPage">Survey</Link>
      </li>
      <li>
        <Link href="/connect/connectpage">Connect</Link>
      </li>
      <li>
        <Link href="/profiles/myprofile">My Profile</Link>
      </li>
      <li>
        <Link href="/signup/signup">Sign Up</Link>
      </li>
    </ul>
  )
}

export default Home