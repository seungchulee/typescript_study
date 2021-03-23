import ReactDOM from 'react-dom';
import Parent from './props/Parent'
import GuestList from './state/GuestList'
import UserSearch from './refs/UserSearch'
import EventComponent from './events/EventComponent'

const App = () => {
    return (
        <div>
            <UserSearch/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)