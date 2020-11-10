import * as React from 'react';
import './index.scss';

interface Props {
  name: string;
}

const format = (time: Date) => {
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();

  const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  const minites =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const seconds =
    time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

  return `${year}-${month}-${date} ${hours}:${minites}:${seconds}`;
};

export const Hello = ({ name }: Props) => {
  const [time, setTime] = React.useState(new Date(Date.now()));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="hello">
      Hi, {name}! Time is {format(time)}!
    </div>
  );
};
