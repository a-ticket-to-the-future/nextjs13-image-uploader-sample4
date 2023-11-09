
import { Button } from "@mui/material";
import React from "react";


export default function Home() {
  return (
    <div className="outerBox h-screen">
      <div className="title">
        <h2>画像アップローダー</h2>
        <p>JpegかPngの画像ファイル</p>
      </div>
      <div className="imageUplodeBox">
        <div className="imageLogoAndText">
          {/* <img src={ImageLogo} alt="imagelogo" /> */}
          <p>ここにドラッグ＆ドロップしてね</p>
        </div>
        <input className="imageUploadInput" multiple name="imageURL" />
      </div>
      <p>または</p>
      <Button variant="contained">
        ファイルを選択
        <input className="imageUploadInput" />
      </Button>
    </div>
  );
};














// import Image from 'next/image'
// import { Button } from "@mui/material";
// import React from "react";
// // import ImageLogo from "./image.svg";
// // import "./ImageUpload.css";

// export default function Home() {
//   // const ImageUploader = () => {
//   return (

  
//     <div className=' flex flex-col bg-slate-100 h-screen w-100 ml-10 px-5 mr-10 mt-40 border border-gray-400 border-spacing-2 ' >
//       <div className=' flex flex-col ' >
//         <h2 className=' justify-items-center text-3xl my-10 ml-80 pl-10 font-bold  text-black'>画像アップローダー</h2>
//         <p className=' justify-center my-5 ml-80 pl-10 text-gray-400 text-lg'>JpegかPngの画像ファイル</p>
//       </div>
//       <div className=' flex flex-col relative px-20 ' >
//         <div className=' ' >
//           {/* <Image src={ImageLogo} alt="imagelogo" /> */}
//           <p className=' m-5 py-40  border border-black text-center  text-black'>ここにドラッグ＆ドロップしてね</p>
//         </div>
//         <input className=' absolute border-2 border-blue-700 m-5  h-full w-full'  multiple name="imageURL" type='file' />
//       </div>
//       <p className=' ml-80 pl-10'>または</p>
//       <Button className=' ml-80' variant="contained">
//         ファイルを選択
//         <input type='file'  />
//       </Button>
//     </div>
//   );
// };

