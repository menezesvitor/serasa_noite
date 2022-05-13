import Rodape from '../components/Rodape';
import Cabecalho from '../components/Cabecalho';
import './Itens.css'
import Botao from '../components/Botao';
const ItensPage = function(){
    return (
        <>
        <Cabecalho />
        
        <main>
            <h1>Itens</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <Botao texto="criar"/> 
        </main>
            
           <Rodape />
        </>
    );
};
export default ItensPage;