import { useState } from "react";

const Form = () => {

    const [data, setdata] = useState([]);

    let email = '';
    let password = '';
    let number = '';
    let message = '';


    function save(e) {
        let user = {
            email: email,
            password: password,
            number: number,
            message: message
        };

        setdata(data => [...data, user]);
    }


    return (

        <>

            <form>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-6">

                            <div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        name="mail"
                                        placeholder="Enter Your Email"
                                        onChange={(e) => { email = e.target.value }}
                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter Your Password"
                                        onChange={(e) => { password = e.target.value }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="number"
                                        placeholder="enter your number"
                                        onChange={(e) => { number = e.target.value }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Message</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="message"
                                        placeholder="send us a message"
                                        onChange={(e) => { message = e.target.value }}
                                    />
                                </div>
                            </div>

                            <button type="button" className="btn btn-primary" onClick={save}>Submit</button>

                            <button type="button" className="btn btn-primary mx-3">Update</button>

                            <button type="button" className="btn btn-primary mx-3">Delete</button>

                            <button type="button" className="btn btn-primary mx-3">View</button>

                        </div>



                        <div className="col-md-6">
                            <div className="container">
                                <div className="row">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Mail id</th>
                                                <th scope="col">Password</th>
                                                <th scope="col">Number</th>
                                                <th scope="col">Message</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.map((item, i) => {

                                                return (

                                                    <tr key={i}>
                                                        <td>{item.email}</td>
                                                        <td>{item.password}</td>
                                                        <td>{item.number}</td>
                                                        <td>{item.message}</td>

                                                    </tr>
                                                )

                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </form>


        </>
    )
}

export default Form