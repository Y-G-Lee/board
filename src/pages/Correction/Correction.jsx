import { Link } from "react-router-dom";

function Correction() {
    return (
        <div className="w-[1000px] m-auto">
      <div className="flex justify-center flex-col p-12">
        <div className="mb-3">
          <input
            type="text"
            className="w-60 h-9 border border-gray-400 mr-3 p-2"
            placeholder="닉네임"
          />
          <input
            type="text"
            className="w-60 h-9 border border-gray-400 p-2"
            placeholder="비밀번호"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="w-[960px] h-10 border border-gray-400 mr-3 p-2"
            placeholder="제목을 입력해주세요."
          />
        </div>
        <textarea className="w-[960px] h-100 outline-0 resize-none border border-black p-3"></textarea>
      </div>
      <div className="flex justify-end">
        <button className="border border-gray-400 mr-3 w-20 h-10 font-bold">
          <Link to="/"> 취소 </Link>
        </button>
        <button className="bg-green-500 w-20 h-10 text-white font-bold">
          수정
        </button>
      </div>
    </div>
    );
}

export default Correction;