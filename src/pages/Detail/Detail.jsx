import { Link } from "react-router-dom";

function Detail() {
  return (
    <div>
      <div className="p-4">
        <p className="text-xl font-bold"> 오늘날씨 </p>
        <div className="flex border-b border-b-gray-300 mb-3">
          <div className="mr-5 mb-3">
            <p> ㅇㅇㅇ </p>
          </div>
          <div className="mr-5">
            <p>2025-08-21</p>
          </div>
          <div className="flex ml-225">
            <p className="mr-2"> 조회 수: </p>
            <p className="mr-3"> 3 </p>
            <p className="mr-2"> 좋아요 수: </p>
            <p> 3 </p>
          </div>
        </div>
        <div className="p-5">
          <p> 오늘 날씨 왜 이렇게 더운거야 </p>
        </div>
      </div>
      <div className="mt-3 bg-gray-100 p-3 border-t-2 border-t-green-500 border-b-2 border-b-green-500">
        <div className="flex">
          <div className="mb-3 flex flex-col">
            <input
              type="text"
              className="w-[140px] h-[30px] border border-gray-300 mr-3 p-2"
              placeholder="닉네임"
            />
            <input
              type="text"
              className="w-[140px] h-[30px] border border-gray-300 p-2 mt-3"
              placeholder="비밀번호"
            />
          </div>
          <textarea
            className="w-[1280px] h-[110px] outline-0 resize-none border border-gray-300 p-3 text-sm"
            placeholder="타인의 권리를 침해하거나 명예훼손하는 댓글은 운영원칙 및 관련 법률에 재재를 받을 수 있습니다."
          ></textarea>
        </div>
        <div className="flex justify-end mt-3">
          <button className="bg-green-500 w-20 h-10 text-white font-bold">
            등록
          </button>
        </div>
      </div>
       <div className="flex mt-3 justify-between">
        <button className="bg-green-500 text-white mr-3 w-20 h-10 font-bold">
          <Link to="/"> 목록 </Link>
        </button>
        <div>
        <button className="border border-gray-400 mr-3 w-20 h-10 font-bold">
          <Link to="/Correction"> 수정 </Link>
        </button>
        <button className="border border-gray-400 w-20 h-10 font-bold mr-3">
          삭제
        </button>
        <button className="bg-green-500 w-20 h-10 text-white font-bold">
          <Link to="/write"> 글쓰기 </Link>
        </button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
