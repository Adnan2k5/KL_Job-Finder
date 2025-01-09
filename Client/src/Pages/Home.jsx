import { Card, Modal } from "antd";
import { Navbar } from "../Components/Navbar";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "../Components/ui/card";
import { Input } from "../Components/ui/input";
import { Footer } from "../Components/Footer";
import { getAllUser } from "../Api/UserApi";


export const Home = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const response = await getAllUser();
      console.log(response.data[0]);
    };
    fetchUser();
  }, []);

  const user = useSelector((state) => state.user);
  const Jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Google",
      location: "Hyderabad",
      salary: "1500K",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quae. Quisquam, voluptatum.",
      skills: ["React", "Node", "MongoDB"],
    },
    {
      id: 2,
      title: ".Net Developer",
      company: "Microsoft",
      location: "Bangalore",
      salary: "2500K",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quae. Quisquam, voluptatum.",
      skills: ["React", "Node", "MongoDB"],
    },
    {
      id: 3,
      title: "System Design",
      company: "Nvidia",
      location: "Pune",
      salary: "1200K",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quae. Quisquam, voluptatum.",
      skills: ["React", "Node", "MongoDB"],
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "Infosys",
      location: "Mumbai",
      salary: "500K",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quae. Quisquam, voluptatum.",
      skills: ["React", "Node", "MongoDB"],
    },
    {
      id: 5,
      title: "Software Engineer",
      company: "Amazon",
      location: "Bangalore",
      salary: "1500K",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quae. Quisquam, voluptatum.",
      skills: ["React", "Node", "MongoDB"],
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "TCS",
      location: "Chennai",
      salary: "800K",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quae. Quisquam, voluptatum.",
      skills: ["React", "Node", "MongoDB"],
    },
  ];

  const onApply = (e) => {
    setjobId(e.target.id);
    setshowModal(true);
  };
  console.log()
  const [jobId, setjobId] = useState(0);
  const [showModal, setshowModal] = useState(false);
  return (
    <div className="w-[100vw] flex flex-col items-center  justify-center">
      <Navbar />
      <div className="container flex items-center justify-center w-screen">
        <div className="jobs mt-10 md:mt-0 md:px-5 md:py-8 gap-2 px-5 flex flex-wrap items-start w-screen">
          {Jobs.map((job, idx) => (
            <Card
              className="px-2 py-2 flex items-start  md:hover:scale-110 duration-300 z-20 hover:z-30 w-full md:w-96 h-fit bg-black "
              key={idx}
            >
              <div className="head flex text-white justify-between">
                <CardTitle className="text-lg">
                  {job.title} <br />{" "}
                  <CardDescription className="text-lg tracking-wider">
                    {job.company}
                  </CardDescription>
                </CardTitle>
                <CardDescription className="font-bold">
                  Expected CTC: {job.salary}{" "}
                  <CardDescription>{job.type}</CardDescription>
                </CardDescription>
              </div>

              <CardContent className="text-white">
                📍 {job.location}
              </CardContent>
              <div className="desc pt-2 text-white text-left">
                <CardContent className="text-lg mt-5">
                  {job.description}
                </CardContent>
                <CardContent className="text-white mt-5  text-lg">
                  Skills : {job.skills.join(", ")}
                </CardContent>
              </div>
              <CardContent>
                <button
                  onClick={onApply}
                  id={job.id}
                  className="text-black hover:bg-green-400 duration-300 bg-white px-3 rounded-2xl  mt-4 py-4"
                >
                  Apply Now
                </button>
              </CardContent>
            </Card>
          ))}
          <Modal
            title={"Job Opening Details"}
            open={showModal}
            onOk={() => {
              console.log("Applied");
            }}
            onCancel={() => setshowModal(false)}
            okText="Apply"

          >
            <form>
              <Card>
                <CardTitle className="text-3xl font-bold">
                  {showModal && Jobs[jobId - 1].title}
                </CardTitle>
                <CardContent className="text-xl font-semibold">
                  {showModal && Jobs[jobId - 1].company}
                </CardContent>
                <CardContent className="font-semibold">
                  Location : {showModal && Jobs[jobId - 1].location} 📍
                </CardContent>
                <div className="input mt-3 flex flex-col">
                    <Input
                      defaultValue={
                        showModal && user.data
                          ? `${user.data.name}`
                          : "Enter your name"
                      }
                      placeholder="Enter your name"
                      className="mt-2 border rounded-xl"
                    />
                  <Input
                    defaultValue={
                      showModal && user.data
                        ? `${user.data.email}`
                        : "Enter your email"
                    }
                    placeholder="Enter your email"
                    className="mt-3 border rounded-xl"
                  />
                </div>
                <div className="sal flex mt-5 flex-col">
                  <label className="text-black mt-2 font-semibold">Salary Expectations</label>
                  <div className="$ gap-2 flex mt-2 items-center">
                    <span className="text-lg">$</span>
                    <Input
                      placeholder="Expected Salary"
                      defaultValue={showModal && Jobs[jobId - 1].salary}
                      className="border rounded-xl"
                    />
                    
                  </div>
                </div>
              </Card>
            </form>
          </Modal>
        </div>
      </div>
      <Footer />
    </div>
  );
};
