import React from 'react';
import { ReactComponent as CloseIcon } from 'src/assets/close.svg';

function Toast() {
  return (
    <div className="fixed right-10 top-10 flex flex-col gap-2">
      <div className="relative flex h-[6rem] w-[30rem] items-center justify-center rounded-md bg-black-100">
        <p className="text-white">message</p>
        <button className="absolute right-3 top-3 p-2">
          <CloseIcon className="h-[1rem] w-[1rem] fill-white" />
        </button>
      </div>
    </div>
  );
}

export default Toast;
