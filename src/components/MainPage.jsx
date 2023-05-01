import Table from "./Table";
import Form from "./Form";

const MainPage = ({ data,newUser,formChange,submit}) => {
  return (
    <>
      <main className="mt-4">
        <div className="container">

          <div className="row mb-4">
            <div className="col">
              {/* {console.log(formChange)} */}
              <Form formChange={formChange} newUser={newUser} submit={submit}/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h2>Name: {newUser.fullName()}</h2>
              <h2>Email: {newUser.email}</h2>
              <h2>Contact:{newUser.contact}</h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Table data={data} />
            </div>
          </div>


        </div>
      </main>
    </>
  );
};

export default MainPage;
