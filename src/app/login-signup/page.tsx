"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";

import { ResetPassModal } from "./ResetPassModal";
import Login from "./Login";
import Signup from "./Signup";

const Login_Signup = () => {
  const [activeTab, setActiveTab] = useState<string>("signin");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs
        value={activeTab}
        defaultValue="signin"
        className="w-[400px]"
        onValueChange={handleTabChange}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin"> Sign in</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 ">
              <Login></Login>
              <ResetPassModal></ResetPassModal>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Signup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Signup setActiveTab={setActiveTab}></Signup>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login_Signup;
