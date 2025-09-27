export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 p-8 text-center">
        <h1 className="text-2xl font-semibold text-green-700">Submission Received</h1>
        <p className="mt-2 text-gray-600">Thank you! Your details have been submitted successfully.</p>
        <a href="/" className="inline-block mt-6 px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white">Go to Home</a>
      </div>
    </div>
  );
}
