import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  const monga = "몽가";
  const DATA = [
    { id: 1, name: '전상미' },
    { id: 2, name: '김상미' },
    { id: 3, name: '윤상미' },
    { id: 4, name: '이상미' },
    { id: 5, name: '한상미' },
    { id: 6, name: '배상미' },
    { id: 7, name: '오상미' },
  ]

  return (
    <>
      <Header monga={monga} member={DATA} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
