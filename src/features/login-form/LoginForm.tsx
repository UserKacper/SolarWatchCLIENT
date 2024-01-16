import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { handleLoginUser } from "../../lib/axios/login";
import { useEffect, useState } from "react";
import { handleInputChange } from "../../lib/user-inputChange/handleInputChange";
import { TUserLogin } from "../../data/data-types-d";
import { authStore, isLocalStorageTokenExisting } from "../../stores/auth-store";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [loginUserData, setLoginUserData] = useState<TUserLogin>({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const token = isLocalStorageTokenExisting()
  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token, navigate])

  const { setLoggedInUser } = authStore()

  return (
    <>
      <Card className="max-w-md mx-auto mt-10 w-full">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Email"
              required
              type="email"
              onChange={(e) => {
                handleInputChange(e, setLoginUserData);
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Password"
              required
              type="password"
              onChange={(e) => {
                handleInputChange(e, setLoginUserData);
              }}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => handleLoginUser(loginUserData, setLoggedInUser)}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
