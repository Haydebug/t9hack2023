import Link from 'next/link'
import {useState} from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import style from '@/styles/Survey.module.css';

function Home() 
{
  const [Score, setscore] = useState(0)
  return ( 
    <ul>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"></script>

      <br>
      </br>
      <div className={style.myContainer}>
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Independent </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Republican </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Democrat </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Apolitical </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 2. What is your most ideal vacation?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Staycation </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Beach Vacation </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Mountain Vacation </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> City Vacation </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 3. What gender do you identify with?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Female </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Male </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Other </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Dont Want To Answer </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 4. What is your favorite entertainment type?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Movies </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Games </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Live Entertainment </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Sports </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 5. What is your ideal friday night?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Date night </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Layed back night with friends </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Productive night </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Night In </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 6. What is your highest education level?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> High School Grad / GED </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Under Graduate </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Associates / Bachelors Degree </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Masters Degree+ </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 7. What subject would you most likely study?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Arts </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> STEM </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Language </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Humanities </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 8. How old are you?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> 18 - 25 </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> 26 - 35 </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> 36 - 50 </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> 50+ </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 9. What food would you most likely eat?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Asian </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> American </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> African </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> European </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 10. How social are you?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Extrovert </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Introvert </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Neither </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Other </button>
      <br></br>
      <br></br>
      <h2>
        &nbsp;&nbsp;&nbsp;&nbsp; 11. What was your motivation to sign up?
      </h2>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Meet Friends </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Learn From Others </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Discuss Issues </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className = "bg-dark rounded"> Have Fun </button>
    </ul>
  )
}

export default Home
