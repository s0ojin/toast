import React from 'react';
import { IFormInput, IToastList } from '@/App';
import { positionStyle } from 'src/style/toastStyle';
import Toast from 'src/toast/Toast';

function ToastList({
  toastList,
  setToastList,
  position,
}: {
  toastList: IFormInput[];
  setToastList: React.Dispatch<React.SetStateAction<IToastList>>;
  position: string;
}) {
  return (
    <div
      className={`fixed ${positionStyle[position].place} flex flex-col gap-2`}>
      {toastList.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          delay={toast.delay}
          position={position}
          setToastList={setToastList}
          toastList={toastList}
        />
      ))}
    </div>
  );
}

export default ToastList;
