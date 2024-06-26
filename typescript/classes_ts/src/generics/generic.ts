const repo = <T extends string | number>() => {
    let data: T;

    const setData = (newData: T): void => {
        data = newData;
    };

    const getData = () => {
        return data;
    };

    return { getData, setData }
}

const firstRepo = repo<string | number>();

firstRepo.setData(15);
firstRepo.setData("15");
console.log(firstRepo.getData());