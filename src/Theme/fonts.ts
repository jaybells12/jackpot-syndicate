import { Bai_Jamjuree } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export default {
  BaiJamjuree: baiJamjuree.style.fontFamily,
  body: `${baiJamjuree.style.fontFamily}, Verdana, sans-serif`
}