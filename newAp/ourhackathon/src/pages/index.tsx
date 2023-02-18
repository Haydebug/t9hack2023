import Link from 'next/link'
import useFetch from '@/hooks/useFetch'

interface response {
  userId: number
  id: number
  title: string
  body: string
}

function Home() {

  let name = "hayden"
  
  const {data, error} = useFetch<any>("/api/usernameExists?username=hayden")
  console.log(data)

  const {data : data2, error : error2} = useFetch<any>("/api/getMessages?username=hayden&queryStart=0&queryEnd=3")
  console.log(data2)

  const {data : data3, error : error3} = useFetch<any>("/api/emailExists?email=hayden")
  console.log(data3)

  const {data : data4, error : error4} = useFetch<any>("/api/makeUser?username=haydebug&password=gamer12&email=haydedev@gmail.com")
  console.log(data4)

  return (
    <div className='homeBody'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>

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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"></script>

    </div>
  )
}

export default Home