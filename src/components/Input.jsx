import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Input = () => {
    return (
        <>
            <form action='' method='post'>
                <input type="text" name="todo" />   
            </form>
            <button><FontAwesomeIcon icon={faPlus}/></button>
        </>
    )
}

export default Input