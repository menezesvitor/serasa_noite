import { useState } from 'react';
import Rodape from '../components/Rodape';
import Cabecalho from '../components/Cabecalho';
import './Itens.css'
import Botao from '../components/Botao';
enum Estado {
    Inicial,
    Criar
}

const ItensPage = function() {
    const [estado, setEstado] = useState(Estado.Inicial);

    const botaoCriarClicado = function() {
        //estado = 'CRIAR';
        setEstado(Estado.Criar);
    }

    const botaoSalvarClicado = function() {
        //estado = 'INICIAL';
        setEstado(Estado.Inicial);  
    };
    const botaoCancelarClicado = function() {
        //estado = 'INICIAL';
        setEstado(Estado.Inicial);  
    };

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
            
            {(estado === Estado.Inicial) && (
                <Botao texto="Criar" clique={botaoCriarClicado}/>
            )}
            {(estado === Estado.Criar) && (
        
                <form className='item'>
                    <label>
                        Nome:
                        <input type="text" placeholder="Nome" />
                    </label>
                    <label>
                        Decrição:
                        <textarea placeholder="Descrição"></textarea>
                    </label>

                    <div className='btns'>
                        <Botao texto="Salvar" clique={botaoSalvarClicado} />
                        <Botao texto="Cancelar" clique={botaoCancelarClicado} />
                    </div>
                </form>
            )}
           
        </main>
            
           <Rodape />
        </>
    );
};
export default ItensPage;