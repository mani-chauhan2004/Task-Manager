import {React, useState} from 'react'

export default function TaskInput({addTask}){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = (element) => {
        element.preventDefault();
        addTask({ title, description });
        setTitle('');
        setDescription('');
    };
      
    return(
        <form onClick={handleSubmit} className='flex w-full align-center justify-center mt-4 flex-col'>
            <div className='flex flex-col w-full ml-auto mr-auto'>
                <label className=' ml-20 pb-1 text-lg font-bold'>Title</label>
                <input value={title} onChange={inputEle => inputEle.setTitle(inputEle.target.value)} type='text' className=' p-4 ml-20 w-3/12 border-2 border-yellow-400 h-10 rounded-xl'></input>
            </div>

            <div className='flex flex-col w-full ml-auto mr-auto'>
                <label className=' ml-20 pb-1 text-lg font-bold'>Description</label>
                <textarea input value={title} onChange={inputEle => inputEle.setTitle(inputEle.target.value)} type='text' className='p-4 ml-20 w-3/12 border-2 border-yellow-400 h-64 rounded-xl active:border-yellow-500'></textarea>
            </div>
            <div className='flex flex-col w-full ml-auto mr-auto'>
                <button className=' mt-4 ml-20 w-32 text-m font-bold bg-yellow-500 text-gray-100 p-4 rounded-lg' type='submit'>Add Task</button>
            </div>
                
            
        </form>
    );
}