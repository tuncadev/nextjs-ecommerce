const useLogout = () => {

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

     
			localStorage.setItem("showLogoutToast", "1");
      window.location.href = "/"; // or use router.push("/")
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return { handleLogout };
};

export default useLogout;
