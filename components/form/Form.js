const Form = () => {

    return (
        <>
            <form>
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-md-6">

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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


                            <button type="submit" className="btn btn-primary ">Submit</button>
                            <button type="submit" className="btn btn-primary mx-3">Update</button>
                            <button type="submit" className="btn btn-primary mx-3">Delete</button>
                            <button type="submit" className="btn btn-primary mx-3">View</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form