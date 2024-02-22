import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import Card from './components/Card.jsx'
import Button from './Button/Button.jsx'
import Button2 from './components/Button2.jsx'
import Student from './components/Student.jsx'

function App() {
  
  return(
    <>
    <Header/>
    <Food/>
    <Student name="test" age={30} isStudent={true}/>
    <Student name="test2" age={45} isStudent={false}/>
    <Student name="test3" age={80} isStudent={true}/>
    <Button/>
    <Button2/>
    <Card/>
    <Card/>
    <Footer/>
    </>
  );
}

export default App
