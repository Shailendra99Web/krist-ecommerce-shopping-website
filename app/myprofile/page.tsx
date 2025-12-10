"use client";
import ButtonRoundWithIcon from "@/components/buttons/ButtonRoundWithIcon";
import ButtonToggle from "@/components/buttons/ButtonToggle";
import ButtonWhiteWithBlackBorder from "@/components/buttons/ButtonWhiteWithBlackBorder";
import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import MyProfileCardAddress from "@/components/cards/MyProfileCardAddress";
import MyProfileCardOrderStatus from "@/components/cards/MyProfileCardOrderStatus";
import DropdownOptions2 from "@/components/Dropdowns/DropdownOptions2";
import Header1 from "@/components/headers/h1/page";
import Header4Bold from "@/components/headers/Header4Bold";
import ModalAddAddress from "@/components/modals/modalAddAddress/page";
import MyprofileAsideItem from "@/components/myprofileAsideItem/page";
import { loginReducer } from "@/redux/features/auth/authSlice";
import { modal_AddAddressToggleReducer } from "@/redux/features/modals/modalsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Footer from "@/sections/footer/page";
import PersonalInformation from "@/sections/myProfile/personalInformation";
import Navbar from "@/sections/navbar/page";
import {
  apiDeleteAddress,
  apiDeleteOrder,
  apiFetchOrders,
  apiUserInfo
} from "@/utils/GlobalApi";
import {
  Bell,
  CreditCard,
  Heart,
  MapPin,
  Package,
  Plus,
  Search,
  Settings,
  SlidersHorizontal,
  User
} from "lucide-react";
import { useEffect, useState } from "react";

interface Review {
  name: string;
  ratings: number;
  comment: string;
  date: string;
  _id: string;
}

interface Product {
  variations: any[];
  _id: string;
  productName: string;
  price: number;
  discountPrice: number;
  shortDescription: string;
  longDescription: string;
  ratings: number;
  reviews: Review[];
  colors: string[];
  sizes: string[];
  inStock: boolean;
  category: string[];
  imageUrl: string;
  __v: number;
}

interface CartItem {
  product: Product;
  quantity: number;
  createdAt: string;
  _id: string;
}

interface Address {
  individualName: string;
  flatHouseBuildingCompanyApartment: string;
  areaColonyStreetSectorVillage: string;
  city: string;
  state: string;
  pinCode: string;
  _id: string;
}

interface PaymentMethod {
  name: string;
}

interface Order {
  cartItems: CartItem[];
  status: string;
  address: Address[];
  paymentmethod: PaymentMethod;
  _id: string;
}

