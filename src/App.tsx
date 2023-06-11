import React, { useCallback, useRef, useState } from 'react';
import ToastList from './toast/ToastList';

export interface IFormInput {
  id: number;
  position: string;
  delay: string | null;
  message: string;
}

export interface IToastList {
  [key: string]: IFormInput[];
}

function App() {
  console.log('rerendering');
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
  const delayRef = useRef<HTMLInputElement>(null);

  const showToastMessage = useCallback(
    (message: string) => {
      const positionRef =
        positionRefs
          .map(({ current }) => current)
          .find((current) => current?.checked)?.value || 'top-left';

      const toastOptions = {
        position: positionRef,
        delay: delayRef.current?.value || null,
        id: Date.now(),
        message: message,
      };

      setToastList((toastList) => ({
        ...toastList,
        [positionRef]: [...toastList[positionRef], toastOptions],
      }));
    },
    [toastList],
  );

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-blue-10">
        <h1 className="mb-[1rem] text-Title">options</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex h-[30%] w-[50%] items-center justify-evenly rounded-2xl bg-white">
          <section className="flex flex-col gap-[1rem]">
            <h2 className="text-SubTitle">Position</h2>
            <div>
              <input
                ref={positionRefs[0]}
                name="position"
                type="radio"
                id="top-left"
                value="top-left"
                defaultChecked={true}
              />
              <label className="text-Body" htmlFor="top-left">
                top-left
              </label>
            </div>
            <div>
              <input
                ref={positionRefs[1]}
                name="position"
                type="radio"
                id="top-center"
                value="top-center"
              />
              <label className="text-Body" htmlFor="top-center">
                top-center
              </label>
            </div>
            <div>
              <input
                ref={positionRefs[2]}
                name="position"
                type="radio"
                id="top-right"
                value="top-right"
              />
              <label className="text-Body" htmlFor="top-right">
                top-right
              </label>
            </div>
            <div>
              <input
                ref={positionRefs[3]}
                name="position"
                type="radio"
                id="bottom-left"
                value="bottom-left"
              />
              <label className="text-Body" htmlFor="bottom-left">
                bottom-left
              </label>
            </div>
            <div>
              <input
                ref={positionRefs[4]}
                name="position"
                type="radio"
                id="bottom-center"
                value="bottom-center"
              />
              <label className="text-Body" htmlFor="bottom-center">
                bottom-center
              </label>
            </div>
            <div>
              <input
                ref={positionRefs[5]}
                name="position"
                type="radio"
                id="bottom-right"
                value="bottom-right"
              />
              <label className="text-Body" htmlFor="bottom-right">
                bottom-right
              </label>
            </div>
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
      </div>
      <>
        {Object.keys(toastList).map((toasts) => (
          <ToastList
            key={toasts}
            toastList={toastList[toasts]}
            setToastList={setToastList}
            position={toasts}
          />
        ))}
      </>
    </>
  );
}

export default App;
