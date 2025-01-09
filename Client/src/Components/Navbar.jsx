"use Client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader } from "./Loader";
import { loginUser } from "../Library/userSlice";

export const Navbar = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (user.data === null) {
      setData(null);
    } else {
      setData(user.data);
    }
  }, [user]);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(e.target.value);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setData(null);
    dispatch(loginUser(null));
    toast.success("Logout Successful");
    setOpen(false);
  };

  return (
    <div className="w-full h-16 bg-transparent flex items-center justify-between px-10">
      <div className="logo w-1/3">
        <h1 className="font-bold md:text-3xl">KLU JOB Portal</h1>
      </div>
      <div className="profile w-1/3 flex justify-end">
        {loading ? (
          <Loader />
        ) : (
          <img
            onClick={() => {
              setOpen(true);
            }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="profile"
            className="h-10 w-10 rounded-full"
          />
        )}
      </div>
      <Modal
        title="User Profile"
        open={open}
        footer={
          <Button color="danger" variant="solid" onClick={handleLogout}>
            Logout
          </Button>
        }
        onCancel={handleCancel}
      >
        {data && data !== null ? (
          <div>
            <h1>Name: {data.name}</h1>
            <h1>Contact: {data.contact}</h1>
          </div>
        ) : (
          <div className="login">
            <Link className="flex gap-2" to="/login">
              <Button color="primary" variant="solid">
                Login
              </Button>
            </Link>
          </div>
        )}
      </Modal>
    </div>
  );
};
