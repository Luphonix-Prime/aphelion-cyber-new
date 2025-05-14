import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginValues) {
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      console.log("Login data:", data);
      setIsLoading(false);
      // In a real application, you'd handle authentication here
    }, 1500);
  }

  return (
    <>
      <Helmet>
        <title>Login | Aphelion Cyber Security</title>
        <meta name="description" content="Log in to your Aphelion Cyber Security account to access the platform." />
      </Helmet>
      
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="container max-w-md mx-auto px-4">
          <Card className="bg-dark-light border border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription className="text-gray-400">
                Access your Aphelion Cyber Security dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            {...field} 
                            className="bg-dark border-gray-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="••••••••"
                            {...field}
                            className="bg-dark border-gray-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary-dark text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Log in"}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="border-t border-gray-800 mt-4 flex flex-col space-y-2">
              <a href="#" className="text-secondary hover:text-accent-light text-sm w-full text-center">
                Forgot password?
              </a>
              <p className="text-sm text-gray-400 text-center">
                Don't have an account?{" "}
                <a href="#" className="text-secondary hover:text-accent-light">
                  Contact sales
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
