function InputBar({inputValue, onInputValueChange, onAddItem}) {
    return (
        <div>
            <input id='todoinput' className='todoInput' value={inputValue} type="text"
                placeholder="무엇이든 시도 할 수 있다."
                onChange={(event) => { onInputValueChange(event.target.value) }} />
            <button className='submit_btn' onClick={onAddItem}>추가</button>
        </div>
    );
}

export default InputBar;