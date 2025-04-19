export default function RasagnaAvatar() {
  return (
    <div className="w-64 h-64 rounded-full bg-white shadow-xl overflow-hidden flex items-center justify-center border-4 border-white">
      <div className="text-center">
        <i className="fas fa-user-circle text-9xl text-gray-300"></i>
        <p className="mt-2 text-gray-600">Profile Image</p>
      </div>
    </div>
  );
}