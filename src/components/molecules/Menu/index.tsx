import { Link$Atom } from "../../atoms/Link/index"
import { Nav_ST } from "./Nav"

export const Menu$Molecule = () => { 
    return ( 
        <Nav_ST>
            <Link$Atom path="/" name="Home" />
            <Link$Atom path="/about" name="About" />
        </Nav_ST>
    )
}