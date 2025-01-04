"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/contexts/authContext"; // Import useAuth hook
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth(); // Use the login function from AuthContext
  const router = useRouter(); // Initialize router for navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          username: formData.name,
          confirmPassword: formData.confirmPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Signup successful! Welcome to Sweet Delights Bakery!");

      // Use the login function from AuthContext
      login(data.token, data.email, data.username);

      // Redirect the user to the dashboard or home page
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="max-w-md w-full text-center mb-8">
          <h2 className="text-4xl font-bold text-amber-800 mb-4">
            Join Our Sweet Community!
          </h2>
          <p className="text-amber-900 mb-6">
            Sign up now to receive exclusive offers, recipes, and updates from
            Sweet Delights Bakery.
          </p>
        </div>
        <div className="max-w-md w-full">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">
              Sign Up for Sweet Treats
            </h3>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-amber-900 mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-amber-900 mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-amber-900 mb-1">
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-amber-900 mb-1"
                >
                  Confirm Password
                </label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Your Password"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing Up..." : "Sign Up"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-amber-800 text-amber-50 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Sweet Delights Bakery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
