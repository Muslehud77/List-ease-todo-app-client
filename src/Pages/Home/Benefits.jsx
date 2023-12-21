import { MdDeveloperMode, MdCorporateFare, MdHomeWork } from "react-icons/md";
import { PiBankDuotone, PiStudent } from "react-icons/pi";
import { SiFreelancer } from "react-icons/si";
import { Link } from "react-router-dom";












const Benefits = () => {
  return (
    <section className="text-gray-600 body-font container mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center font-serif">
          <h1 className="text-4xl font-medium title-font mb-2 text-gray-900">
            Who Benefits from ListEase?
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Explore ListEase's versatile benefits tailored for diverse user
            profiles. From developers to busy parents, professionals across
            industries find streamlined task management solutions, enhancing
            productivity and organization in their lives.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex text-xl items-center justify-center rounded-full bg-gray-200 text-black mb-4">
                <MdDeveloperMode />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Developers
              </h2>
              <p className="leading-relaxed text-base">
                For tech-savvy minds, ListEase assists in project planning, code
                management, and task tracking, ensuring seamless progress
                throughout development cycles.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex text-xl items-center justify-center rounded-full bg-gray-200 text-black mb-4">
                <MdCorporateFare />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Corporate Professionals
              </h2>
              <p className="leading-relaxed text-base">
                Corporate teams optimize workflow and boost productivity with
                ListEase, managing deadlines, meetings, and collaborative tasks
                efficiently.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex text-xl items-center justify-center rounded-full bg-gray-200 text-black mb-4">
                <PiBankDuotone />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Bankers and Financial Experts
              </h2>
              <p className="leading-relaxed text-base">
                Bankers leverage ListEase to handle financial deadlines,
                reports, and client meetings, enhancing precision and time
                management in their roles.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex text-xl items-center justify-center rounded-full bg-gray-200 text-black mb-4">
                <PiStudent />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Students and Educators
              </h2>
              <p className="leading-relaxed text-base">
                From assignment deadlines to lesson planning, ListEase aids
                students and educators in organizing study schedules and
                curriculum management effectively.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex text-xl items-center justify-center rounded-full bg-gray-200 text-black mb-4">
                <SiFreelancer />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Freelancers and Entrepreneurs
              </h2>
              <p className="leading-relaxed text-base">
                Self-starters and freelancers benefit from ListEase by
                efficiently managing client tasks, project deadlines, and
                business-related activities.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex text-xl items-center justify-center rounded-full bg-gray-200 text-black mb-4">
                <MdHomeWork />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Busy Parents and Homemakers
              </h2>
              <p className="leading-relaxed text-base">
                Offering relief to busy households, ListEase simplifies grocery
                lists, household chores, and family schedules, providing
                efficient home management.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Link to={'/dashboard'} className="btn btn-outline">Get started</Link>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
