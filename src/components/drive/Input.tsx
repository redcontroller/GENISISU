import { Post, PostForm } from "@/types";
import { ReactElement } from "react";
import { FieldError, FieldErrors, UseFormRegister } from "react-hook-form";
import InputError from "../InputError";

interface InputProps {
  id: "title" | "name" | "phone" | "content",
  placeholder: string,
  value: string | undefined,
  register: UseFormRegister<PostForm>,
  errors: FieldErrors<PostForm>,
  textColor?: string,
  isWarningMargin: (fieldError: FieldError | undefined) => 'mb-5' | 'mb-11'
}

export default function Input ({ id, placeholder, value, register, errors, textColor, isWarningMargin }: InputProps):ReactElement {
  console.log(isWarningMargin(errors[id]));
  return (
      <div className={`flex-1 ${isWarningMargin(errors[id])}`}>
      {/* <div className={`flex-1 mb-[20px]`}> */}
        <label className="block text-lg mb-2" htmlFor={`${id}`}>
          {id.toUpperCase()}
        </label>
        { id === 'content' ? (
            <textarea
              id={`${id}`}
              rows={6}
              value={value}
              maxLength={3000}
              placeholder={`${placeholder}`}
              className={`block w-full p-4 resize-none border border-gray-300 bg-transparent ${textColor} h-[200px]`}
              // name="content"
              {
                ...register(id, {
                  required: `${id.toUpperCase()}를 입력하세요.`
                })
              }
            ></textarea>
          ) : id === 'phone' ? (
            <input
              id={`${id}`}
              type="text"
              value={value}
              placeholder={`${placeholder}`}
              className="w-full p-4 border border-gray-300 bg-transparent dark:bg-gray-100"
              // name={`${id}`}
              {
                ...register(id, {
                  required: `${id.toUpperCase()}를 입력하세요.`,
                  pattern: {
                    value: /^[0-9]{2,}-[0-9]{3,}-[0-9]{4,}$/,
                    message: '연락처 형식이 아닙니다. ("-"으로 구분)'
                  }
                })
              }
            />
        ) : (
            <input
              id={`${id}`}
              type="text"
              value={value}
              placeholder={`${placeholder}`}
              className="w-full p-4 border border-gray-300 bg-transparent dark:bg-gray-100"
              // name={`${id}`}
              {
                ...register(id, {
                  required: `${id.toUpperCase()}를 입력하세요.`
                })
              }
            />
        )}
        <InputError target={errors[id]} />
      </div>
  );
}