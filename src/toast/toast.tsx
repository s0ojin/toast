import React, { useCallback, useEffect } from 'react';
import { positionStyle } from 'src/style/toastStyle';
import { ReactComponent as CloseIcon } from 'src/assets/close.svg';
import { IFormInput, IToastList } from '@/App';

interface IToastProps {
  position: string;
  message: string;
  delay: string | null;
  id: number;
  toastList: IFormInput[];
  setToastList: React.Dispatch<React.SetStateAction<IToastList>>;
}

function Toast({
  position,
  message,
  delay,
  id,
  setToastList,
  toastList,
}: IToastProps) {
  const closeToastMessage = useCallback(
    (toastId: number) => {
      const newToastList = toastList.filter((toast) => toast.id !== toastId);
      setToastList((toastList) => ({
        ...toastList,
        [position]: newToastList,
      }));
    },
    [toastList],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      closeToastMessage(id);
    }, Number(delay));
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`relative flex h-[6rem] w-[30rem] ${positionStyle[position].animation} items-center justify-center rounded-md bg-black-100`}>
      <p className="text-white">{message}</p>
      <button
        onClick={() => closeToastMessage(id)}
        className="absolute right-3 top-3 p-2">
        <CloseIcon className="h-[1rem] w-[1rem] fill-white" />
      </button>
    </div>
  );
}

export default Toast;
