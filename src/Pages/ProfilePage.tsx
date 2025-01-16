import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { UseAuthContext } from "@/Context/Auth/UseAuthContext";
import { logoutUser } from "@/redux/slice/authSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const { user, signOut } = UseAuthContext();

  const dispatch: AppDispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const navigate = useNavigate();
  return (
    <div className="w-full max-sm:p-2 h-screen  flex justify-center items-center object-cover">
      <Card className="w-[40rem] max-sm:w-full">
        <div className="flex max-sm:flex-col max-sm:items-center max-sm:w-full gap-4 items-center mb-4 p-3">
          {user?.photo && (
            <img
              src={user.photo}
              className="w-32 h-32  rounded-full bg-background-banner shadow-sm"
            />
          )}
          <CardContent>
            <p className="font-bold text-lg max-sm:text-base mb-2">
              Welcome back {user?.firstname}!
            </p>
            <p className="max-sm:text-sm">{user?.description}</p>
          </CardContent>
        </div>

        <CardFooter className=" flex gap-4">
          <Link to="/editprofile">
            <Button>Edit Profile</Button>
          </Link>
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              signOut();
              handleLogout();
              navigate("/");
            }}
          >
            Log out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
