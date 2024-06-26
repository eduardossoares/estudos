"use strict";
const repo = () => {
    let data;
    const setData = (newData) => {
        data = newData;
    };
    const getData = () => {
        return data;
    };
    return { getData, setData };
};
const firstRepo = repo();
firstRepo.setData(15);
firstRepo.setData("15");
console.log(firstRepo.getData());
