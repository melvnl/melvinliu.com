import type { NextPage } from "next";
import Container from "@/components/Container";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Container>
      <div className=" bg-primaryWhite dark:bg-darkBlack">
        <h5 className="text-lg md:text-xl font-bold text-primaryBlack dark:text-white">
          Give Me Your Recommendation!
        </h5>
        <p className="my-1 text-primaryBlack dark:text-white">
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
          <>
            <div className=" mt-10 flex items-center">
              <span
                style={{ backgroundImage: `url('${session?.user.image}')` }}
                className=" rounded-full h-12 w-12 bg-cover bg-white bg-no-repeat mr-3"
              />
              <div className="flex flex-col">
                <p className="text-primaryBlack dark:text-white">Sign In as</p>
                <p className="font-bold text-primaryBlack dark:text-white">
                  {session?.user.email}
                </p>
              </div>
            </div>
            <button
              className="flex items-center justify-center mb-4 mt-10  font-bold h-8 bg-gray-200 text-gray-900 rounded w-28"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Home;