function MyProfile() {
  // const [userData, setUserData] = useState<any>();

  const userLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const userFirstName = useAppSelector((state) => state.auth.firstName);
  const userLastName = useAppSelector((state) => state.auth.lastName);
  const userEmail = useAppSelector((state) => state.auth.email);
  const userAddresses = useAppSelector((state) => state.auth.addresses);
  const userProfilePictureImageUrl = useAppSelector(
    (state) => state.auth.imageUrlProfilePicture
  );

  const [activeTab, setActiveTab] = useState("personal");
  const [orders, setOrders] = useState<Order[]>();
  // const [savedAddresses, setSavedAddresses] = useState();
  const dispatch = useAppDispatch();
  // const [userProfilePictureImageUrl, SetUserProfilePictureImageUrl] = useState(
  //   "https://res.cloudinary.com/dfaklq64w/image/upload/v1763646295/profile_ztslti.png"
  // );

  useEffect(() => {}, [userFirstName, userProfilePictureImageUrl]);

  const asideItems = [
    {
      icon: <User />,
      text: "Personal Information",
      key: "personal"
    },
    {
      icon: <Package />,
      text: "My Order",
      key: "orders"
    },
    {
      icon: <Heart />,
      text: "My Wishlists",
      key: "wishlist"
    },
    {
      icon: <MapPin />,
      text: "Manage Addresses",
      key: "addresses"
    },
    {
      icon: <CreditCard />,
      text: "Saved Cards",
      key: "cards"
    },
    {
      icon: <Bell />,
      text: "Notification",
      key: "notification"
    },
    {
      icon: <Settings />,
      text: "Settings",
      key: "settings"
    }
  ];

  const SettingSelectOptions = [
    {
      header: "Appearance",
      description: "Customize how your theme looks on your device",
      options: ["Light", "Dark"]
    },
    {
      header: "Language",
      description: "Select your language",
      options: ["English", "Hindi", "Japanese"]
    }
  ];

  const SettingToggleOptions = [
    {
      header: "Two-factor Authentication",
      description: "Keep your account secure by enabling 2FA via mail"
    },
    {
      header: "Push Notifications",
      description: "Receive push notification"
    },
    {
      header: "Desktop Notification",
      description: "Receive push notification in desktop"
    },
    {
      header: "Email Notification",
      description: "Receive email notification"
    }
  ];

  async function fetchUserInfo() {
    const res = await apiUserInfo();
    if (res.success) {
      dispatch(
        loginReducer({
          isLoggedIn: true,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          addresses: res.data.addresses,
          imageUrlProfilePicture: res.data.imageUrlProfilePicture
        })
      );
    }
  }

  async function fetchOrders() {
    const res = await apiFetchOrders();
    console.log("res Orders", res);
    if (res.success) {
      setOrders(res.data[0]?.orders);
    }
  }

  useEffect(() => {
    (async () => {
      if (!userLoggedIn) {
        await fetchUserInfo();
      }
      await fetchOrders();
    })();
  }, []);

  async function _deleteOrder(orderId: string, cartItemId: string) {
    console.log("orderId", orderId, "cartItemId", cartItemId);
    const res = await apiDeleteOrder(orderId, cartItemId);
    console.log(res);

    setOrders(res.data?.orders);
  }

  useEffect(() => {
    console.log("orders state:", orders);
  }, [orders]);

  if (!userFirstName) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="mx-auto mt-17 max-w-[1140px]">
        {/* Header */}
        <div className="mb-9 min-h-14 flex items-center justify-between">
          <div className="text-4xl">My Profile</div>
          {activeTab == "orders" && (
            <div className="flex gap-5">
              {/* Search Box */}
              <div className="flex h-14 w-80 items-center rounded-xl border-1 border-gray-200 p-3">
                <Search />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-3 outline-0"
                />
              </div>
              {/* Filter */}
              <ButtonWithBlackBg
                btntext="Filter"
                className="!h-14 !w-32.5 gap-2.5"
                icon={<SlidersHorizontal size={24} />}
              />
            </div>
          )}
        </div>

        <main className="flex gap-12.5">
          <aside className="flex w-65.5 flex-col gap-5 border-1 border-gray-300 py-5">
            <div className="flex items-center border-b-1 border-gray-200 pb-5 pl-5 gap-4">
              <img
                src={
                  userProfilePictureImageUrl ??
                  "https://res.cloudinary.com/dfaklq64w/image/upload/v1763646295/profile_ztslti.png"
                }
                alt=""
                className="size-12.5 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <div className="text-sm">Hello 👋 </div>
                <div className="truncate text-lg font-bold">
                  {userFirstName}
                </div>
              </div>
            </div>
            <div>
              {asideItems.map((item, idx) => (
                <MyprofileAsideItem
                  key={item.text}
                  icon={item.icon}
                  text={item.text}
                  active={activeTab === item.key}
                  onClick={() => {
                    setActiveTab(item.key);
                  }}
                />
              ))}
            </div>
          </aside>
          <div className="grow">
            {/* Personal Information */}
            {activeTab == "personal" && (
              <PersonalInformation
                firstName={userFirstName}
                lastName={userLastName}
                email={userEmail}
                userProfilePictureImageUrl={userProfilePictureImageUrl}
                // addresses={addresses}
              />
            )}
            {/* Order Card */}
            {activeTab == "orders" &&
              orders &&
              orders.map((order) =>
                order.cartItems.map((cartItem, i) => (
                  <MyProfileCardOrderStatus
                    key={i}
                    imageUrl={cartItem.product.imageUrl}
                    shortDescription={cartItem.product.shortDescription}
                    price={
                      cartItem.product.discountPrice
                        ? cartItem.product.discountPrice
                        : cartItem.product.price
                    }
                    quantity={cartItem.quantity}
                    size="S"
                    status={order.status}
                    deleteOrder={() => _deleteOrder(order._id, cartItem._id)}
                  />
                ))
              )}
            {activeTab == "orders" && orders?.length == 0 && (
              <div className="flex items-center py-5 text-gray-500">
                No Orders to Show!
              </div>
            )}

            {/* Manage Addresses */}
            {activeTab == "addresses" && (
              <>
                <div>
                  <ButtonWithBlackBg
                    btntext="Add New Address"
                    className="max-w-80 flex-row-reverse gap-3"
                    icon={<Plus />}
                    onClick={() => {
                      dispatch(modal_AddAddressToggleReducer());
                    }}
                  />
                </div>
                {!(userAddresses && userAddresses.length > 0) && (
                  <div className="flex items-center py-5 text-gray-500">
                    No Saved Addresses
                  </div>
                )}
                {userAddresses &&
                  userAddresses.length > 0 &&
                  userAddresses.map((addressData: any, i: number) => (
                    <MyProfileCardAddress
                      key={i}
                      individualName={addressData.individualName}
                      flatHouseBuildingCompanyApartment={
                        addressData.flatHouseBuildingCompanyApartment
                      }
                      areaColonyStreetSectorVillage={
                        addressData.areaColonyStreetSectorVillage
                      }
                      city={addressData.city}
                      state={addressData.state}
                      pinCode={addressData.pinCode}
                      phoneNumber={addressData.phoneNumber}
                      onDelete={() => {
                        apiDeleteAddress({ addressId: addressData._id });
                      }}
                    />
                  ))}
              </>
            )}

            {/* Settings */}
            {activeTab == "settings" && (
              <div>
                {SettingSelectOptions.map((option, i) => (
                  <div
                    key={i}
                    className="flex items-center border-b-1 border-gray-200 p-3"
                  >
                    <div className="flex grow flex-col justify-center gap-1">
                      {/* Header */}
                      <div>
                        <Header4Bold text={option.header} />
                      </div>
                      {/* Description */}
                      <div className="text-gray-400">{option.description}</div>
                    </div>
                    {/* Toggle Button */}
                    <DropdownOptions2
                      selectedOption={option.options[0]}
                      dropdownOptions={option.options}
                    />
                  </div>
                ))}

                {/* Toggle Settings */}
                {/* TitleDescriptionTogglebutton */}
                {SettingToggleOptions.map((option, i) => (
                  <div
                    key={i}
                    className="flex items-center border-b-1 border-gray-200 p-3"
                  >
                    <div className="flex grow flex-col justify-center gap-1">
                      {/* Header */}
                      <div>
                        <Header4Bold text={option.header} />
                      </div>
                      {/* Description */}
                      <div className="text-gray-400">{option.description}</div>
                    </div>
                    {/* Toggle Button */}
                    <ButtonToggle />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MyProfile;
