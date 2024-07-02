import Image from "next/image";
import { CiMail } from "react-icons/ci";

function Myform() {
  return (
    <div className="text-white">
      <div className=" bg-[#060a07ec] p-10 m-10 rounded-3xl">
        <div className="flex">
          <div className="rounded-xl p-5">
            <Image
              src="/administrateur-verifie-journaux-evenements-du-serveur_482257-80146.avif"
              alt=""
              width={350}
              height={350}
              className=""
            />
          </div>
          <div className=" max-h-fit max-w-fit h-fit relative text-base text-white">
            <input
              type="text"
              className="bg-transparent py-3 rounded-md border border-slate-200 pl-8 pr-2"
              placeholder="Email address"
            />
            <CiMail
              size={20}
              className="absolute top-1/2 left-2 -translate-y-1/2"
            />
          </div>
          <div className=" bg-[#98a0b33c] bg-transparent p-5 rounded-2xl m-auto">
            <div className="">
              <Image
                src="/icone-camera-rendu-3d_460848-6898.avif"
                alt=""
                width={60}
                height={60}
                className="mr-auto"
              />
              <h1 className="text-2xl font-bold flex items-center justify-center">
                Welcome Back !!!
              </h1>
            </div>

            <div className="mt-8 flex my-2 ">
              <div className=" bg-slate-600 px-8 p-2 rounded-s-lg" dir="ltr">
                <p>As a Student</p>
              </div>
              <div
                className="border border-black px-8 p-2  rounded-s-lg"
                dir="rtl"
              >
                <p>As a Teacher</p>
              </div>
            </div>
            <div className="mt-4 border rounded-lg bg-transparent flex p-2">
              <Image
                src="/msg.png"
                alt=""
                width={20}
                height={15}
                className="mr-2"
              />
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="font-thin text-sm"
                />
              </label>
            </div>
            <div className="mt-4 border rounded-lg bg-transparent flex p-2">
              <Image
                src="/secure.png"
                alt=""
                width={20}
                height={0}
                className="mr-2"
              />
              <label htmlFor="">
                <input
                  type="password"
                  placeholder="Password"
                  className="font-thin text-sm bg-transparent"
                />
              </label>
              <Image
                src="/oeil.png"
                alt=""
                width={20}
                height={20}
                className="ml-auto"
              />
            </div>
            <div className="mt-2 flex">
              <p className="ml-auto  text-green-700 ">Forgot Password ?</p>
            </div>
            <button className="mt-4 rounded-lg p-2 border w-full">Login</button>
            <div className="mt-4 flex items-center justify-center ">
              <p>or</p>
            </div>

            <div className="mt-4 flex items-center justify-center ">
              <div className="border mr-2 rounded-lg">
                <Image
                  src="/facebook-removebg-preview (1).png"
                  alt=""
                  width={50}
                  height={50}
                  className="p-3 "
                />
              </div>
              <div className="border rounded-lg">
                <Image
                  src="/google-removebg-preview.png"
                  alt=""
                  width={50}
                  height={50}
                  className="p-3"
                />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-center">
              <div>
                <p>Don't have an account?</p>
              </div>
              <div className=" ml-2 text-green-700">
                <p>Sign Up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myform;
