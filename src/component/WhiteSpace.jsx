
function WhiteSpace({ repeat }) {
    // br 태그를 생성하고 반환하는 함수
    return(
        Array.from({ length: repeat }, (_, index) => <br key={index} />)
    )
}
export default WhiteSpace