import React, { useState } from 'react';
import Toast from 'src/toast/toast';

export interface IFormInput {
  id: number;
  position: string;
  delay: string;
  message: string;
}

function App() {
  const [formValue, setFormValue] = useState({
    position: '',
    delay: '3000',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
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
            <div>
              <input
                name="position"
                type="radio"
                id="top-left"
                value="top-left"
                onInput={handleChange}
                required
                defaultChecked={true}
              />
              <label className="text-Body" htmlFor="top-left">
                top-left
              </label>
            </div>
            <div>
              <input
                name="position"
                type="radio"
                id="top-center"
                value="top-center"
                onInput={handleChange}
              />
              <label className="text-Body" htmlFor="top-center">
                top-center
              </label>
            </div>
            <div>
              <input
                name="position"
                type="radio"
                id="top-right"
                value="top-right"
                onInput={handleChange}
              />
              <label className="text-Body" htmlFor="top-right">
                top-right
              </label>
            </div>
            <div>
              <input
                name="position"
                type="radio"
                id="bottom-left"
                value="bottom-left"
                onInput={handleChange}
              />
              <label className="text-Body" htmlFor="bottom-left">
                bottom-left
              </label>
            </div>
            <div>
              <input
                name="position"
                type="radio"
                id="bottom-center"
                value="bottom-center"
                onInput={handleChange}
              />
              <label className="text-Body" htmlFor="bottom-center">
                bottom-center
              </label>
            </div>
            <div>
              <input
                name="position"
                type="radio"
                id="bottom-right"
                value="bottom-right"
                onInput={handleChange}
              />
              <label className="text-Body" htmlFor="bottom-right">
                bottom-right
              </label>
            </div>
          </section>
          <section>
            <h2 className="mb-[1rem] text-SubTitle">Delay(ms)</h2>
            <input
              type="number"
              name="delay"
              onChange={handleChange}
              defaultValue={3000}
              step={1000}
              className="rounded-lg bg-blue-10 p-[0.5rem] text-Body"
            />
          </section>
          <button
            type="submit"
            className="absolute bottom-10 left-10 h-[6rem] w-[20rem] rounded-2xl bg-blue-100 text-Body text-white">
            Toast Button
          </button>
        </form>
      </div>
      <Toast />
    </>
  );
}

export default App;
