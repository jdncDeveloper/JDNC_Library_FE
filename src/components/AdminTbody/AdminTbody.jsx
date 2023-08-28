import { useState } from "react";
import { useEffect } from "react"
import Style from './AdminTbody.style';
import { useLocation } from "react-router-dom";

const AdminTbody = ({ fetchGetFn, TbodyData }) => {
  const [ fetchData, setFetchData ] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  useEffect(() => {
    // fetchGetFn()
    // .then((res) => {  
    //   setFetchData(res.data);
    // })
    // .catch((error) => {
    //   console.error(error);
    // })
    setFetchData(TbodyData);
    const searchValue = searchParams.get('search');
    if (searchValue) {
      const filteredData = TbodyData.filter((item) => {
        return item.name.includes(searchValue);
      });
      setFetchData(filteredData);
    }

  }, [searchParams.get('search')]);
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
