import { Cake } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BakeryLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF3D6]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <Cake className="h-16 w-16 text-[#FFA500] mb-2" />
          <h1 className="text-3xl font-bold text-[#8B4513]">
            Sweet Delights Bakery
          </h1>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#8B4513] mb-1"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
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
              className="w-full px-3 py-2 border border-[#8B4513] rounded-md focus:ring-[#FFA500] focus:border-[#FFA500]"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#FFA500] hover:bg-[#FF8C00] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log In
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
