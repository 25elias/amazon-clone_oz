import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";


const FooterLog = () => {
    return(
        <div  className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div>
                <img 
                src="/logo_desktop_w.jpeg"
                alt="Amazon Logo"
                width={100}
                height={10}
                className="h-4 max-w-25 w-25" />
            </div>
            <div className="flex items-center gap-2 sm:ml-12">
                <button className="inline-flex cursor-pointer footer_article p-2 items-center gap-4 border border-gray-100 rounded-md">
                    English
                    <MdArrowDropDown />
                </button>
                <button className="inline-flex cursor-pointer footer_article p-2 items-center gap-4 border border-gray-100 rounded-md">
                    <img 
                    src="/us_flag.png"
                    alt="Amazon Logo"
                    width={6}
                    height={6}
                    className="h-6 max-w-6 w-6" />
                    United State
                </button>
            </div>
        </div>

    );

};

export default FooterLog;