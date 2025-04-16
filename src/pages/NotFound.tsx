
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-greenrock-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-stone-800 mb-4">Page Not Found</p>
        <p className="text-stone-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Please check the URL or return to our homepage.
        </p>
        <Button asChild className="bg-greenrock-600 hover:bg-greenrock-700">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
