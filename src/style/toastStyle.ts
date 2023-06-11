interface IPositionStype {
  [key: string]: {
    place: string;
    animation: string;
  };
}

interface IStatusStyle {
  [key: string]: string;
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

const statusStyle: IStatusStyle = {
  Success: 'bg-[#07bc0c]',
  Warning: 'bg-[#f1c40f]',
  Error: 'bg-[#e74c3c]',
};

export { positionStyle, statusStyle };
