import { message } from "../lib/types";

export default function FormMessage({ status }: message) {
  return status === 200 ? (
    <div
      className="bg-teal-100 border-l-4 border-teal-500 text-teal-900 p-4 mb-2"
      role="alert"
    >
      <p className="font-bold">Success!</p>
      <p>
        Your message has been received, I will get back to you within 2 work
        days.
      </p>
    </div>
  ) : (
    <div
      className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
    >
      <p className="font-bold">Oops! Error {status}</p>
      <p>Something not ideal might be happening.Try again after 5 minutes</p>
    </div>
  );
}
