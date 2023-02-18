import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/signin">Sign In</Link>
      </li>
      <li>
        <Link href="/survey/surveyPage">Survey</Link>
      </li>
    </ul>
  )
}

export default Home