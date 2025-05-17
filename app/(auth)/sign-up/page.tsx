import { RegisterForm } from "@/components/RegistrationFrom"
import Image from "next/image"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen">
      
      <div className="flex w-full items-center justify-center bg-[#212121] lg:w-1/2">
        <div className="w-full max-w-md space-y-8 rounded-lg  p-8 text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Create Your Account</h1>
            <p className="text-gray-400">Join us and start shopping today</p>
          </div>
          <RegisterForm />
        </div>
      </div>
      <div className="hidden w-1/2 bg-gray-900 lg:block">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/assets/auth.jpg"
              alt="Background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="z-10 flex flex-col items-center justify-center text-center text-white">
            <div className="mb-4 rounded-full bg-gray-800/70 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path d="M18.5 2h-13A3.5 3.5 0 0 0 2 5.5v13A3.5 3.5 0 0 0 5.5 22h13a3.5 3.5 0 0 0 3.5-3.5v-13A3.5 3.5 0 0 0 18.5 2Z"></path>
                <path d="M12 6v12"></path>
                <path d="M6 12h12"></path>
              </svg>
            </div>
            <h2 className="mb-2 text-4xl font-bold">Welcome to Walk Throughz</h2>
            <p className="max-w-md text-gray-300">Registriere Dich und erhalte einen 10% Gutschein per E-Mail.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
