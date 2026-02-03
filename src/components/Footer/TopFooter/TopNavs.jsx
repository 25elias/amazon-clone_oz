import { MdArrowRight } from "react-icons/md";



const TopNavs = () => {
    return(
        <div className="post_footer">
            <article>
                <h5 className="footer_title py-2 mb-2">Get to know us</h5>
                <ul className="flex flex-col gap-4 footer_article">
                    <li >Careers</li>
                    <li>Amazon Newsletter</li>
                    <li>About Amazon</li>
                    <li>Accessibility</li>
                    <li>Sustainabilty</li>
                    <li>Press center</li>
                    <li>Investor relations</li>
                    <li>Amazon devices</li>
                    <li>Amazon Science</li>
                </ul>
            </article>
            <article>
                <h5 className="footer_title py-2 mb-2">Make money with us</h5>
                <ul className="flex flex-col gap-4 footer_article">
                    <li>Sell on Amazon</li>
                    <li>Sell Apps on Amazon</li>
                    <li>Supply to Amazon</li>
                    <li>Protect & build yuor brand</li>
                    <li>Become an affiliate</li>
                    <li>Become a delivery driver</li>
                    <li>Start package delivery business</li>
                    <li>Advertise your products</li>
                    <li>Sell-publish with us</li>
                    <li>Become an Amazon hub partner</li>
                    <li><MdArrowRight className="w-3 h-3 mr-1"/> See more way to make money</li>
                </ul>
            </article>
            <article className="hidden sm:block">
                <h5 className="footer_title py-2 mb-2">Make money with us</h5>
                <ul className="flex flex-col gap-4 footer_article">
                    <li>Sell on Amazon</li>
                    <li>Sell Apps on Amazon</li>
                    <li>Supply to Amazon</li>
                    <li>Protect & build yuor brand</li>
                    <li>Become an affiliate</li>
                    <li>Become a delivery driver</li>
                    <li>Start package delivery business</li>
                    <li>Advertise your products</li>
                    <li>Sell-publish with us</li>
                    <li>Become an Amazon hub partner</li>
                </ul>
            </article>
            <article className="hidden sm:block">
                <h5 className="footer_title py-2 mb-2">Make money with us</h5>
                <ul className="flex flex-col gap-4 footer_article">
                    <li>Sell on Amazon</li>
                    <li>Sell Apps on Amazon</li>
                    <li>Supply to Amazon</li>
                    <li>Protect & build yuor brand</li>
                    <li>Become an affiliate</li>
                    <li>Become a delivery driver</li>
                    <li>Start package delivery business</li>
                    <li>Advertise your products</li>
                    <li>Sell-publish with us</li>
                    <li>Become an Amazon hub partner</li>
                </ul>
            </article>
        </div>
    )
}

export default TopNavs;