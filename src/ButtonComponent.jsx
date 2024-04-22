function ButtonComponents(props) {
    console.log(props)
    return(<>
<button style={props.style}>{props.clickMe} </button>
</>)
}

export default ButtonComponents