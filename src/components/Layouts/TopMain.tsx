import React from 'react';

type Props = {
    children: any
}

export const TopMain = (props:Props) => {
const { children } = props
  return (
    <main className="
        bg-white
        ">
        {children}
    </main>
  )
};
