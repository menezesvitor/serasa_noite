import { FunctionComponent } from "react";
import "./Botao.css"
type Props = {
    texto: String
    clique?: ()  => void 
}
const Botao: FunctionComponent<Props> = function(props){
    return(
        <>
        <button onClick={props.clique}>{props.texto}</button>
        </>
    );
};

export default Botao;