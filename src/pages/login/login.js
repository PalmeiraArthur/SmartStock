import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault(); 

 
        if (username === 'usuario123' && password === 'senha123') {

            navigate('/home');
        } else {
            alert('Usuário ou senha incorretos!');
        }
    };

    return (
        <div className='flex justify-center'>
            <img src='./img/logoPngAzul.png'/>
            <div className=' absolute justify-center left-[850px] bottom-[300px] z-10 flex flex-col gap-[20px]  '>
                <h1 className='text-white text-[30px] text-center font-semibold'>Acessar <br></br>estabelecimento</h1>
                <form className='flex flex-col gap-[20px]' onSubmit={handleLogin}>
                    <label>
                        <input className='bg-transparent border-[2px] p-[8px] rounded-md border-green-900 placeholder-green-900 placeholder:font-semibold placeholder:text-[20px] text-[20px] text-white' placeholder='Usuario:' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>

                    <label>
                        <input className='bg-transparent border-[2px] p-[8px] rounded-md border-green-900 placeholder-green-900 placeholder:font-semibold placeholder:text-[20px] text-[20px] text-white' placeholder='Senha:' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
        
                    <button className='bg-green-900 text-white rounded-md w-[250px] h-[50px] text-[22px] font-bold' type="submit">Entrar</button>
                </form>
            </div>
        <div className='relative'> 
            <img className='fixed left-0 bottom-[-50px] w-screen z-0' src='./img/fundoLogin.svg' />
        </div>
         
            
        </div>
    );
}

export default LoginPage;
