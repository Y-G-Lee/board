function Home() {
  return (
    <div className="w-[998px] h-[314px]px-25 py-10 flex justify-center">
      <table>
        <thead className="border-2 border-black">
          <tr>
            <th className="w-[119px]"> 번호 </th>
            <th className="w-[519px]"> 제목 </th>
            <th className="w-[159px]"> 글쓴이 </th>
            <th className="w-[159px]"> 날짜 </th>
            <th className="w-[159px]"> 조회수 </th>
            <th className="w-[159px]"> 추천 </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Home;
