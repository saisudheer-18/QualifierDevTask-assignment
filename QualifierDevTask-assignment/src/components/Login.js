import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleprofile = () => {
    navigate("/profile");
  };

  const FloatingInput = ({ label, type = "text", placeholder, className, disabled }) => {

    return (
      <div className="relative bg-[#f7f8f9] mb-6">
        <label className="absolute -top-3 left-4 bg-[#f7f8f9] px-2 text-sm text-purple-600">
          {label}
        </label>

        <input type={type} placeholder={placeholder} disabled={disabled} className={`w-full rounded-md border border-gray-300 bg-[#f7f8f9] px-4 py-2 text-sm text-gray-800 focus:outlin focus:border-purple-600 disabled:cursor-not-allowed ${className}`} />
      </div>
    );
  };

  return (
    <div className="h-full bg-[#f7f8f9] px-6 pt-8">
      <h1 className="text-[26px] font-medium text-[#1D2226] mb-1">
        Signin to your <br /> PopX account
      </h1>

      <p className="text-gray-400 text-[18px] leading-6 mt-3 mb-8">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <div className="flex-1">
        <FloatingInput label="Email address" type="email" placeholder="Enter email address" disabled />
        <FloatingInput label="Password" type="password" placeholder="Enter password" disabled />
      </div>

      <button
        className="w-full bg-gray-300 h-[46px] text-white py-2 text-[16px] rounded-md"
        onClick={handleprofile} >
        Login
      </button>
    </div>
  );
};

export default Login;