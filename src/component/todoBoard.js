import TodoItem from "./todoItem"

function todoBoard(props) {
    return (        
        <div className="todoBoard">
            <h2>완료시 더블 클릭 ^^</h2>
            {props.todoList.map((item, index) => <TodoItem item={item} key={index}/>)}
        </div>
    )
}

export default todoBoard