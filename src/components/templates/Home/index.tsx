import { Social$Molecule } from "@molecules"
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { DivFlexST, SectionST, Title1ST } from "./Section"
export const Home$Template = () => { 
    return (
        <SectionST>
            <DivFlexST>
                <Title1ST>
                    <span>VITE +</span>
                    <span>REACT +</span>
                    <span>TYPESCRIPT</span>
                    
                </Title1ST>
            </DivFlexST>
            <DivFlexST>
                <Social$Molecule path="www.google.com" name="@dave-c">
                    <BsInstagram />
                </Social$Molecule>
                <Social$Molecule path="www.google.com" name="@dave-c">
                    <BsFacebook />
                </Social$Molecule>
                <Social$Molecule path="www.google.com" name="@dave-c">
                    <BsLinkedin />
                </Social$Molecule>
            </DivFlexST>
        </SectionST>
    )
}