import Image from "next/image";

const Profile = () => {
    return (
      <section className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
        {/* Profile Container - Now Left Aligned */}
        <div className="flex items-center gap-x-9">
          {/* Profile Image with Animated Background */}
          <div className="profile-img"></div>
  
          {/* Profile Text */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">
              Karthik Gowda Ramakrishna
            </h1>
            <p className="text-lg text-gray-600 dark:text-neutral-400">
            full-stack software engineer | DevOps | AI/ML & Large-Scale Systems
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Profile;
  

// const Profile = () => {
//   return (
//     <section className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
//       {/* Profile Container */}
//       <div className="flex items-center gap-x-3">
//         {/* Profile Image */}
//         <div className="shrink-0">
//           <Image
//             className="shrink-0 size-16 rounded-full"
//             src= "/images/me.jpg" // Replace with your actual image
//             alt="Karthik Gowda"
//             width={64}
//             height={64}
//             priority
//           />
//         </div>

//         {/* Profile Text */}
//         <div className="grow">
//           <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
//             Karthik Gowda Ramakrishna
//           </h1>
//           <p className="text-sm text-gray-600 dark:text-neutral-400">
//             Software Engineer | Cloud & DevOps | ML & Large-Scale Systems
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;
