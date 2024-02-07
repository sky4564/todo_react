import 'App.css';
import { useEffect, useState } from 'react';
import Board from 'component/todoBoard';
import RenderingList from 'component/RenderingList';
import MyButton from 'component/MyButton';
import WhiteSpace from 'component/WhiteSpace';
import InputBar from 'component/InputBar'


// todo 적을 인풋창 + 제출 버튼
// 제출한거 표시되는 게시판
// 게시되어있는거 삭제하는 버튼

function MainPage() {
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

    return (
        <div>
            <RenderingList />
            <WhiteSpace repeat={5} />
            {/* 컴포넌트 사용 + props 활용 */}
            <MyButton count={count} onClick={counting} />
            <InputBar
                inputValue={inputValue}
                onInputValueChange={setinPutValue}
                onAddItem={addItem}
            />
            <Board todoList={todoList} />
        </div>
    );
}


export default MainPage;
