export default function Education() {
  return (
    <section id="education" className="py-16 bg-neutral-light section-animate">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-primary text-white p-6 md:w-1/4 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-xl font-bold">2023-2027</span>
                <span className="text-sm opacity-80">B.Tech</span>
              </div>
            </div>
            <div className="p-6 md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Velagapudi Ramakrishna Siddhartha Engineering College</h3>
              <p className="text-gray-600 mb-3">Vijayawada</p>
              <p className="font-medium">Computer Science & Engineering</p>
              <p className="mt-2">CGPA: <span className="font-semibold">8.68</span></p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-secondary text-white p-6 md:w-1/4 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-xl font-bold">2021-2023</span>
                <span className="text-sm opacity-80">Intermediate</span>
              </div>
            </div>
            <div className="p-6 md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Sri Srinivasa Graviity Junior College</h3>
              <p className="text-gray-600 mb-3">Vijayawada</p>
              <p className="mt-2">Percentage: <span className="font-semibold">94.2%</span></p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary-light text-white p-6 md:w-1/4 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-xl font-bold">2021</span>
                <span className="text-sm opacity-80">10th</span>
              </div>
            </div>
            <div className="p-6 md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Nalanda Vidyaniketan School</h3>
              <p className="text-gray-600 mb-3">Vijayawada</p>
              <p className="mt-2">Percentage: <span className="font-semibold">92.8%</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
