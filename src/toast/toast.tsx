import { IFormInput } from '@/App';
import React, { useCallback, useEffect } from 'react';
import { ReactComponent as CloseIcon } from 'src/assets/close.svg';

function Toast({
  toastList,
  setToastList,
}: {
  toastList: IFormInput[];
  setToastList: React.Dispatch<React.SetStateAction<IFormInput[]>>;
}) {
  const closeToastMessage = useCallback(
    (toastId: number) => {
      const newToastList = toastList.filter((toast) => toast.id !== toastId);
      setToastList(newToastList);
    },
    [toastList],
  );

  useEffect(() => {
    if (toastList[0]) {
      const timer = setTimeout(() => {
        if (toastList.length) {
          closeToastMessage(toastList[0].id);
        }
      }, Number(toastList[0].delay));
      return () => {
        clearTimeout(timer);
      };
    }
  }, [toastList]);

  return (
    <div className="fixed right-10 top-10 flex flex-col gap-2">
      {toastList.map((toast) => (
        <div
          key={toast.id}
          className="relative flex h-[6rem] w-[30rem] items-center justify-center rounded-md bg-black-100">
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
