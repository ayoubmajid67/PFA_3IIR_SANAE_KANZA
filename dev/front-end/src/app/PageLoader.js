"use client";
import HeaderOutlet from "@/components/headerOutlet/HeaderOutlet";
import HeaderOutlet2 from "@/components/header2Outlet/Header2Outlet";
import FooterOutlet from "@/components/footerOutlet/FooterOutlet";
import {usePathname} from "next/navigation";

export  default  function PageLoader({children}) {
  const currentPage = usePathname();
  const noHeaderPage = ["/login","/signUp","/verify","/profile",'/registerTeacher'];
  const Header2Page = ["/profile"];
  const noFooterPage = ["/login","/signUp","/verify","/profile","/registerTeacher"];
  

  const isAllowShowHeader=  !noHeaderPage.includes(currentPage);
  const isAllowShowHeader2 = Header2Page.includes(currentPage);
  const isAllowShowFooter =   !noFooterPage.includes(currentPage);


    return(
        <>
            {isAllowShowHeader &&   <HeaderOutlet profileImg={"/assets/imgs/profile.png"}  /> }
            {isAllowShowHeader2 &&   <HeaderOutlet2 /> }
            {children}
            {isAllowShowFooter &&   <FooterOutlet /> }
        </>


    )
}