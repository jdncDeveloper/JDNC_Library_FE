import { mockBookDetail } from "../mockData/bookDetail"

const getBookDetail = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockBookDetail);
        }, 1000)
    })
}

export { getBookDetail };