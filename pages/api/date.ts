const DateFormatted = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = convertFormat(today.getMonth() + 1);

  const day = convertFormat(today.getDate());
  const formatted = `${year}-${month}-${day}`;
  return formatted;
};

const convertFormat = (num: number) => {
  if (num < 10) {
    let number = num.toString();
    return `0${number}`;
  } else {
    return num;
  }
};

export default DateFormatted;
