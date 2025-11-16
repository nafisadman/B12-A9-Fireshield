import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex flex-col mt-4">
      <button className="btn btn-outline btn-secondary">
        <FcGoogle size={24} />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
