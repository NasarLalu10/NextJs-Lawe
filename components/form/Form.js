import { useState } from "react";

const Form = () => {

    const [data, setdata] = useState([]);

    let email = '';
    let password = '';
    let number = '';
    let message = '';
    let counts = '';

    function add() {

        let user =
        {
            email: email,
            password: password,
            number: number,
            message: message,
            counts: counts
        };

        var newList = data.concat(user)
        console.log("list add", newList)
        setdata(newList);

        document.getElementById('mailId').value = '';
        document.getElementById('passwordId').value = '';
        document.getElementById('phoneId').value = '';
        document.getElementById('messageId').value = '';
        document.getElementById('indexId').value = '';
    }

    function del(i) {
        data.splice(i, 1)
        setdata([...data])
    }

    const edit = (index) => {

        let dataState = [...data];
        let dataElement = { ...dataState[index] };

        document.getElementById('mailId').value = dataElement.email;
        document.getElementById('passwordId').value = dataElement.password;
        document.getElementById('phoneId').value = dataElement.number;
        document.getElementById('messageId').value = dataElement.message;
        document.getElementById('indexId').value = index;

    }

    const update = () => {
        let index = document.getElementById('indexId').value;
        let dataState = [...data];
        let dataElement = { ...dataState[index] };

        dataElement.email = document.getElementById('mailId').value;
        dataElement.password = document.getElementById('passwordId').value;
        dataElement.number = document.getElementById('phoneId').value;
        dataElement.message = document.getElementById('messageId').value;

        dataState[index] = dataElement;
        setdata(dataState);

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
                                        id="mailId"
                                        onChange={(e) => { email = e.target.value }}

                                    />

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        autoComplete="on"
                                        placeholder="Enter Your Password"
                                        id="passwordId"
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
                                        id="phoneId"
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
                                        id="messageId"
                                        onChange={(e) => { message = e.target.value }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="hidden"
                                        className="form-control"
                                        name="id"
                                        id="indexId"
                                        placeholder="user-count"
                                    />
                                </div>

                            </div>

                            <button type="button" className="btn btn-primary me-4" onClick={add}>SUBMIT</button>
                            <button type="button" className="btn btn-primary me-4" onClick={() => update()}>Update</button>

                        </div>



                        <div className="col-md-6">
                            <div className="container">
                                <div className="row">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Mail id</th>
                                                <th scope="col">Password</th>
                                                <th scope="col">Number</th>
                                                <th scope="col">Message</th>
                                                <th scope="col">Actions</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, i) => {

                                                return (

                                                    <tr key={i}>
        
                                                        <td>{item.email}</td>
                                                        <td>{item.password}</td>
                                                        <td>{item.number}</td>
                                                        <td>{item.message}</td>

                                                        <td>
                                                            <button type="button" className="btn btn-primary mx-4" onClick={()=>del(i)}>DELETE</button>
                                                        </td>

                                                        <td>
                                                            <button type="button" className="btn btn-primary mx-4" onClick={() => edit(i)} >EDIT</button>
                                                        </td>

                                                    </tr>
                                                );

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