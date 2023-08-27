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


{/* <table>
      <thead>
        <tr>
          <th>상단 타이틀</th>
          <th>연번</th>
          <th>기수</th>
          <th>인재번호</th>
          <th>이름</th>
          <th>대출 상황</th>
          <th>관리</th>
          <th>구분</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>값</td>
          <td>값</td>
          <td>값</td>
          <td>값</td>
          <td>값</td>
          <td>값</td>
          <td>값</td>
          <td>값</td>
        </tr>
      </tbody>
    </table> */}
