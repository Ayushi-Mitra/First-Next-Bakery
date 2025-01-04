"use client";

import { useState } from "react";
import { Cake } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function BakeryLogin() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Handle successful login
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: data.userId,
          email: data.email,
          username: data.username,
        })
      );

      // Redirect to dashboard or home page
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF3D6]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <Cake className="h-16 w-16 text-[#FFA500] mb-2" />
          <h1 className="text-3xl font-bold text-[#8B4513]">
            Sweet Delights Bakery
          </h1>
        </div>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="identifier"
              className="block text-sm font-medium text-[#8B4513] mb-1"
            >
              Email Address or Username
            </label>
            <Input
              id="identifier"
              type="text"
              placeholder="you@example.com or username"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-3 py-2 border border-[#8B4513] rounded-md focus:ring-[#FFA500] focus:border-[#FFA500]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#8B4513] mb-1"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-[#8B4513] rounded-md focus:ring-[#FFA500] focus:border-[#FFA500]"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#FFA500] hover:bg-[#FF8C00] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-[#8B4513] hover:text-[#FFA500]">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
