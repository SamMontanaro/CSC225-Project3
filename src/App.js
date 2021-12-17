import Employee from './Components/Employee';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="row justify-content-center mt-3">Employee Listing</h1>
        <div className="row justify-content-center mt-3">
          <Employee id="9912"/>
          <Employee id="9913"/>
          <Employee id="9914"/>
        </div>
        
        <div className="row justify-content-center">
          <Employee id="9915"/>
          <Employee id="9916"/>
          <Employee id="9917"/>
        </div>

        <div className="row justify-content-center mb-3">
          <Employee id="9919"/>
          <Employee id="9918"/>
          <Employee id="9920"/>
        </div>
      </div>
    </div>
  );
}

export default App;
