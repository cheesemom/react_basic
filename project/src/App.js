import './css/basic.css';
import Section01 from './doc/Section01';
import Section02 from './doc/Section02';


const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>Section01</li>
          <li>Section02</li>
        </ul>
      </nav>

      <Section01 />
      <Section02 />
    </>
  )
}


export default App;