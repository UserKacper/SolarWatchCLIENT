import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { handleInputChange } from "../../lib/user-inputChange/handleInputChange";
import { TUserRegister } from "../../data/data-types-d";
import { handleRegisterUser } from "../../lib/axios/register";

export function RegisterForm() {
  const [registerUserData, setRegisterUserData] = useState<TUserRegister>({
    userName: "",
    email: "",
    password: "",
  });

  return (
    <>
      <Card className="max-w-md mx-auto mt-10 w-full">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Register</CardTitle>
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
                handleInputChange(e, setRegisterUserData);
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userName">Username</Label>
            <Input
              id="userName"
              placeholder="text"
              required
              type="text"
              onChange={(e) => {
                handleInputChange(e, setRegisterUserData);
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
                handleInputChange(e, setRegisterUserData);
              }}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => handleRegisterUser(registerUserData)}>
            Register
          </Button>
        </CardFooter>
      </Card >
    </>
  );
}
