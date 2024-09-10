import React from 'react'

const Button = () => {
    return (
        <button class="relative xl:flex hidden lg:inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[2px] focus:outline-none"><span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#007f7f_0%,#009494_50%,#00b3b3_100%)]"></span><span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone animate-wiggle animate-infinite animate-duration-1000 animate-ease-out"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>+998 95 555 55 39</span></button>
    )
}

export default Button