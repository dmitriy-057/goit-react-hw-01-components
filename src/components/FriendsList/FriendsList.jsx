import css from './FriendsList.module.css'
import {FriendListItem} from 'components/FriendListItem/FriendListItem.jsx'
import PropTypes from 'prop-types'
export const FriendsList = ({friends}) => {
    return <ul className={css.friendList}>
    {friends.map(({id, avatar, name, isOnline}) =>  <FriendListItem key ={id} avatar={avatar} name={name} isOnline={isOnline}/>)}
  </ul>
}
FriendsList.PropType = {friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
}))}