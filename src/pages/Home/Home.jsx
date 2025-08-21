import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-[1280px]">
      <table className="w-[1280px]">
        <thead className="border-t-2 border-green-500 border-b border-b-green-500">
          <tr>
            <th className="w-[119px] p-1"> 번호 </th>
            <th className="w-[519px] p-1"> 제목 </th>
            <th className="w-[159px] p-1"> 글쓴이 </th>
            <th className="w-[159px] p-1"> 조회수 </th>
            <th className="w-[159px] p-1"> 좋아요 수 </th>
          </tr>
        </thead>
        <tbody className="border-b-2 border-b-green-500">
          <tr className="text-center border-b border-b-gray-300">
            <td className="py-2 px-1"> 1 </td>
            <td className="py-2 px-1 text-start">
              <Link to="/Detail">오늘 날씨</Link>
            </td>
            <td className="py-2 px-1"> ㅇㅇㅇ </td>
            <td className="py-2 px-1"> 2025-08-21 </td>
            <td className="py-2 px-1"> 3 </td>
          </tr>

          <tr className="text-center border-b border-b-gray-300">
            <td className="py-2 px-1"> 2 </td>
            <td className="py-2 px-1 text-start">
              <Link to="/Detail">오늘 날씨 왜 이렇게 더워</Link>
            </td>
            <td className="py-2 px-1"> ㅇㅇ </td>
            <td className="py-2 px-1"> 2025-08-21 </td>
            <td className="py-2 px-1"> 3 </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-3">
        <button className="flex justify-end border border-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#22c55e"
            class="size-5 pt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>

          <Link to="/Write" className="text-green-500">
            글쓰기
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
