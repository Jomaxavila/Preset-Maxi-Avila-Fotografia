function Flex (props) {
	return(
<div style={{display: "flex", flexWrap: "wrap", justifyContent:"space-around"}}> 
{props.children}
</div>
	)
}
export default Flex;