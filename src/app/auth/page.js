"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { Working } from "../components/actions/Working";
import { useUserActions } from "@/app/hooks/useUserActions";
import { Tabs } from "flowbite-react";
import { HiOutlineUserAdd, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useRouter } from "next/navigation"; 


export default function AuthPage() {
	const router = useRouter();
	const { user, login, checkAuth, logout, setLoading, register, loading, error } = useUserActions();
	const { authUser, setAuthUser } = useAuth();
  const [loginError, setLoginError] = useState("");
	// 🔹 Separate state for login form
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	// 🔹 Separate state for register form
	const [registerUsername, setRegisterUsername] = useState("");
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");

	useEffect(() => {
			checkAuth(); // Check user auth status on page load
	}, []);


	const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true);
    setLoginError(""); //  Clear previous errors before a new attempt

    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ loginEmail, loginPassword }),
        });

        const data = await res.json();

        if (!res.ok) {
            setLoginError(data.message);
        } else {
            setAuthUser(data.user);
            router.push(`/profile/${data.user}`);
        }
    } catch (error) {
        console.error("Error during login:", error);
        setLoginError("An unexpected error occurred. Please try again.");
    } finally {
        setLoading(false);
    }
};


	const handleRegister = async (e) => {
			e.preventDefault();
			setLoading(true);
			try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ registerUsername, registerEmail, registerPassword }),
        });

        const data = await res.json();


        if (!res.ok) {
						setLoginError(data.message);
            //console.error("Register Failed:", data.message);
        } else {
					router.push(`/profile/${registerUsername}`);
        }
    } catch (error) {
        console.error("Error during Register:", error);
    } finally {
			setLoading(false);
		}
	};

	return (
		<section id="authSection" className="pt-8 pb-0 border border-gray-300/60 rounded px-8 mx-auto mt-8">

			<Tabs aria-label="Default tabs" variant="default" id="authTabs " className="justify-center pb-8 ">
      	<Tabs.Item active title="Login" icon={HiUserCircle}>
					{/* LOGIN FORM */}
					<div className="flex flex-col items-center justify-center ">
						<div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
							{loading ? (
								<Working />
							) : (
								<form id="loginForm" onSubmit={handleLogin} className="space-y-4 text-xs">
									<h2 className="text-lg font-semibold text-center text-gray-800">Login</h2>
 


									<input
											type="email"
											placeholder="Email"
											value={loginEmail}
											onChange={(e) => setLoginEmail(e.target.value)}
											className="w-full text-xs  px-4 py-2 border placeholder:text-sky-500 border-sky-300 rounded placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-blue-200"
											required
									/>
									<input
											type="password"
											placeholder="Password"
											value={loginPassword}
											onChange={(e) => setLoginPassword(e.target.value)}
											className="w-full text-xs  px-4 py-2 border placeholder:text-sky-500 border-sky-300 rounded placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-blue-200"
											required
									/>

									<button
											type="submit"
											className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
									>
											Login
									</button>
											</form>

								)}
								{(error || loginError) && <p className="text-red-500 text-sm py-2">{error || loginError}</p>}
						</div>
					</div>
      	</Tabs.Item>
      	<Tabs.Item title="Register" icon={HiOutlineUserAdd}>
       		{/* REGISTER FORM */}
					<div className="flex flex-col items-center justify-center p-4">
						<div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
							{loading ? (
								<Working />
							) : (
								<form  id="loginForm" onSubmit={handleRegister} className="space-y-4">
									<h2 className="text-lg font-semibold text-center text-gray-800">Register</h2>
									{error && <p className="text-red-500 text-sm">{error}</p>}
									<input
											type="text"
											placeholder="Username"
											value={registerUsername}
											onChange={(e) => setRegisterUsername(e.target.value)}
											className="w-full text-xs  px-4 py-2 border placeholder:text-sky-500 border-sky-300 rounded placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-blue-200"
											required
									/>
									<input
											type="email"
											placeholder="Email"
											value={registerEmail}
											onChange={(e) => setRegisterEmail(e.target.value)}
											className="w-full text-xs  px-4 py-2 border placeholder:text-sky-500 border-sky-300 rounded placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-blue-200"
											required
									/>
									<input
											type="password"
											placeholder="Password"
											value={registerPassword}
											onChange={(e) => setRegisterPassword(e.target.value)}
											className="w-full text-xs  px-4 py-2 border placeholder:text-sky-500 border-sky-300 rounded placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-blue-200"
											required
									/>

									<button
											type="submit"
											className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
									>
											Register
									</button>
								</form>
							)}
						</div>
					</div>
      	</Tabs.Item>
    	</Tabs>					
		</section>
	);
}
