import { useEffect, useState } from "react";
import { commonClassNameOfInput, Caption } from "../../components/common/Design";
import { useSelector, useDispatch } from "react-redux";
import {updateUserProfile} from "../../redux/features/authSlice";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user = {}, isLoading } = useSelector((state) => state?.auth);
  const { register, handleSubmit, setValue } = useForm();
  const [updateProfileLoading, setUpdateProfileLoading] = useState(false);

  useEffect(() => {
    setValue("name", user?.name || "");
  }, [user, setValue]);

  const onSubmit = async (data) => {
    setUpdateProfileLoading(true);

    const formData = new FormData();
    formData.append("name", data?.name);

    if (data?.photo[0]) {
      formData.append("photo", data?.photo[0]);
    }

    await dispatch(updateUserProfile(formData));

    setUpdateProfileLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>BidXpress | Personal Profile</title>
      </Helmet>
      <section className="shadow-s1 p-8 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-full md:w-1/2">
              <Caption className="mb-2">Full Name </Caption>
              <input
                type="text"
                className={`capitalize rounded-md ${commonClassNameOfInput}`}
                placeholder="Enter your full name"
                {...register("name")}
                required
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <Caption className="mb-2">Email</Caption>
              <input
                type="email"
                value={user?.email}
                className={`${commonClassNameOfInput} rounded-md`}
                placeholder="example@gmail.com"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 mt-7">
            <div className="w-full md:w-1/2">
              <Caption className="mb-2">Role</Caption>
              <input
                type="text"
                value={user?.role}
                className={`${commonClassNameOfInput} rounded-md`}
                disabled
              />
            </div>
            <div className="w-full md:w-1/2">
              <Caption className="mb-2">Image URL</Caption>
              <input
                type="file"
                className={`${commonClassNameOfInput} rounded-md`}
                {...register("photo", { required: false })}
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded-lg transition-transform hover:scale-105 mt-6 bg-gradient-to-r from-[#244420] to-[#3b8532] text-white px-8 py-2 font-semibold"
            disabled={isLoading || updateProfileLoading}
          >
            {updateProfileLoading ?
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div> 
                    <p>Update Profile</p>
                  </div> : "Update Profile"
                }
          </button>
        </form>
      </section>
    </>
  );
};

export default UserProfile;
