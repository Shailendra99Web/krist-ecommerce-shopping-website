"use client";
import { Star } from "lucide-react";
import InputFieldWithTitle from "../inputFieldWithTitle/page";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewSchema } from "@/schemas/otherSchemas";
import { useState } from "react";

type LoginForm = z.infer<typeof reviewSchema>;

function ReviewAddCard() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    resolver: zodResolver(reviewSchema) // ← ここでZodを統合
  });

  const [selectedStarColumn, setSelectedStarColumn] = useState<any>(null);

  async function onSubmit(data: LoginForm) {
    try {
      console.log(data);
      const { email, name, review } = data;

      const bodyData = {
        email,
        name,
        review
      };
      console.log(bodyData);
      //   const res = await fetch("http://localhost:7500/api/review", {
      //     body: JSON.stringify(bodyData),
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   }).then((res: any) => res.json());
      //   console.log("response data:", res);
      //   if (res.success == true) {
      //     localStorage.setItem("krist-shopping-website-token", res.token);
      //     alert(res.message);
      //   }
    } catch (err) {
      console.error("Something went wrong", err);
    }
  }

  return (
    <div className="flex flex-col gap-y-9">
      <div className="flex flex-col gap-y-2">
        <div>Your Rating</div>
        <div className="flex gap-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex gap-1">
              <div
                className={`group flex h-min w-min cursor-pointer`}
                onClick={() => {
                  setSelectedStarColumn(index);
                }}
              >
                {Array.from({ length: index }).map((_, i) => (
                  <Star
                    key={i}
                    className={`group-hover:fill-amber-500 group-hover:text-amber-500 ${index === selectedStarColumn && `fill-amber-500 text-amber-500`}`}
                  />
                ))}
              </div>
              {index !== 5 && index !== 0 && (
                <div className="h-6 w-[1px] bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <form
        className="flex w-full flex-col gap-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputFieldWithTitle
          reactHookFormRegister={register}
          type="text"
          htmlFor_Id_Name="name"
          title="Name"
          inputPlaceholder="Enter Your Name"
          stateName={"name"}
          inputRequired={true}
          inputError={errors.name}
        />

        <InputFieldWithTitle
          type="text"
          htmlFor_Id_Name="forgot-password-email"
          title="Email Address"
          inputPlaceholder="Enter Email Address"
          stateName={"email"}
          inputError={errors.email}
          inputRequired={true}
          reactHookFormRegister={register}
        />

        <InputFieldWithTitle
          reactHookFormRegister={register}
          type="text"
          htmlFor_Id_Name="review"
          title="Your Review"
          inputPlaceholder="Enter Your Review"
          stateName={"review"}
          inputRequired={true}
          inputError={errors.review}
        />

        <input
          type={"submit"}
          className="bg-primary-500 rounded-lg2 w-35 cursor-pointer p-4 text-white"
        />
      </form>
    </div>
  );
}

export default ReviewAddCard;
