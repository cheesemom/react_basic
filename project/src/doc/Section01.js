
import '../css/Section01.css'

const Section01 = () => {
    return (
        <section className="about">
            <h2><span className="t_b">CEO's</span> GREETINGS</h2>
            <p>귀여운 산리오 쿠로미</p>
            <div className="container">
                <div className="des">
                    <p className="tit">
                        웹서비스의 <span className="t_b">새로운 미래를</span><br />
                        <span className="t_b">우투드영투드우</span>가 만들어 가겠습니다.
                    </p>

                    <p>
                        마이멜로디는 밝고 명랑하며 남동생을 아끼는 여자아이예요. <br />
                        마이멜로디의 보물은 할머니가 만들어준 귀여운 두건이랍니다. 좋아하는 음식은 아몬드파운드 케이크고, 엄마와 함께 쿠키
                        굽는 것을 좋아해요.
                    </p>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                        Repellat incidunt illo, asperiores fugiat quo quam fuga magnam beatae<br />
                        culpa perspiciatis consequuntur natus obcaecati iure repudiandae.
                    </p>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />
                        Tenetur, modi sequi quaerat architecto voluptate quasi.
                    </p>

                    <p>우투드영투드우 임직원 일동</p>
                </div>
                <figure>
                    <img src="./img/4.jpg" alt="" />
                </figure>
            </div>

            <div className="inner">
                <h3>주요현황</h3>
                <div className="responsive-table">
                    <table className="table">
                        <caption>* description</caption>
                        <tbody>
                            <tr>
                                <th>주 소</th>
                                <td>부산시 동래구 사직동 1234-56 쌍둥이 돼지국밥 옆</td>
                                <th>전화번호</th>
                                <td>051-783-2317</td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td>051-783-2317</td>
                                <th>전화번호</th>
                                <td>051-783-2317</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}


export default Section01;