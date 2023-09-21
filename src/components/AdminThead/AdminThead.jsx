import Style from './AdminThead.style';
const AdminThead = ({ rowTitleData , children }) => {
  return(
    <Style.Table>
      <Style.Thead>
        <tr>
          {
            rowTitleData.map((item, index) => {
              return(
                <th key={index}>{item}</th>
              )
            })
          }
        </tr>
      </Style.Thead>
      {children}
    </Style.Table>
  )
}

export default AdminThead;
