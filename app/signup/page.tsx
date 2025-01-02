import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
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
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-amber-900 mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-amber-900 mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-amber-900 mb-1">
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Your Password"
                  className="w-full"
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
                  placeholder="Confirm Your Password"
                  className="w-full"
                />
              </div>
              <div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Sign Up
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
