import FooterItemsHeader from "@/components/headers/footerItemsHeader/page";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Twitter
} from "lucide-react";
import FooterNavListBlock from "../footerNavListBlock/page";
import Logo from "@/components/logo/page";

function Footer() {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="mx-[150px] mt-[100px] flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between py-13.5">
          <div className="w-65.5 space-y-10">
            <Logo src={"/icons/logo-white.svg"} />
            <div className="flex flex-col items-start gap-6">
              <div className="flex-center gap-3">
                <PhoneCall className="size-6" />
                <div>(704) 555-0127</div>
              </div>
              <div className="flex-center gap-3">
                <Mail className="size-6" />
                <div>krist@example.com</div>
              </div>
              <div className="flex-center gap-3">
                <MapPin className="h-6 min-w-6" />
                <div>3891 Ranchview Dr.Richardson, California 62639</div>
              </div>
            </div>
          </div>
          <FooterNavListBlock
            title={"Information"}
            navItems={[
              { title: "My Account", url: "/myprofile" },
              { title: "Login", url: "/auth/login" },
              { title: "My Cart", url: "/cart" },
              { title: "My Wishlist", url: "/wishlist" },
              { title: "Checkout", url: "/checkout" }
            ]}
          />
          <FooterNavListBlock
            title={"Service"}
            navItems={[
              { title: "About Us", url: "/about" },
              { title: "Careers", url: "/careers" },
              { title: "Delivery Information", url: "/delivery-information" },
              { title: "Privacy Policy", url: "/privacy-policy" },
              { title: "Terms & Conditions", url: "/terms-and-conditions" }
            ]}
          />
          <div className="w-77">
            <FooterItemsHeader btnText="Subscribe" />
            <div>
              Enter your email below to be the first to know about new
              collections and product launches.
            </div>
            <button className="group hover:text-primary-500 mt-5 flex w-full cursor-pointer items-center justify-between rounded-xl border-2 border-white p-3.5 hover:bg-white">
              <div className="flex items-center gap-2.5">
                <Mail className="size-6" />
                <div>Your Email</div>
              </div>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright section*/}
        <div className="flex w-full items-center justify-between border-t-1 border-gray-800 p-4.5">
          <div></div>
          <div>&copy; 2023 Krist. All rights reserved.</div>
          <div className="flex gap-6.5">
            <Facebook className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
            <Twitter className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
