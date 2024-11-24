"use client";

import { upvoteAction } from '@/actions';
import Image from 'next/image'
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

export function SubmitButton() {
    const {pending} = useFormStatus();

    return (
         <button 
            type='submit' 
            disabled = {pending}
            aria-disabled={pending}
            className='min-w-[120px]'
            >    
            {pending ? <Image 
                src='/static/icons/loading-spinner.svg' 
                width="30" 
                height="30" 
                alt='reloading'
                className='m-auto'
                />
                : "Up Vote!"}
        </button>
    )
}

export default function Upvote({voting, id}: {voting: number, id: string}) {

    const initialState = {
        id,
        voting,
    }

    const [state, dispatch] = useActionState(upvoteAction, initialState);

    return (
        <form action={dispatch}>
            <div className='mb-6 flex'>
                <Image 
                    src = "/static/icons/star.svg"
                    width= "24"
                    height= "24"
                    alt = "star icon"
                />
                <p className='pl-2'>{state.voting}</p>
            </div>

           <SubmitButton />
        </form>
    )
}
