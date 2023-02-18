import Link from 'next/link'
import {useState} from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import style from '@/styles/Survey.module.css';
import { NavBar } from '@/component/navbar';

function Home() 
{
  const [Score, setScore] = useState(0)
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 1)}> Independent </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 2)}> Republican </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 3)}> Democrat </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 4)}> Apolitical </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 2. What is your most ideal vacation?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 2)}> Staycation </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 3)}> Beach Vacation </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 4)}> Mountain Vacation </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 1)}> City Vacation </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 3. What gender do you identify with?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 3)}> Female </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 4)}> Male </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 1)}> Other </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 2)}> Dont Want To Answer </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 4. What is your favorite entertainment type?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 4)}> Movies </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 1)}> Games </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 2)}> Live Entertainment </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 3)}> Sports </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 5. What is your ideal friday night?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 4)}> Date night </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 3)}> Layed back night with friends </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 2)}> Productive night </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 1)}> Night In </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 6. What is your highest education level?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 1)}> High School Grad / GED </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 4)}> Under Graduate </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 3)}> Associates / Bachelors Degree </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 2)}> Masters Degree+ </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 7. What subject would you most likely study?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 2)}> Arts </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 1)}> STEM </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 4)}> Language </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 3)}> Humanities </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 8. How old are you?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 4)}> 18 - 25 </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 3)}> 26 - 35 </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 2)}> 36 - 50 </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 1)}> 50+ </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 9. What food would you most likely eat?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 2)}> Asian </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 4)}> American </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 1)}> African </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 3)}> European </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 10. How social are you?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 1)}> Extrovert </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 3)}> Introvert </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 2)}> Neither </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 4)}> Other </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 11. What was your motivation to sign up?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 4)}> Meet Friends </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 3)}> Learn From Others </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 1)}> Discuss Issues </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded" onClick={() => setScore((score) => score + 2)}> Have Fun </button>


    </ul>
  )
}

export default Home
