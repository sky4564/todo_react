import './App.css';
import { useEffect, useState } from 'react';
import Board from './component/todoBoard';
import Renderer from './component/Renderer'
import RenderingList from './component/RenderingList';
import MyButton from './component/MyButton';
import WhiteSpace from './component/WhiteSpace';

// todo 적을 인풋창 + 제출 버튼
// 제출한거 표시되는 게시판
// 게시되어있는거 삭제하는 버튼
function App() {
    useEffect(() => {
    })

    const [count, setcount] = useState(0)
    function counting() {
        setcount(count + 1)
    }
    const [inputValue, setinPutValue] = useState('')
    const [todoList, setTodoList] = useState([])
    const addItem = () => {
        setTodoList([...todoList, inputValue])
        //이거 찾아서 하는게 아니라 useState로 하는거누
        console.log(document.getElementById('todoinput').value)
        setinPutValue('')
    }

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
            {render ? <Renderer/>  :  <div> render value == false </div> }
            {/* {render && <Renderer />}     */}
            {/* -------------------------------------------*/}

            
            {/* 렌더링 리스트 */}
            <RenderingList />
            <WhiteSpace repeat={3}/>            
            {/* 컴포넌트 사용 + props 활용 */}
            <MyButton count={count} onClick={counting} />
            <MyButton count={count} onClick={counting} />
                        
            <input id='todoinput' className='todoInput' value={inputValue} type="text"
                placeholder="무엇이든 시도 할 수 있다."
                onChange={(event) => { setinPutValue(event.target.value) }} />

            <button className='submit_btn' onClick={addItem}>추가</button>

            <Board todoList={todoList} />
        </div>
    );
}


export default App;
