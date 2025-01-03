import React, { useEffect } from "react";
import {
  TabsContent,
  Tabs,
  TabsList,
  TabsTrigger,
} from "../Components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { mockUser } from "../Data/mockUser";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../Library/userSlice";
import { use } from "react";
import { Loader } from "../Components/Loader";
import { toast } from "sonner";

export const LoginPage = () => {
  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [passerror, setpasserror] = useState(false);
  const [pass, setpass] = useState("");
  const [cnfpass, setcnfpass] = useState("");
  const [loader, setloader] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const Login = async (data) => {
    try {
      setloader(true);
      const res = await dispatch(getUser(data));
      if (res.payload === 404) {
        toast.error("Invalid Credentials");
        setloader(false);
      } else {
        setloader(false);
        toast.success("Login Successeful");
        reset();
        Navigate("/");
      }
    } catch {
      console.log(error);
      setloader(false);
    }
  };

  const checkPass = () => {
    if (pass && cnfpass) {
      if (pass === cnfpass) {
        setpasserror(false);
      } else {
        setpasserror(true);
      }
    }
  };

  useEffect(() => {
    checkPass();
  }, [pass, cnfpass]);

  const Register = (data) => {
    const { email, password } = data;
    console.log("User Registered", email, password);
  };

  return (
    <div className="w-screen h-[100vh] flex justify-center items-center bg-gradient-to-tr from-blue-100 to-white">
      <div className="context z-50 p-5 w-[30rem] h-fit bg-white rounded-2xl shadow-xl">
        <Tabs className="flex flex-col justify-between" defaultValue="login">
          <TabsList className="flex z-[99] justify-around">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent className="h-full" value="login">
            <div className="login">
              <form onSubmit={handleSubmit(Login)}>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle className="tracking-widest uppercase">
                      Login
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 px-3">
                    <div className="space-y-1">
                      <input
                        autoComplete="off"
                        className="text-black w-full py-2 px-3 rounded-xl"
                        {...register("email")}
                        placeholder="Email"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        autoComplete="off"
                        className="text-black w-full py-2 px-3 rounded-xl"
                        {...register("password")}
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex gap-3 ">
                      <input
                        {...register("remember")}
                        type="radio"
                        className="text-sm"
                        placeholder="Password"
                      />
                      <span>Remember me</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    {loader ? (
                      <Loader />
                    ) : (
                      <div>
                        <button
                          type="submit"
                          className="bg-white text-black px-6 py-2 mt-2 hover:text-white hover:bg-black duration-500 rounded-3xl"
                        >
                          Submit
                        </button>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              </form>
            </div>
          </TabsContent>
          <TabsContent className="z-30" value="register">
            <form onSubmit={handleSubmit(Register)}>
              <div className="login flex flex-col">
                <Card className="w-full mt-4">
                  <CardHeader>
                    <CardTitle className="tracking-widest uppercase">
                      Register
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 px-3">
                    <div className="space-y-1">
                      <input
                        autoComplete="off"
                        className="text-black w-full py-2 px-3 rounded-xl"
                        {...register("email")}
                        placeholder="Email"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        onInput={(e) => {
                          setpass(e.target.value);
                        }}
                        autoComplete="off"
                        className="text-black w-full py-2 px-3 rounded-xl"
                        {...register("password")}
                        placeholder="Password"
                      />
                    </div>
                    <div className="space-y-1">
                      <input
                        autoComplete="off"
                        onInput={(e) => {
                          setcnfpass(e.target.value);
                        }}
                        className="text-black w-full py-2 px-3 rounded-xl"
                        {...register("cnfpass")}
                        placeholder="Confirm Password"
                      />
                    </div>
                    {passerror && (
                      <p className="text-red-500">Password does not match</p>
                    )}
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-center">
                    <button
                      type="submit"
                      className="bg-white mt-4 text-black px-6 py-2 hover:text-white hover:bg-black duration-500 rounded-3xl"
                    >
                      Register
                    </button>
                  </CardFooter>
                </Card>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
