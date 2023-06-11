import { IToastList } from '@/App';
import React, { useCallback, useEffect } from 'react';
import { ReactComponent as CloseIcon } from 'src/assets/close.svg';

interface IPositionStype {
  [key: string]: {
    place: string;
    animation: string;
  };
}

function Toast({
  toastList,
  setToastList,
  position,
}: {
  toastList: IToastList;
  setToastList: React.Dispatch<React.SetStateAction<IToastList>>;
  position: string;
}) {
  const positionStyle: IPositionStype = {
    'top-left': {
      place: 'top-[4rem] left-[4rem]',
      animation: 'animate-toast-left',
    },
    'top-center': {
      place: 'top-[4rem] right-[50%] translate-x-[50%]',
      animation: 'animate-toast-top',
    },
    'top-right': {
      place: 'top-[4rem] right-[4rem]',
      animation: 'animate-toast-right',
    },
    'bottom-left': {
      place: 'bottom-[4rem] left-[4rem]',
      animation: 'animate-toast-left',
    },
    'bottom-center': {
      place: 'bottom-[4rem] right-[50%] translate-x-[50%]',
      animation: 'animate-toast-bottom',
    },
    'bottom-right': {
      place: 'bottom-[4rem] right-[4rem]',
      animation: 'animate-toast-right',
    },
  };

  const closeToastMessage = useCallback(
    (toastId: number) => {
      const newToastList = toastList[position].filter(
        (toast) => toast.id !== toastId,
      );
      setToastList((toastList) => ({
        ...toastList,
        [position]: newToastList,
      }));
    },
    [toastList],
  );

  useEffect(() => {
    if (toastList[position][0]) {
      const timer = setTimeout(() => {
        if (toastList[position].length) {
          closeToastMessage(toastList[position][0].id);
        }
      }, Number(toastList[position][0].delay));
      return () => {
        clearTimeout(timer);
      };
    }
  }, [toastList]);

  return (
    <div
      className={`fixed ${positionStyle[position].place} flex flex-col gap-2`}>
      {toastList[position].map((toast) => (
        <div
          key={toast.id}
          className={`relative flex h-[6rem] w-[30rem] ${positionStyle[position].animation} items-center justify-center rounded-md bg-black-100`}>
          <p className="text-white">{toast.message}</p>
          <button
            onClick={() => closeToastMessage(toast.id)}
            className="absolute right-3 top-3 p-2">
            <CloseIcon className="h-[1rem] w-[1rem] fill-white" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Toast;
