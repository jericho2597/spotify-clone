import { Button } from "./common/button";

const SignUpFooter: React.FC = () => {
  return (
    <footer className=" flex w-[100%] min-w-[620px] flex-col bg-gradient-to-r from-[#AF2896] to-[#509BF5] p-2">
      <div className="flex w-[100%] flex-row">
        <div className="flex flex-grow flex-col justify-between">
          <p className="mt-2 text-xs font-normal">PREVIEW OF SPOTIFY</p>
          <p className="text-base font-normal">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <div className="mr-3">
          <Button variant="default">
            <span className="px-4 text-base font-bold">Sign up free</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default SignUpFooter;
