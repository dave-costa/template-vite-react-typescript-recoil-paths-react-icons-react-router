import { ReactNode } from "react"
import { SocialLinkST } from "./Div"

export const Social$Molecule = ({children, name, path}:SOCIAL) => { 
    return (
        <SocialLinkST href={path}>
            <span>{children}</span>
            <span>{name}</span>
        </SocialLinkST>
    )
}

interface SOCIAL { 
    path: string 
    name: string
    children: ReactNode
}