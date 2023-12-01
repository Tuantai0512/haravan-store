import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function AddressForm() {
  return (
    <>
      <h3 style={{ backgroundColor: '#323232' }} className="flex py-3.5 px-2.5 text-white uppercase justify-center font-semibold">
        Nhập địa chỉ mới
      </h3>
      <div style={{ backgroundColor: '#fbfbfb' }} className="pt-1 pb-4 px-4">
        <form>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Họ" className="h-9 w-full px-4 py-1"/>
          </div>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Tên" className="h-9 w-full px-4 py-1"/>
          </div>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Công ty" className="h-9 w-full px-4 py-1"/>
          </div>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Địa chỉ 1" className="h-9 w-full px-4 py-1"/>
          </div>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Địa chỉ 2" className="h-9 w-full px-4 py-1"/>
          </div>
          <div className="my-4 relative flex">
            <div style={{ backgroundColor: "#EBEBEB" }} className="w-9 h-9 flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} style={{ color: "#dad9d9" }} />
            </div>
            <input type="text" placeholder="Số điện thoại" className="h-9 w-full px-4 py-1"/>
          </div>
        </form>
      </div>
    </>
  );
}
