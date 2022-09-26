import { useState } from "react";
const Form = () => {
    const [count, setCount] = useState(0);

    let add=()=>{
        setCount(count + 1);
    }
    let sub=()=>{
        setCount(count - 1);
    }
    return (

        <>
            {/* <>
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-md-6">

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onChange={(event) => setState({email: event.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Message</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>


                            <button type="submit" onClick={PrintData} className="btn btn-primary ">Submit</button>
                            <button type="submit" className="btn btn-primary mx-3">Update</button>
                            <button type="submit" className="btn btn-primary mx-3">Delete</button>
                            <button type="submit" className="btn btn-primary mx-3">View</button>
                        </div>
                        <div className="col-md-6">
                            <h1>{displayData }</h1>
                        </div>
                    </div>
                </div>
            </> */}

            <div >

                <button type="submit" className="btn btn-primary m-3" onClick={ add }>ADD</button>
                <button type="submit" className="btn btn-primary m-3" onClick={ sub }>SUB</button>
                <h1>{count}</h1>

            </div>

        </>
    )
}

export default Form