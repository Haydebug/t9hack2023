import Link from 'next/link'
import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import style from '@/styles/Survey.module.css';
import { NavBar } from '@/component/navbar';
import { useRouter } from 'next/router';
export const globalScore = 0;

function Home() {
  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)
  const [score3, setScore3] = useState(0)
  const [score4, setScore4] = useState(0)
  const [score5, setScore5] = useState(0)
  const [score6, setScore6] = useState(0)
  const [score7, setScore7] = useState(0)
  const [score8, setScore8] = useState(0)
  const [score9, setScore9] = useState(0)
  const [score10, setScore10] = useState(0)
  const [score11, setScore11] = useState(0)
  const [scoreFinal, setScoreFinal] = useState(0)
 const router =  useRouter()
  return (
    <ul>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"></script>

      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <div className={style.myContainer}>
        <NavBar />
        <h1 className='container-fluid m-2'>
          <center>
            Introduction Survey
          </center>
        </h1>
      </div>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 1. What political affiliation do you identify with most?
      </h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore1((score1) => 1)}> Independent </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore1((score1) => 2)}> Republican </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore1((score1) => 3)}> Democrat </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore1((score1) => 4)}> Apolitical </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 2. What is your most ideal vacation?
      </h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore2((score2) => 2)}> Staycation </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore2((score2) => 3)}> Beach Vacation </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore2((score2) => 4)}> Mountain Vacation </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore2((score2) => 1)}> City Vacation </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 3. What gender do you identify with?
      </h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore3((score3) => 3)}> Female </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore3((score3) => 4)}> Male </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore3((score3) => 1)}> Other </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore3((score3) => 2)}> Dont Want To Answer </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 4. What is your favorite entertainment type?
      </h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore4((score4) => 4)}> Movies </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore4((score4) => 1)}> Games </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore4((score4) => 2)}> Live Entertainment </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore4((score4) => 3)}> Sports </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 5. What is your ideal friday night?
      </h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore5((score5) => 4)}> Date night </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore5((score5) => 3)}> Layed back night with friends </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore5((score5) => 2)}> Productive night </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore5((score5) => 1)}> Night In </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 6. What is your highest education level?
      </h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore6((score6) => 1)}> High School Grad / GED </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore6((score6) => 4)}> Under Graduate </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore6((score6) => 3)}> Associates / Bachelors Degree </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore6((score6) => 2)}> Masters Degree+ </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 7. What subject would you most likely study?
      </h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore((score7) => 2)}> Arts </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore7((score7) => 1)}> STEM </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore7((score7) => 4)}> Language </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore7((score7) => 3)}> Humanities </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 8. How old are you?
      </h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore((score8) => 4)}> 18 - 25 </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore8((score8) => 3)}> 26 - 35 </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore8((score8) => 2)}> 36 - 50 </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore8((score8) => 1)}> 50+ </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 9. What food would you most likely eat?
      </h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore9((score9) => 2)}> Asian </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore9((score9) => 4)}> American </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore9((score9) => 1)}> African </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore9((score9) => 3)}> European </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 10. How social are you?
      </h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore10((score10) => 1)}> Extrovert </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore10((score10) => 3)}> Introvert </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore10((score10) => 2)}> Neither </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore10((score10) => 4)}> Other </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 11. What was your motivation to sign up?
      </h2>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore11((score) => 4)}> Meet Friends </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore11((score11) => 3)}> Learn From Others </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore11((score11) => 1)}> Discuss Issues </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => setScore11((score11) => 2)}> Have Fun </button>
      <br></br>
      <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="bg-dark rounded" onClick={() => {
        setScoreFinal((scoreFinal) => {
          (score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11) / 11;
        })
        router.push('/profiles/myprofile')
      }} > Submit </button>
    </ul>
  )
}

export default Home
