import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await addDoc(collection(db, "pledges"), {
        name,
        college,
        timestamp: new Date(),
      });
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting pledge:", error);
      alert("Something went wrong. Try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Your College"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className="border w-full p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Take Pledge"}
          </button>
        </form>
      ) : (
        <div>
          <h2 className="text-lg font-semibold">✅ Pledge Submitted!</h2>
          <p>You’ll receive your certificate shortly.</p>
        </div>
      )}
    </div>
  );
}

export default App;
