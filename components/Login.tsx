"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { useAuth } from "@/lib/useAuth";
import { FirebaseError } from "firebase/app";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.push("/department"); // Redirect authenticated users
    }
  }, [user, loading, router]);

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully");
        setEmail("");
        setPassword("");
        setError("");

        // New redirection logic based on email prefix
        if (email.startsWith("admin")) {
          router.push("/admin");
        } else if (email.startsWith("station")) {
          router.push("/station");
        } else if (email.startsWith("department")) {
          router.push("/department");
        } else if (email.startsWith("gps")) {
          router.push("/gps");
        }
      } catch (err: unknown) {
        if (err instanceof FirebaseError) {
          setError(err.message || "Failed to sign in");
        }
      }
    }
  };


  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
        style={{ mixBlendMode: "overlay", opacity: 0.1 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex flex-col min-h-screen text-white p-4"
      >
        <Link href="/">
          <button className="flex items-center text-sm mb-8" aria-label="Go back">
            <ArrowLeft className="mr-2" size={16} />
            Back
          </button>
        </Link>

        <div className="flex-grow flex flex-col items-center justify-center max-w-md mx-auto w-full">
          {/* Form container */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-full p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-sm"
          >
            <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Welcome to Rakshak
            </h1>
            <p className="text-sm text-gray-400 mb-8">Sign in with an account</p>

            {/* Sign up form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  aria-label="Email address"
                  aria-invalid={error ? "true" : "false"}
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  aria-label="Password"
                />
              </div>
              {error && (
                <p className="text-red-500 text-xs mt-1" role="alert">
                  {error}
                </p>
              )}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Sign in with Email
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
