import { NavLink } from 'react-router-dom'
import { LINK } from './types'
export const Link$Atom = (props: LINK) => {
    
    return (
        <NavLink  className={({isActive}) => isActive ? 'active': ''} {...props} to={props.path}>{props.name}</NavLink>
    )
}