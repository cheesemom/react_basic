const Main = ({ mi, work }) => {
    // 바깥에서 주석할 때
    return (
        <main>
            {/* 안쪽에서 주석할 때 */}
            {mi}는 {work} 산다.
        </main>
    )
}

// 전달받은 값이 없을 때 기본으로 전해주는 값
Main.defaultProps = {
    work: '놀기'
}

export default Main;