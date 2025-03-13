const Education = () => {
    return (
      <section className="mt-10 sm:mt-14 max-w-2xl mx-auto">
        <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
          Education
        </h2>
  
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Master's Degree */}
          <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
          <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="36.889"
    height="25.6965"
    className="fill-black dark:fill-white" // ✅ Dynamic fill color
  >
    <path d="M12.15 6.22L9.25 6.22L9.25 14.49L4.94 6.22L1.05 6.22L1.05 19.17L3.94 19.17L3.94 11.08L8.29 19.17L12.15 19.17ZM23.18 6.22L14.25 6.22L14.25 19.17L23.35 19.17L23.35 16.52L17.50 16.52L17.50 13.84L22.79 13.84L22.79 11.29L17.50 11.29L17.50 8.86L23.18 8.86ZM35.95 6.22L32.67 6.22L32.67 14.25C32.67 15.97 31.99 16.85 30.40 16.85C28.80 16.85 28.12 16.04 28.12 14.25L28.12 6.22L24.86 6.22L24.86 14.28C24.86 17.22 26.51 19.52 30.38 19.52C34.19 19.52 35.95 17.26 35.95 14.28Z"/>
  </svg>


  
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              April 2025 (Expected)
            </h3>
  
            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              Master of Science in Computer Engineering
            </p>
  
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Northeastern University, Boston, MA
            </p>
          </div>
  
          {/* Bachelor's Degree */}
          <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="45.214"
  height="25.6965"
  className="fill-black dark:fill-white" // ✅ Dynamic color change
>
  <path d="M6.18 6.22L1.05 6.22L1.05 19.17L4.31 19.17L4.31 14.45L5.75 14.45L8.44 19.17L12.32 19.17L8.95 13.91C10.64 13.25 11.54 12.06 11.54 10.34C11.54 7.94 9.95 6.22 6.18 6.22ZM6.33 8.81C7.53 8.81 8.18 9.31 8.18 10.36C8.18 11.58 7.38 11.99 6.23 11.99L4.31 11.99L4.31 8.81ZM22.05 6.22L13.12 6.22L13.12 19.17L22.22 19.17L22.22 16.52L16.37 16.52L16.37 13.84L21.66 13.84L21.66 11.29L16.37 11.29L16.37 8.86L22.05 8.86ZM34.32 6.22L30.89 6.22L28.47 16.59L25.99 6.22L22.53 6.22L26.42 19.17L30.49 19.17ZM42.01 19.17L45.45 19.17L41.31 6.22L37.22 6.22L33.10 19.17L36.41 19.17L36.93 17.28L41.50 17.28ZM40.79 14.73L37.63 14.73L39.22 8.64Z"/>
</svg>

  
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              July 2020
            </h3>
  
            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              Bachelor of Technology in Engineering
            </p>
  
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Reva University, Bengaluru, India
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  