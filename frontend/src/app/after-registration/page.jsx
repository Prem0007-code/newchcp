'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AfterRegistrationPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    teamName: '',
    playerName1: '',
    playerName2: '',
    playerName3: '',
    emailPlayer1: '',
    emailPlayer2:'',
    emailPlayer3 :'',
    tshirtSize1: '',
    tshirtSize2: '',
    tshirtSize3: '',
    codeforceid1:'',
    codeforceid2:'',
    codeforceid3:'',
    paymentScreenshotBase64: '',

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleScreenshotChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({ ...prev, paymentScreenshotBase64: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (
        !formData.teamName ||
        !formData.playerName1 ||
        !formData.playerName3 ||
        !formData.emailPlayer1 ||
        !formData.emailPlayer2 ||
        !formData.emailPlayer3||
        !formData.tshirtSize1 ||
        !formData.tshirtSize2 ||
        !formData.tshirtSize3
      ) {
        throw new Error('Please fill in all required fields');
      }

      const response = await fetch('http://localhost:5000/api/after-registrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save details');
      }

      router.push('/success');
    } catch (error) {
      console.error('Error:', error);
      alert(error?.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="bg-blue-600 px-6 py-4">
          <h1 className="text-lg font-medium text-white text-center">After Registration Form</h1>
        </div>
        <div className="p-6">
          {/* Payment Section with QR */}
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Team Name */}
            <div>
              <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-1">
                Team Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="teamName"
                id="teamName"
                value={formData.teamName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
                required
              />
            </div>

            {/* Player Name 1 */}
            <div>
              <label htmlFor="playerName1" className="block text-sm font-medium text-gray-700 mb-1">
                Player Name 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="playerName1"
                id="playerName1"
                value={formData.playerName1}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
                required
              />
            </div>

            {/* Player Name 2 */}
            <div>
              <label htmlFor="playerName2" className="block text-sm font-medium text-gray-700 mb-1">
                Player Name 2 (If not then type NIL)
              </label>
              <input
                type="text"
                name="playerName2"
                id="playerName2"
                value={formData.playerName2}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
              />
            </div>

            {/* Player Name 3 */}
            <div>
              <label htmlFor="playerName3" className="block text-sm font-medium text-gray-700 mb-1">
                Player Name 3 (If not then type NIL) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="playerName3"
                id="playerName3"
                value={formData.playerName3}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
                required
              />
            </div>

            {/* Tshirt size 1 */}
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-1">
                Tshirt size 1 <span className="text-red-500">*</span>
              </p>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tshirtSize1"
                    value="S"
                    checked={formData.tshirtSize1 === 'S'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>S</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tshirtSize1"
                    value="M"
                    checked={formData.tshirtSize1 === 'M'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>M</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tshirtSize1"
                    value="L"
                    checked={formData.tshirtSize1 === 'L'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>L</span>
                </label>
              </div>
            </div>

            {/* Tshirt size 2 */}
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-1">
                Tshirt size 2 <span className="text-red-500">*</span>
              </p>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tshirtSize2"
                    value="S"
                    checked={formData.tshirtSize2 === 'S'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>S</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tshirtSize2"
                    value="M"
                    checked={formData.tshirtSize2 === 'M'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>M</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tshirtSize2"
                    value="L"
                    checked={formData.tshirtSize2 === 'L'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>L</span>
                </label>
              </div>
            </div>

            {/* Tshirt size 3 */}
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-1">
                Tshirt size 3 <span className="text-red-500">*</span>
              </p>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tshirtSize3"
                    value="S"
                    checked={formData.tshirtSize3 === 'S'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>S</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tshirtSize3"
                    value="M"
                    checked={formData.tshirtSize3 === 'M'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>M</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tshirtSize3"
                    value="L"
                    checked={formData.tshirtSize3 === 'L'}
                    onChange={handleInputChange}
                    required
                  />
                  <span>L</span>
                </label>
              </div>
            </div>

            {/* Email Player 1 */}
            <div>
              <label htmlFor="emailPlayer1" className="block text-sm font-medium text-gray-700 mb-1">
                Email Player 1 (Use College mail id only) <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="emailPlayer1"
                id="emailPlayer1"
                value={formData.emailPlayer1}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
                required
              />
            </div>
             {/* Email Player 2 */}
             <div>
              <label htmlFor="emailPlayer2" className="block text-sm font-medium text-gray-700 mb-1">
                Email Player 2 (Use College mail id only) <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="emailPlayer2"
                id="emailPlayer2"
                value={formData.emailPlayer2}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
                required
              />
            </div>
            {/* Email Player 3 */}
            <div>
              <label htmlFor="emailPlayer3" className="block text-sm font-medium text-gray-700 mb-1">
                Email Player 3 (Use College mail id only) <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="emailPlayer3"
                id="emailPlayer3"
                value={formData.emailPlayer3}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your answer"
                required
              />
            </div>
            <div>
              <label htmlFor="codeforceid1" className="block text-sm font-medium text-gray-700 mb-1">
                Codeforces ID 1
              </label>
              <input
                type="text"
                name="codeforceid1"
                id="codeforceid1"
                value={formData.codeforceid1}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. tourist"
              />
            </div>

            <div>
              <label htmlFor="codeforceid2" className="block text-sm font-medium text-gray-700 mb-1">
                Codeforces ID 2
              </label>
              <input
                type="text"
                name="codeforceid2"
                id="codeforceid2"
                value={formData.codeforceid2}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Petr"
              />
            </div>

            <div>
              <label htmlFor="codeforceid3" className="block text-sm font-medium text-gray-700 mb-1">
                Codeforces ID 3
              </label>
              <input
                type="text"
                name="codeforceid3"
                id="codeforceid3"
                value={formData.codeforceid3}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Benq"
              />
            </div>
            <div className="mb-6">
            <h2 className="text-md font-semibold text-gray-800 mb-2">Payment</h2>
            <p className="text-sm text-gray-600 mb-3">Please scan the QR code below to complete the payment.</p>
            <div className="w-full flex items-center justify-center">
              <img
                src="/pay.jpg"
                alt="Payment QR"
                className="w-56 h-56 object-contain border border-gray-200 rounded-md shadow-sm"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">After payment, keep a screenshot/transaction ID handy.</p>
          </div>

          {/* Payment screenshot uploader (optional) */}
          <div>
            <label htmlFor="paymentScreenshot" className="block text-sm font-medium text-gray-700 mb-1">
              Upload payment screenshot (optional)
            </label>
            <input
              id="paymentScreenshot"
              type="file"
              accept="image/*"
              onChange={handleScreenshotChange}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {formData.paymentScreenshotBase64 && (
              <div className="mt-3">
                <p className="text-xs text-gray-600 mb-1">Preview:</p>
                <img
                  src={formData.paymentScreenshotBase64}
                  alt="Payment screenshot preview"
                  className="max-h-48 rounded-md border border-gray-200"
                />
              </div>
            )}
          </div>
           



            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 mt-6">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
