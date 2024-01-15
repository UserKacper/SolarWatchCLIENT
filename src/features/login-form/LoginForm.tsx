import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { handleLoginUser } from "../../lib/axios/login";
import { useState } from "react";
import { handleInputChange } from "../../lib/user-inputChange/handleInputChange";
import { TUserLogin } from "../../data/data-types-d";
import { authStore } from "../../stores/auth-store";

export function LoginForm() {
  const [loginUserData, setLoginUserData] = useState<TUserLogin>({
    email: "",
    password: "",
  });

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
