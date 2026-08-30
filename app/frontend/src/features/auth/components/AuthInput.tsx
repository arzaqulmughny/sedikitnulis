import { MailOutlined } from "@mui/icons-material";

type AuthInputProps = {
  type: string;
  label: string;
  placeholder: string;
  icon?: React.ReactElement;
}

const AuthInput = (props: AuthInputProps) => {
  return (
    <>
      <label className="flex flex-col gap-y-1">
        <p className="text-sm text-paragraph font-medium">
          {props.label}
        </p>

        <div className="bg-bg-gray flex gap-x-3 px-4 py-2.5 rounded-md overflow-hidden">
          {props.icon && props.icon}

          <input
            type={props.type}
            placeholder={props.placeholder}
            className="text-sm placeholder-placeholder w-full focus:outline-0 text-paragraph"
          />
        </div>
      </label>
    </>
  );
};

export default AuthInput
