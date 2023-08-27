import { useState } from "react";
import { useEffect } from "react"
import Style from './AdminTbody.style';

const AdminTbody = ({ fetchGetFn, TbodyData }) => {
  const [ fetchData, setFetchData ] = useState([]);
  useEffect(() => {
    // fetchGetFn()
    // .then((res) => {  
    //   setFetchData(res.data);
    // })
    // .catch((error) => {
    //   console.error(error);
    // })
    setFetchData(TbodyData);
  }, []);
  return(
    <Style.Tbody>
        {
          fetchData.map((item) => {
            return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.batch}</td>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.borrowState}</td>
                <td><button>{item.management}</button></td>
                <td>{item.role}</td>
              </tr>
            )
          })
        }
    </Style.Tbody>
  )
}
export default AdminTbody;
