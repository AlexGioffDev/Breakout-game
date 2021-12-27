
const Container = (props) => {
  return (
    <div className="h-full w-full grid grid-cols-6 grid-rows-6">
      {props.children}
    </div>
  )
}


export default Container;

