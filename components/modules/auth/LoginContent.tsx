"use client";
import { FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

import { signIn } from "@/utils/auth";
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const LoginContent: FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      loginSchema.parse({ username, password });
      await signIn(username, password);
      router.push("/");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError("An error occurred during login.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <Card className="max-w-[400px] w-full rounded-lg shadow-xl bg-gray-900 backdrop-blur-md">
        <CardHeader className="flex flex-col items-center justify-center px-4 py-8">
          <h2 className="text-2xl font-bold text-white mb-2">Pokémon Info</h2>
          <p className="text-white/80">Sign in to your account</p>
        </CardHeader>
        <CardBody className="px-4 py-6">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <Input
              className="mb-4"
              color="default"
              label="Username"
              placeholder="Enter your username"
              size="lg"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Spacer y={0.5} />
            <Input
              className="mb-4"
              color="default"
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-white/80 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-white/80 pointer-events-none" />
                  )}
                </button>
              }
              label="Password"
              placeholder="Enter your password"
              size="lg"
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Spacer y={1} />
            <Button
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginContent;
