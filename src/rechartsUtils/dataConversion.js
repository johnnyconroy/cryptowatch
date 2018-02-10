// @flow
export const jsonToRecharts = (jsonObject: {key: string}) => {
  const keys = Object.keys(jsonObject);
  return keys.map(key => (
    {
      date: key,
      price: jsonObject[key],
    }
  ));
};

const dataConversion = {
  jsonToRecharts,
};

export default dataConversion;
