import { useState } from 'react';
import Rodape from '../components/Rodape';
import Cabecalho from '../components/Cabecalho';
import './Itens.css'
import Botao from '../components/Botao';
const ItensPage = function(){
        //let estado = 'INICIAL';
        const [estado, setEstado] = useState('INICIAL');

        const botaoCriarClicado = function() {
            //estado = 'CRIAR';
            setEstado('CRIAR');
        };
    return (
        <>
        <Cabecalho />
        
        <main>
        <button onClick={botaoCriarClicado}>Teste</button>
            <h1>Itens</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            
            <Botao texto="Criar" />
                {(estado === 'INICIAL') && (
                    <Botao texto="Criar" />
                )}
                {(estado === 'CRIAR') && (
            
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
                    <Botao texto="Salvar" />
                    <Botao texto="Cancelar" />
                </div>
            </form>)
            }
           
        </main>
            
           <Rodape />
        </>
    );
};
export default ItensPage;