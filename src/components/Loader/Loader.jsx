import { DotSpinner } from '@uiball/loaders'
import Flex from '../Flex/Flex'


function Loader() {
  return (
	<Flex>
		<DotSpinner size={110}speed={0.9} color="black" borderWidth="3px" padding="10px" margin="100px"/>		
	</Flex>
  )
}

export default Loader