import Header from "./Header";

function App() {
  // jsx 밖의 주석
  return (
    <header>
      {/* jsx 안의 주석 */}
      <Header style={{ color: 'skyblue' }} name="치즈" age={4} />
      {/* component 자체에는 Style을 줄 수가 없음? */}
      {/* style 줄 때는 {}괄호2개씩 + 여러 style 적용 시 세미클론X 쉼표O */}
      <nav>
        <ul>
          <li><a href="" style={{ color: 'skyblue', fontSize: '30px' }}>menu01</a></li>
          <li><a href="">menu02</a></li>
          <li><a href="">menu03</a></li>
          <li><a href="">menu04</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default App;