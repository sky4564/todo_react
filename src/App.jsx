import './App.css';

import Renderer from './component/Renderer'
import MainPage from './view/mainPage'

// todo 적을 인풋창 + 제출 버튼
// 제출한거 표시되는 게시판
// 게시되어있는거 삭제하는 버튼
function App() {
    // =======================================================================================//
    // 조건부 컴포넌트 렌더링
    let render = true
    let renderItem
    // eslint-disable-next-line no-unused-vars
    render ? renderItem = <Renderer /> : renderItem = <div>render value == false</div>
    // =======================================================================================//

    return (
        <div className="App">
            {/* // 조건부 컴포넌트 렌더링 여러가지 형태로  */}
            {renderItem}
            {render ? <Renderer /> : <div> render value == false </div>}
            {/* {render && <Renderer />}     */}
            {/* -------------------------------------------*/}
            <MainPage />
        </div>
    );
}


export default App;
