"use client";
import _ from "lodash";
import Image from "next/legacy/image";
import Button from "./components/shared/button";
import TextInput from "./components/shared/Input";
import { LoginData } from "./types/types";
import { ChangeEvent, useEffect, useState } from "react";
import { validateLoginFields } from "./utils/helper";
import Modal from "./components/shared/modal";
import { useRouter } from "next/navigation";
import { loginImg } from "./utils/images";

export default function Home() {
  // create a router
  const router = useRouter();
  // Prefetching the dashboard routes
  useEffect(() => {
    router.prefetch("/dashboard");
  }, [router]);

  // Modal States
  const [showModal, setShowModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState<string>("");

  // Login States
  const initValues = {
    loginData: {
      email: "",
      password: "",
    },
    errorMsgData: {
      email: "",
      password: "",
    },
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsgData, setErrorMsgData] = useState<LoginData>(
    initValues?.errorMsgData
  );
  const [loginData, setLoginData] = useState<LoginData>(initValues?.loginData);
  const loginDataOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("🚀 ~ file: page.tsx:31 ~ loginDataOnChange ~ name:", name);
    setLoginData({ ...loginData, [name]: value });

    // Fields validation
    setErrorMsgData((prevErrors) => ({
      ...prevErrors,
      [name]: validateLoginFields(name, value),
    }));
  };

  const onLogin = () => {
    setIsLoading(true);
    if (
      _.isEmpty(loginData.email) ||
      _.isEmpty(loginData.password) ||
      !_?.isEmpty(errorMsgData?.email) ||
      !_?.isEmpty(errorMsgData?.password)
    ) {
      setAlertMsg("Please fill all the fields");
      setShowModal(true);
      return setIsLoading(false);
    } else {
      const user = {
        role: "admin",
      };
      localStorage.setItem("user", JSON.stringify(user));
      router.push("dashboard");

      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen min-w-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-2/5">
        <Image
          src={loginImg}
          alt="logo"
          width={200}
          height={150}
          objectFit="contain"
        />
        <div className="flex flex-col w-96 self-center my-5 gap-3">
          <TextInput
            title="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginData?.email}
            handleOnChange={loginDataOnChange}
            isError={!_?.isEmpty(errorMsgData?.email)}
            errorMsg={errorMsgData?.email}
          />
          <TextInput
            title="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginData?.password}
            handleOnChange={loginDataOnChange}
            isError={!_?.isEmpty(errorMsgData?.password)}
            errorMsg={errorMsgData?.password}
          />
        </div>
        <Button
          className="w-48 h-12 self-center"
          text="Log in"
          isLoading={isLoading}
          onClick={onLogin}
        />
      </div>
      {/* Show alert modal */}
      <Modal
        title="Log in"
        body={<p className="text-sm font-normal">{alertMsg}</p>}
        secondButton={false}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </main>
  );
}
