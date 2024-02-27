import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'
import Card from './components/Card.jsx'
import Button from './Button/Button.jsx'
import Button2 from './components/Button2.jsx'
import Student from './components/Student.jsx'
import UserGreeting from './components/UserGreeting.jsx'

function App() {
  
  return(
    <>
    <Header/>
    <UserGreeting isLoggedIn={true} username="test"/>
    <Food/>
    <Student name="test" age={30} isStudent={true}/>
    <Student name="test2" age={45} isStudent={false}/>
    <Student/>
    <Button/>
    <Button2/>
    <Card/>
    <Card/>
    <Footer/>
    </>
  );
}

export default App
