import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { UseAuthContext } from "@/Context/Auth/UseAuthContext";
import { LogOut, User, UserPen, UserRound } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const ProfileMenu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const { user, signOut } = UseAuthContext();
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer border rounded-full p-[2px]">
          <UserRound strokeWidth={1.5} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User />
          <NavLink
            onClick={() => setOpen(!open)}
            to={user ? "/profile" : "/login"}
          >
            Profile
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserPen />
          <NavLink
            onClick={() => setOpen(!open)}
            to={user ? "/editprofile" : "/login"}
          >
            Edit Profile
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
          <span
            onClick={() => {
              signOut();
              navigate("/");
            }}
          >
            Log out
          </span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
