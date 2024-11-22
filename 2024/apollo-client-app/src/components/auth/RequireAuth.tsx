// components/auth/RequireAuth.tsx
import { Navigate, useLocation } from "react-router-dom";

export interface RequireAuthProps {
  isLoggedIn: boolean;
  children: JSX.Element;
}

export default function RequireAuth({
  isLoggedIn,
  children,
}: RequireAuthProps) {
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
