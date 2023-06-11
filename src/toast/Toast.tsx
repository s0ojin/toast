import React, { useCallback, useEffect } from 'react';
import { positionStyle, statusStyle } from 'src/style/toastStyle';
import { ReactComponent as CloseIcon } from 'src/assets/close.svg';
import { IFormInput, IToastList } from '@/App';
import { ReactComponent as SuccessIcon } from 'src/assets/success.svg';
import { ReactComponent as WarningIcon } from 'src/assets/warning.svg';
import { ReactComponent as ErrorIcon } from 'src/assets/error.svg';
import ProgressBar from 'src/toast/ProgressBar';

interface IToastProps {
  position: string;
  message: string;
  delay: string | null;
  id: number;
  status: string;
  toastList: IFormInput[];
  setToastList: React.Dispatch<React.SetStateAction<IToastList>>;
}

function Toast({
  position,
  message,
  delay,
  id,
  status,
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
    if (delay) {
      const timer = setTimeout(() => {
        if (toastList.length) closeToastMessage(toastList[0].id);
      }, Number(delay));
      return () => {
        clearTimeout(timer);
      };
    }
  }, [toastList]);

  const displayIcon = () => {
    if (status === 'Success') return <SuccessIcon className="toast-icon" />;
    if (status === 'Warning') return <WarningIcon className="toast-icon" />;
    if (status === 'Error') return <ErrorIcon className="toast-icon" />;
  };

  return (
    <div
      className={`relative flex h-[6rem] w-[30rem] overflow-hidden ${positionStyle[position].animation} items-center rounded-md p-4 ${statusStyle[status]}`}>
      {displayIcon()}
      <p className="ml-[1rem] text-[14px] text-white">{message}</p>
      <button
        onClick={() => closeToastMessage(id)}
        className="absolute right-3 top-3 p-2">
        <CloseIcon className="h-[1rem] w-[1rem] fill-white" />
      </button>
      <ProgressBar delay={delay} />
    </div>
  );
}

export default Toast;
