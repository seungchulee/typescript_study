import {Child} from './Child';

const GreatParent = () => {
    return (
        <Child color="red" onClick={() => console.log("CLICK!")}>
            arbitrary text
        </Child>
    )
}

export default GreatParent