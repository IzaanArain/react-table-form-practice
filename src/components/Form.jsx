

const Form = ({newUser,formChange,submit}) => {
  return (
    <form className="bg-info p-4" onSubmit={submit}>
      <div className="row">
        <div className="col mb-3">
          <label htmlFor="fname" 
          className="form-label">
            First Name :
          </label>
          {/* {console.log(formChange)} */}
          <input
            type="text"
            className="form-control"
            id="fname"
            aria-describedby="first name"
            onChange={formChange}
            value={newUser.fname}
            name="fname"
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="lname" 
          className="form-label">
            Last Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            aria-describedby="last name"
            onChange={formChange}
            value={newUser.lname}
            name="lname"
          />
        </div>
      </div>

      <div className="row">
        <div className="col mb-3">
          <label htmlFor="exampleInputEmail1" 
          className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={formChange}
            value={newUser.email}
            name="email"
          />
          <div id="emailHelp" 
          className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="col mb-3">
          <label htmlFor="contact" className="form-label">
            Contact :
          </label>
          <input
            type="text"
            className="form-control"
            id="Contact"
            aria-describedby="Contact"
            onChange={formChange}
            value={newUser.contact}
            name="contact"
          />
        </div>
      </div>

      <div className="row">
        {/* <div className="col mb-3">
          <label htmlFor="country" 
          className="form-label">
            Country :
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            aria-describedby="Country"
            onChange={formChange}
            value={newUser.address.country}
            name="Address"
          />
        </div> */}
        {/* <div className="col mb-3">
          <label htmlFor="city" 
          className="form-label">
            City :
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            aria-describedby="City"
            onChange={formChange}
            value={newUser.address.city}
            name="Address"
          />
        </div> */}
      </div>

      <div className="row">
      <button type="submit" 
      className="col btn btn-primary"
      onSubmit={submit}>
        Submit
      </button>
      </div>
    </form>
  );
};

export default Form;
