import { useState } from 'react'

function TodoItem(props) {
    const [clickCount, setClickCount] = useState(0);
    const handleDoubleClick = () => {
        setClickCount(clickCount + 1);    
        if (clickCount === 1) {
            console.log('더블클릭이 감지되었습니다!');
            
            // 여기에서 더블클릭에 대한 추가 작업을 수행할 수 있습니다.
            setClickCount(0); // 더블클릭 후 카운트 초기화
        }
    }

    return (
        <div className="todoItem" onClick={handleDoubleClick}>
            {props.item}
        </div>
    )
}

export default TodoItem