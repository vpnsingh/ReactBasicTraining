import logo from './logo.svg';
import './App.css';
import Basic from './components/Basic';

function App() {

  const employeeData = [
    { id: 101, name: 'John', salary: 25000 },
    { id: 102, name: 'David', salary: 35000 },
    { id: 103, name: 'Charles', salary: 85000 },
    { id: 104, name: 'Gary', salary: 50000 }
  ]

  return (
    <div className="container">
      <h1 className='text-center'>React Fundamentals</h1>
      <Basic name="Alex" employee={employeeData} />
    </div>
  );
}

export default App;
