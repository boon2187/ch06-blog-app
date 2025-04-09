import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "お名前は必須項目です" })
    .max(30, { message: "お名前は30文字以内で入力してください" }),
  email: z
    .string()
    .min(1, { message: "メールアドレスは必須項目です" })
    .email({ message: "正しいメールアドレスの形式で入力してください" }),
  message: z
    .string()
    .min(1, { message: "内容は必須項目です" })
    .max(500, { message: "内容は500文字以内で入力してください" }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setShowValidation(false);

    try {
      const requestBody = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      console.log("送信データ:", requestBody);

      const response = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error(`エラー: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("APIレスポンス:", responseData);

      alert("送信しました");
      reset();
    } catch (error) {
      console.error("送信エラー:", error);
      alert(`送信に失敗しました: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    reset();
    setShowValidation(false);
  };

  const onError = () => {
    setShowValidation(true);
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="w-1/2 p-4">
        <h1 className="text-xl font-bold mb-6">お問い合わせ</h1>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">
          <div className="flex items-center">
            <label
              htmlFor="name"
              className="w-32 text-sm font-medium text-left"
            >
              お名前
            </label>
            <div className="flex-1">
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                {...register("name")}
                disabled={isSubmitting}
              />
              {showValidation && errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <label
              htmlFor="email"
              className="w-32 text-sm font-medium text-left"
            >
              メールアドレス
            </label>
            <div className="flex-1">
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                {...register("email")}
                disabled={isSubmitting}
              />
              {showValidation && errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex">
            <label
              htmlFor="message"
              className="w-32 text-sm font-medium pt-2 text-left"
            >
              本文
            </label>
            <div className="flex-1">
              <textarea
                id="message"
                rows="5"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                {...register("message")}
                disabled={isSubmitting}
              ></textarea>
              {showValidation && errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          <div className="pt-5 flex gap-3 justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="py-2 px-5 bg-black text-white font-bold rounded-lg hover:bg-gray-600 focus:outline-none disabled:opacity-50"
            >
              {isSubmitting ? "送信中..." : "送信"}
            </button>
            <button
              type="button"
              onClick={handleClear}
              disabled={isSubmitting}
              className="py-2 px-5 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 focus:outline-none disabled:opacity-50"
            >
              クリア
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
