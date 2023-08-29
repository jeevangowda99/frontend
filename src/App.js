import logo from './logo.svg';
import './App.css';
import image from './Components/images.jpg';
import './color.css';
import jeevan1 from './jeevan1.jpeg';
import Demo from './Components/Demo';
import BasicButtons from './Components/Button';
import Textfiled from './Components/Textfiled';
import MediaCard from './Components/Card';
import Register from './Components/RegisterForm';
import Boostrap from './Components/Boostrap';
import Model from './Components/Model';
import Navbar from './Components/Navbar';
import Mbd from './Components/Mbd';
import Tabel from './Components/Tabel';
import Arrow from './Components/Arrow';
import Variable from './Components/Variable';
import Arraymethod from './Components/Arraymethod';
import Mpawork from './Components/Mpawork';
import Workclass from './Components/Workclass';


function App() {
  let myStyle = {
    backgroundColor: "yellow",
    color: "white"
  }
  let divstyles = {
    width: '200px',
    height: '200px',
    backgroundImage: `url(${image})`
  }
  let a = {
    color: "white",
    backgroundColor: "skyblue"
  }
  
  return (

    <div  >
      <h1 style={{ color: "red", backgroundColor: "blue"  }}>HELLO WORLD</h1>
      <h1 style={myStyle}>HELLO WORLD</h1>
      <img style={divstyles} src={image} />
      <h3 className="cal">Hello I am Jeevan</h3>


      <hr color='red' />
      <div style={{backgroundColor:"skyblue",width:"500px",marginLeft:"500px"}}>
        <img style={{height:100,marginLeft:"20px"}} src={jeevan1} />
        <h1 >Name:Jeevan</h1>
        <h2 style={{ color: "orenge"}}>Email:jeevangowdam22@gmail.com</h2>
        <h3 className="num">Phone_No:9980393014</h3>
      </div>
      <Demo/>
      <BasicButtons/><br/>
      

      <Textfiled/><br/>
      <MediaCard/>
      <hr color='orange'/>
      <Register/><br/>
     <Boostrap/>
     <Model/>
     <Navbar/>
     <Mbd/>
     <Tabel/>
     <Arrow/>
     <Variable/>
     <Arraymethod/>
     <Mpawork/>
     <Workclass/>
     


    </div>

  );
}

export default App;
