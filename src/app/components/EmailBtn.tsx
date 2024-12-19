import React, { useState, useEffect } from "react";
import { Check, Copy, AlertCircle } from "lucide-react";

const EmailButton = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showToast]);

  const handleClick = () => {
    navigator.clipboard
      .writeText("hyunah0418@gmail.com")
      .then(() => {
        setToastMessage("이메일이 복사되었습니다");
        setIsError(false);
        setShowToast(true);
      })
      .catch(() => {
        setToastMessage("복사하지 못했습니다. 다시 시도해주세요");
        setIsError(true);
        setShowToast(true);
      });
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative bg-purple-300 font-bold text-purple-900 px-8 py-4
                     flex items-center gap-2 hover:gap-3
                     rounded-lg
                     shadow-[0_8px_0_0] shadow-purple-400
                     active:translate-y-4 active:shadow-[0_0_0_0]
                     transition-all duration-150
                     hover:bg-purple-200
                     border-b-[1px] border-purple-400"
        >
          <span className="relative z-10">Contact Me</span>
          <Copy
            className={`w-4 h-4 transition-all duration-300 ${
              isHovered ? "inline-block" : "hidden"
            }`}
          />
        </button>
      </div>

      {showToast && (
        <div
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg 
          ${isError ? "bg-red-500" : "bg-green-500"} 
          text-white flex items-center gap-2
          animate-in slide-in-from-bottom-2 duration-300
          z-50`}
        >
          {isError ? (
            <AlertCircle className="w-5 h-5" />
          ) : (
            <Check className="w-5 h-5" />
          )}
          {toastMessage}
        </div>
      )}
    </>
  );
};

export default EmailButton;
