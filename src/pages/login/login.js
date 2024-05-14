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
        <div className='flex flex-col justify-center items-center'>

            <img className='w-[330px] h-[330px]' src='./img/logoPngAzulSvg.svg'/>

            <div className='justify-center items-center flex flex-col gap-[50px] pt-[40px] p-[80px] rounded-lg bg-verde-smartStock '>

            <h1 className='text-white text-[30px] text-center font-semibold'>Acessar <br></br>estabelecimento</h1>
                <form className='flex flex-col gap-[50px] items-center' onSubmit={handleLogin}>
                    <div className='flex flex-col gap-[13px]'>
                    <label>
                        <input className='bg-transparent border-[2px] p-[8px] rounded-md border-white placeholder-white placeholder:opacity-50 placeholder:font-semibold placeholder:text-[20px] text-[20px] text-white focus:placeholder:opacity-0 focus:outline-none ' placeholder='Usuario:' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>

                    <label>
                        <input className='bg-transparent border-[2px] p-[8px] rounded-md border-white placeholder-white placeholder:opacity-50 placeholder:font-semibold placeholder:text-[20px] text-[20px] text-white focus:placeholder:opacity-0 focus:outline-none '  placeholder='Senha:' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>

                    </div>
        
                    <button className='bg-green-900 text-white rounded-md w-[250px] h-[50px] text-[22px] font-bold' type="submit">Entrar</button>
                </form>
            </div>
            
        </div>
    );
}

export default LoginPage;
