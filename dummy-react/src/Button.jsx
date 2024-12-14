export function Button(props) {
  return <button onClick={(e) => {props.clickHandler(e)}}>{props.text}</button>
}