import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


import Select2 from 'react-select2-wrapper';

const $ = window.$;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {

    };

    this.mySelect2 = React.createRef();
    //this.myChosen = React.createRef();
  };




  // shouldComponentUpdate() {
  //   return false;
  // }



  handleChange = () => {
    alert('changed');

    //$('#mySelect2').val('US'); // Change the value or make some change to the internal state
    //$('#mySelect2').trigger('change.select2'); // Notify only Select2 of changes
  }

  componentDidMount() {
    //$('.js-example-basic-single').select2({change:this.handleChange});
    //$('.js-example-basic-single').select2();
    $(".chosen-select").chosen();
    $('.js-example-basic-single').select2({
      placeholder: "Select a state",
      //allowClear: true
    });

    $('#ki').on('change', function (e) {
      // triggers when whole value changed
      console.log("value changed");
      alert(e.target.value);
      console.log(e.target);
    });

    $(this.mySelect2.current).on('change', function () { alert('***********************'); });

    $('.js-example-basic-single').on("change", function (e) {
      alert('-----------hey: ' + e.target.value);
      alert(e.currentTarget.innerText);
      alert(e.target.tagName.innerText);
      console.log('-----------hey');
      console.log(e.currentTarget);
      //console.log(e.currentTarget.innerHtml);
      console.log(e.currentTarget.tagName);

    });

    // $('select').on("click", function () {
    //   //$(".js-example-disabled").prop("disabled", false);
    //   alert('-----------hey');
    //   console.log('-----------hey');
    // });

    // $(this.mySelect2.current).select2({
    //   onChange={handleChange}
    // });
  }


  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
        </header> */}

        <div className="jumbotron text-center">
          <h1>My First Bootstrap Page</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
            </div>
            <div className="col-sm-3">
              <h3>react-select2-wrapper</h3>
              <div>
              <Select2
                multiple
                data={['bug', 'feature', 'documents', 'discussion']}
                options={
                  {
                    placeholder: 'search by tags',
                  }
                }
              />
              </div>

              <div style={{margin:'20px 0'}}>
              <Select2
                data={[
                  { text: 'bug', id: 1 },
                  { text: 'feature', id: 2 },
                  { text: 'documents', id: 3 },
                  { text: 'discussion', id: 4 },
                ]}
                options={{
                  placeholder: 'search by tags',
                }}
              />
              </div>


              <div>
              <Select2
                multiple
                defaultValue={[1, 4]}
                data={[
                  { text: 'bug', id: 1 },
                  { text: 'feature', id: 2 },
                  { text: 'documents', id: 3 },
                  { text: 'discussion', id: 4 },
                ]}
                options={{
                  placeholder: 'search by tags',
                }}
              />
              </div>


            </div>
            <div className="col-sm-3">
              <h3>Plugin Chosen</h3>
              <select className="chosen-select" id="ki" style={{ width: '100%' }}>
                <option value="AL">Alabama</option>
                <option value="WY">Wyoming</option>
                <option value="OH">Ohio</option>
                <option value="HA">Hamilton</option>
              </select>
            </div>
            <div className="col-sm-3">
              <h3>Plugin Select2</h3>
              <select className="js-example-basic-single" name="state" ref={this.mySelect2} style={{ width: '100%' }}>
                <option value="AL">Alabama</option>
                <option value="WY">Wyoming</option>
                <option value="OH">Ohio</option>
                <option value="HA">Hamilton</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
