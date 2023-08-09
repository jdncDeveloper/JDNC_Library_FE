import mockBookList from "../mockData/bookList"

//getBookList().then((res) => setState({...res}));
const getBookList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockBookList);
        }, 1000);
    });
};

export { getBookList };
