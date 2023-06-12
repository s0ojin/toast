import React, { useCallback, useRef, useState } from 'react';
import ToastList from 'src/toast/ToastList';

export interface IFormInput {
  id: number;
  position: string;
  delay: string | null;
  message: string;
  status: string;
}

export interface IToastList {
  [key: string]: IFormInput[];
}

function App() {
  console.log('rerendering');
  const POSITIONS = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];
  const STATUS = ['Success', 'Warning', 'Error'];
  const [toastList, setToastList] = useState<IToastList>({
    'top-left': [],
    'top-center': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-center': [],
    'bottom-right': [],
  });

  const positionRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const statusRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const delayRef = useRef<HTMLInputElement>(null);

  const showToastMessage = useCallback(
    (message: string) => {
      const positionRef =
        positionRefs
          .map(({ current }) => current)
          .find((current) => current?.checked)?.value || 'top-left';

      const statusRef =
        statusRefs
          .map(({ current }) => current)
          .find((current) => current?.checked)?.value || 'Success';

      const toastOptions = {
        position: positionRef,
        delay: delayRef.current?.value || null,
        id: Date.now(),
        message: message,
        status: statusRef,
      };

      setToastList((toastList) => ({
        ...toastList,
        [positionRef]: [...toastList[positionRef], toastOptions],
      }));
    },
    [toastList],
  );

  const clearAllToastMessage = () => {
    setToastList({
      'top-left': [],
      'top-center': [],
      'top-right': [],
      'bottom-left': [],
      'bottom-center': [],
      'bottom-right': [],
    });
  };

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-blue-10">
        <h1 className="mb-[1rem] text-Title">options</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex h-[30%] w-[50%] items-center justify-evenly rounded-2xl bg-white">
          <section className="flex flex-col gap-[1rem]">
            <h2 className="text-SubTitle">Position</h2>
            {POSITIONS.map((position, index) => (
              <div key={position}>
                <input
                  ref={positionRefs[index]}
                  name="position"
                  type="radio"
                  id={position}
                  value={position}
                  defaultChecked={position === 'top-left' && true}
                />
                <label className="text-Body" htmlFor={position}>
                  {position}
                </label>
              </div>
            ))}
          </section>
          <section className="flex flex-col gap-[1rem]">
            <h2 className="text-SubTitle">Status</h2>
            {STATUS.map((status, index) => (
              <div key={status}>
                <input
                  ref={statusRefs[index]}
                  name="Status"
                  type="radio"
                  id={status}
                  value={status}
                  defaultChecked={status === 'Success' && true}
                />
                <label className="text-Body" htmlFor={status}>
                  {status}
                </label>
              </div>
            ))}
          </section>
          <section>
            <h2 className="mb-[1rem] text-SubTitle">Delay(ms)</h2>
            <input
              ref={delayRef}
              type="number"
              name="delay"
              defaultValue={3000}
              step={1000}
              className="rounded-lg bg-blue-10 p-[0.5rem] text-Body"
            />
          </section>
          <button
            type="submit"
            onClick={() => showToastMessage('메세지를 변경하겠습니다.')}
            className="absolute bottom-10 left-10 h-[6rem] w-[20rem] rounded-2xl bg-blue-100 text-Body text-white">
            Toast Button
          </button>
        </form>
        <button
          onClick={clearAllToastMessage}
          className="absolute bottom-10 right-10 h-[6rem] w-[20rem] rounded-2xl bg-blue-100 text-Body text-white">
          Clear
        </button>
      </div>
      {Object.keys(toastList).map((toasts) => (
        <ToastList
          key={toasts}
          toastList={toastList[toasts]}
          setToastList={setToastList}
          position={toasts}
        />
      ))}
    </>
  );
}

export default App;
