import { useState } from 'react';
import axios from 'axios';

export default function Cadastro()
{

    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState(''); 
    const [resultado, setResultado] = useState(null);    

    async function cadastarAluno(e)
    {
        try 
        {
            await axios.post('http://localhost:3001/alunos', { nome, cidade, estado });

            setResultado("Aluno " + nome + " cadastrado com sucesso!");
            setNome("");
            setCidade("");
            setEstado("");
        } 
        catch (error) 
        {
            setResultado(error);
        }
    }

    return (
        <div>            
            <form className='destaque'>
                <h3>Cadastro de Alunos</h3>

                <p>
                    Digite o nome do aluno <br />
                    <input
                        type="text" value={nome} 
                        onChange={(e) => setNome(e.target.value)}
                    />
                </p>

                <p>
                    Digite a cidade do aluno <br />
                    <input
                        type="text" value={cidade} 
                        onChange={(e) => setCidade(e.target.value)}
                    />
                </p>

                <p>
                    Digite o estado<br />
                    <input
                        type="text" value={estado}  maxLength={2}
                        onChange={(e) => setEstado(e.target.value)}
                    />
                </p>

                <p>
                    <button type='button' className='botao' 
                    onClick={cadastarAluno}>Cadastrar</button>
                </p>

                <p className="mensagem">
                    {resultado}
                </p>

            </form>
        </div>
    );
}