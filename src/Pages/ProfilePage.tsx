import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { UseAuthContext } from "@/Context/Auth/UseAuthContext";
import { Link, useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const { user, signOut } = UseAuthContext();
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen  flex justify-center items-center object-cover">
      <Card className="w-[40rem]">
        <div className="flex gap-4 items-center mb-4 p-3">
          {user?.photo && (
            <img
              src={user.photo}
              className="w-32 h-32 rounded-full bg-background-banner shadow-sm"
            />
          )}
          <CardContent>
            <p className="font-bold text-lg mb-2">
              Welcome back {user?.firstname}!
            </p>
            <p>{user?.description}</p>
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
