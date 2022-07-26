import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";


function App() {
    return (
        <Wrapper>
            <Header />
            <Main mi="전상미" work="초콜렛을 자주 먹으면서" />
            <Main mi="김상미" work="치즈랑 놀고" />
            <Main mi="이상미" work="폰하면서" />
            <Main mi="윤상미" />
            <Footer />
        </Wrapper>
    )
}


export default App;