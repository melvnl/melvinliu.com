import type { NextPage } from "next";
import Container from "@/components/Container";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Container>
      <div className=" bg-primaryWhite">
        <h5 className="text-lg md:text-xl font-bold text-primaryBlack">
          Give Me Your Recommendation
        </h5>
        <p className="my-1 text-primaryBlack">
          Share a message for my future client.
        </p>
        {!session && (
          <button
            className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Login
          </button>
        )}
        {session?.user && (
          <div className="">
            <p className="my-1 text-primaryBlack">
              Sign In as {session?.user.email}
            </p>
            <button
              className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
