// import { NavLink } from "react-router-dom";

// export function Navbar() {
//   return (
//     <div className="bg-white shadow-sm flex justify-start items-center p-4 sticky top-0">
//       <div className="flex justify-start items-center gap-3">
//         <NavLink
//           to={"/"}
//           className={({ isActive }) =>
//             isActive ? "text-blue-500 font-medium" : "text-gray-400 font-normal"
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to={"/store"}
//           className={({ isActive }) =>
//             isActive ? "text-blue-500 font-medium" : "text-gray-400 font-normal"
//           }
//         >
//           Store
//         </NavLink>
//         <NavLink
//           to={"/about"}
//           className={({ isActive }) =>
//             isActive ? "text-blue-500 font-medium" : "text-gray-400 font-normal"
//           }
//         >
//           About
//         </NavLink>
//       </div>
//       <div className="ml-auto rounded-full border border-gray-500 p-2 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition duration-200 cursor-pointer relative">
//         <svg
//           fill="none"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//           />
//         </svg>
//         <div className="absolute bottom-0 right-0 bg-blue-500 text-xs font-bold text-white px-2 py-1 rounded-full translate-x-1/4 translate-y-1/4">
//           2
//         </div>
//       </div>
//     </div>
//   );
// }

import { Header, Group, Box } from "@mantine/core";

import { NavLink } from "react-router-dom";

import { Cart } from "./Cart";

export function Navbar() {
  return (
    <Box>
      <Header height={60} px={32}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Group sx={{ height: "100%" }} spacing="lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium"
                  : "text-gray-400 font-normal"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/store"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium"
                  : "text-gray-400 font-normal"
              }
            >
              Store
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium"
                  : "text-gray-400 font-normal"
              }
            >
              About
            </NavLink>
          </Group>
          <Cart />
        </Group>
      </Header>
    </Box>
  );
}
