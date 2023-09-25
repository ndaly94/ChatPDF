import { UserButton, auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link, { LinkProps } from "next/link";
import { LogIn } from 'lucide-react';
import FileUpload from "@/components/FileUpload";

export default async function Home() {
  const  { userId } = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">;
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center">
          <h1 className="mr-3 text-5x1 font-semibold">Chat with any PDF</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
<div className="flex mt-2">
  {isAuth && <Button>Go to chats</Button> }</div>

      </div>
      <p className="max-w-x1 mt-1 text-lg text-slate-600">
        Join millions of students, researchers and professionals to answer questions and answer questions with AI.
      </p>
      <div className="w-full mt-4">
      {isAuth ? (<FileUpload />
      ):(
        <Link href="/sign-in">
            <Button>Login to Get Started
              <LogIn />
            </Button>
        </Link>
      )}
      </div>
      </div>
    </div>
  )
}