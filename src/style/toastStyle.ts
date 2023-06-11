interface IPositionStype {
  [key: string]: {
    place: string;
    animation: string;
  };
}

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

export { positionStyle };
