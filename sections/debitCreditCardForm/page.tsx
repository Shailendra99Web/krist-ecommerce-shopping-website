import ButtonWithBlackBg from "@/components/buttons/buttonWithBlackBg/page";
import InputFieldWithTitle from "@/components/inputFieldWithTitle/page";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: number;
};

function DebitCreditCardForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const fieldsHeight = "h-12";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4.5">
      <InputFieldWithTitle
        reactHookFormRegister={register}
        stateName="cardNumber"
        title="Card Number"
        type="text"
        htmlFor_Id_Name="cardNumber"
        inputPlaceholder="Enter Card Number"
        inputRequired={true}
        inputError={<></>}
        className={fieldsHeight}
      />

      <InputFieldWithTitle
        reactHookFormRegister={register}
        stateName="cardName"
        title="Card Name"
        type="text"
        htmlFor_Id_Name="cardName"
        inputPlaceholder="Enter Name"
        inputRequired={true}
        inputError={<></>}
        className={fieldsHeight}
      />

      <div className="flex w-full gap-5">
        <div className="grow">
          <InputFieldWithTitle
            reactHookFormRegister={register}
            stateName="expiryDate"
            title="Expiry Date"
            type="text"
            htmlFor_Id_Name="expiryDate"
            inputPlaceholder="Enter card expiry date"
            inputRequired={true}
            inputError={<></>}
            className={fieldsHeight}
          />
        </div>
        <div className="grow">
          <InputFieldWithTitle
            reactHookFormRegister={register}
            stateName="cvv"
            title="CVV"
            type="password"
            htmlFor_Id_Name="cvv"
            inputPlaceholder="Enter Name"
            inputRequired={true}
            inputError={<></>}
            className={fieldsHeight}
          />
        </div>
      </div>

			<ButtonWithBlackBg btntext="Add Card" className="!w-80"/>
    </form>
  );
}

export default DebitCreditCardForm;
