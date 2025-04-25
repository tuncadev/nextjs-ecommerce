"use client";

import { Tabs } from "flowbite-react";
import { HiOutlineUserAdd, HiUserCircle } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Working from "@/app/components/actions/Working";
import { useAuth } from "@/app/context/AuthProvider";
import { useCart } from "@/app/context/CartContext";
import { usePasswordValidation } from "@/app/hooks/usePasswordValidation";


const LoginPage: React.FC = () => {
  const router = useRouter();
	const { refreshCart } = useCart();
 
  const [loading, setLoading] = useState(false);
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

	const { refreshUser, user, loading: authLoading  } = useAuth();
	const passwordCheck = usePasswordValidation(registerPassword);
	const [passwordFocused, setPasswordFocused] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (mounted && user) {
			router.replace("/profile");
		}
	}, [mounted, user]);

  useEffect(() => {
		setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
		try {
			const toastId = toast.loading("Входимо...");
			
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: loginEmail, password: loginPassword }),
			});
		
			if (res.ok) {
				toast.success("Вітаємо!", { id: toastId });
				await refreshUser();
				await refreshCart();
				router.push("/");
			} else {
				toast.error("Невірна електронна пошта або пароль", { id: toastId });
				setError("Вхід не вдався. Невірна електронна пошта або пароль");
			}
		} catch (err) {
			toast.error("Помилка під час входу");
			setError("Помилка під час входу");
		}
    setLoading(false);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username: registerUsername,
					email: registerEmail,
					password: registerPassword,
				}),
			});
			
			if (res.ok) {
				toast.success("Реєстрація успішна");
				router.push("/");
			} else {
				const responseText = await res.text();
				let data;

				try {
					data = JSON.parse(responseText);
				} catch (e) {
					console.warn("Non-JSON response:", responseText);
				}

				toast.error(data?.error || "Реєстрація не вдалася");

			}
    } catch (error) {
      toast.error("Сталася помилка.");
    } finally {
      setLoading(false);
    }
  };

	if (!mounted || authLoading || user) return null;

  return (
		<section id="authSection" className="pt-8 pb-0 border border-gray-300/60 rounded px-8 mx-auto mt-8">
		<Tabs aria-label="Default tabs" variant="default" id="authTabs" className="justify-center pb-8">
			<Tabs.Item active title="Login" icon={HiUserCircle}>
				<div className="flex flex-col items-center justify-center ">
					<div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
						{loading ? (
							<Working text="Обробка даних..." />
						) : (
							<form id="loginForm" onSubmit={handleSubmit} className="space-y-4 text-xs">
								<div className="flex flex-col items-center justify-center">
									<div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col gap-2">
										<h2 className="text-lg font-semibold text-center text-gray-800">Вхід</h2>
										<input
											type="email"
											placeholder="Email"
											value={loginEmail}
											onChange={(e) => setLoginEmail(e.target.value)}
											className="w-full text-xs px-4 py-2 border placeholder:text-sky-500 border-sky-300 rounded placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-blue-200"
											required
										/>
										<input
											type="password"
											placeholder="Password"
											value={loginPassword}
											onChange={(e) => setLoginPassword(e.target.value)}
											className="w-full text-xs px-4 py-2 border placeholder:text-sky-500 border-sky-300 rounded placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-blue-200"
											required
										/>
										<button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
											Вхід
										</button>
									</div>
								</div>
							</form>
						)}
						{error && <p className="text-red-500 text-sm py-2">{error}</p>}
					</div>
				</div>
			</Tabs.Item>

			<Tabs.Item title="Register" icon={HiOutlineUserAdd}>
				<div className="flex flex-col items-center justify-center p-4 gap-3">
					<div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col gap-2">
						{loading ? (
							<Working text="Обробка даних..." />
						) : (
							<form id="registerForm" onSubmit={handleRegister} className="space-y-4">
								<h2 className="text-lg font-semibold text-center text-gray-800">Реєстрація</h2>
								<input
									type="text"
									placeholder="Username"
									value={registerUsername}
									onChange={(e) => setRegisterUsername(e.target.value)}
									className="w-full text-xs px-4 py-2 border placeholder:text-sky-500 border-sky-300 rounded placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-blue-200"
									required
								/>
								<input
									type="email"
									placeholder="Email"
									value={registerEmail}
									onChange={(e) => setRegisterEmail(e.target.value)}
									className="w-full text-xs px-4 py-2 border placeholder:text-sky-500 border-sky-300 rounded placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-blue-200"
									required
								/>
								<input
									type="password"
									placeholder="Password"
									value={registerPassword}
									onChange={(e) => setRegisterPassword(e.target.value)}
									onFocus={() => setPasswordFocused(true)}
									onBlur={() => setPasswordFocused(false)}
									className="w-full text-xs px-4 py-2 border placeholder:text-sky-500 border-sky-300 rounded placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-blue-200"
									required
								/>
								{passwordFocused && (
									<ul className="text-xs space-y-1 mt-2">
										<li className={passwordCheck.length ? "text-green-600" : "text-red-500"}>
											Мінімум 8 символів
										</li>
										<li className={passwordCheck.capital ? "text-green-600" : "text-red-500"}>
											Принаймні одна велика літера
										</li>
										<li className={passwordCheck.special ? "text-green-600" : "text-red-500"}>
											Один спеціальний символ
										</li>
									</ul>
								)}
								<button
									className={`w-full text-white py-2 rounded ${
										passwordCheck.isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
									}`}
									disabled={!passwordCheck.isValid}
								>Реєстрація</button>
							</form>
						)}
					</div>
				</div>
			</Tabs.Item>
		</Tabs>
	</section>
  );
};

export default LoginPage;


