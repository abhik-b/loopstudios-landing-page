import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    document.body.style.overflow = opened ? "hidden" : "";
  }, [opened]);
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="text-white">
        <>
          <div
            className={`${
              opened ? "opacity-100 fixed inset-0" : "opacity-0"
            } bg-black`}
          />
          <div
            className="p-4 mt-2
                        font-alata bg-transparent 
                      text-white flex justify-between items-center
                        absolute top-0 left-0 right-0 z-20 "
          >
            <p className="font-bold text-3xl">loopstudios</p>
            <button onClick={() => setOpened(!opened)}>
              {opened ? (
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                    fill="#FFF"
                    fillRule="evenodd"
                  />
                </svg>
              ) : (
                <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#FFF" fillRule="evenodd">
                    <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                  </g>
                </svg>
              )}
            </button>
          </div>
          {opened && (
            <div className="absolute w-full left-0  top-[100%] ">
              <div
                className="flex flex-col justify-center gap-12 p-4  
                font-josefinSans menu-height uppercase text-3xl mt-12"
              >
                <Link href="/">About</Link>
                <Link href="/">Careers</Link>
                <Link href="/">Events</Link>
                <Link href="/">Products</Link>
                <Link href="/">Supports</Link>
              </div>
            </div>
          )}
        </>
      </div>
    </header>
  );
}
