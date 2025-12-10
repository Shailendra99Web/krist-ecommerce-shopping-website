import ButtonWhiteWithBlackBorder from "../buttons/ButtonWhiteWithBlackBorder";
import Header4Bold from "../headers/Header4Bold";

interface MyProfileCardOrderStatusProps {
  imageUrl: string;
  shortDescription: string;
  size: string;
  quantity: number;
  price: number;
  status: string;
  deleteOrder: () => void;
}

function MyProfileCardOrderStatus({
  imageUrl = "/images/maxi.jpg",
  shortDescription = "Girls Pink Moana Printed Dress",
  size = "S",
  quantity = 1,
  price = 75,
  status = "inprocess",
  deleteOrder
}: MyProfileCardOrderStatusProps) {
  return (
    <div className="flex flex-col gap-5 border-b-1 border-gray-200 py-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2">
          <img src={imageUrl} alt="" className="size-19.5" />
          <div className="flex w-96 flex-col justify-between">
            <div className="">
              <Header4Bold text={shortDescription} />
            </div>
            <div>Size: {size}</div>
            <div>Qyt: {quantity}</div>
          </div>
        </div>
        <div>
          <Header4Bold text={`$${price.toFixed(2)}`} />
        </div>
        <div className="flex flex-col gap-2.5">
          <ButtonWhiteWithBlackBorder
            btntext="View Order"
            className="!h-10 !w-32 !rounded-lg text-sm !font-normal"
            btnColorType="white"
          />
          {!(status == "inprocess") ? (
            <ButtonWhiteWithBlackBorder
              btntext="Write A Review"
              className="!h-10 !w-32 !rounded-lg text-sm !font-normal"
              btnColorType="black"
            />
          ) : (
            <ButtonWhiteWithBlackBorder
              btntext="Cancel Order"
              className="!bg-secondary-red !border-secondary-red hover:!text-secondary-red !h-10 !w-32 !rounded-lg text-sm !font-normal !text-white hover:!bg-white"
              btnColorType="black"
              onClick={() => {
                deleteOrder();
              }}
            />
          )}
        </div>
      </div>
      {status == "inprocess" ? (
        <div className="flex items-center gap-2">
          <div className="w-max bg-orange-50 p-2 text-sm text-orange-400">
            In Process
          </div>
          {/* <div>Your product has been delivered</div> */}
          <div>Your product has been Inprocess</div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="w-max bg-green-50 p-2 text-sm text-green-400">
            Delivered
          </div>
          <div>Your product has been delivered</div>
        </div>
      )}
    </div>
  );
}

export default MyProfileCardOrderStatus;
