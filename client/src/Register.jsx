import { useState } from "react";
import axios from 'axios';


export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(e) {
        e.preventDefault();
        await axios.post('/register', {username, password});
    }
    
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="w-[40%] max-md:w-[50%] max-sm:w-[90%]">
                <div className="mb-4">
                    <h1 className="font-bold font-Inter text-[20px]">Register</h1>
                    <p className="font-medium font-Inter text-[15px]">Create account to ChatMate to access all features.</p>
                </div>
                <form onScroll={register}>
                    <div>
                        <input type="text" 
                            value={username} 
                            onChange={e => setUsername(e.target.value)} 
                            placeholder="Create your username"
                            className="w-full font-medium font-Inter border-2 border-black outline-none px-[10px] py-[5px] mb-2"/>
                    </div>
                    <div>
                        <input type="password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            placeholder="Create your password"
                            className="w-full font-medium font-Inter border-2 border-black outline-none px-[10px] py-[5px] mb-2"/>
                    </div>
                    <button type="submit" className="w-full font-medium font-Inter bg-violet-700 text-white px-[10px] py-[5px]">Create Account</button>
                </form>
            </div>
        </div>
    );
}