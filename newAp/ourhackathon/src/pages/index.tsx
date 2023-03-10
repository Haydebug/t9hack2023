import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

import {Byte} from "@/component/byte";
import {NavBar} from "@/component/navbar";
import React from "react";

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

    const dummyData = [
        {title:"Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
        {title:"Second Title", body:"Hello", user:"Shrek", img:"https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"},
    ];

  return (
      <div className='homeBody'>
          <NavBar />
          <div className="card d-flex mt-5">
              <div className="card-body">
                  <table className="table-responsive">
                  </table>
                  <table className="table table-hover table-forum text-center">
                      <thead>
                      <tr>
                          <th></th>
                          <th className=""><h1><strong>Your Feed</strong></h1></th>
                          <th>Comments</th>
                      </tr>
                      </thead>
                      <tbody>
                      {dummyData.map(item => (
                          <Byte title={item.title} body={item.body} user={item.user} img={item.img} />
                      ))}
                  </tbody>
              </table>
              </div>
          </div>
          {/*
          <div className="container">
              <h1 className="text-center">User's Feed</h1>
              <div className ="container-fluid bg-primary m-2">
                  <div className="row text-center">
                      <div className="col-md-4">
                          <img className="" src="https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000" width="50px" height="50px"/>
                              <h3 className="text-center">Shrek</h3>
                      </div>
                      <div className="col-md-8">
                          <p><strong>Shrek </strong>This is the feed for a user, which will be populated by their friend's
                          posts.</p>
                      </div>
                  </div>
              </div>
              <div className="container justify-content-center align-content">
                  <button>Comments</button>
              </div>
          </div>
          */}

          {/*
        <div className="d-flex justify-content-center align-items-center">
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Launch demo modal
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                // tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">ima need some chocolate</div>
                    </div>
                </div>
            </div>
        </div>
          */}
    </div>
    );
}

export default Home