// 'use client'
// import Link from 'next/link';
// import { Category } from '../Navbar';

// type Props = {
//   categories: Category[];
//   isOpen: boolean;
//   onToggle: () => void;
//   onItemClick: () => void;
// };

// const CategoryMobileDropdown = ({ categories, isOpen, onToggle, onItemClick }: Props) => (
//   <li>
//     <button
//       className="flex items-center justify-between w-full px-3 py-3 bg-black bg-opacity-30 rounded-md text-white font-medium"
//       onClick={onToggle}
//     >
//       <span>Shop By Categories</span>
//       <svg
//         className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//       </svg>
//     </button>

//     <div className={`mt-1 ml-4 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
//       <ul className="space-y-1 py-2">
//         {categories.map((category) => (
//           <li key={category.id}>
//             <Link
//               href={category.path}
//               className="flex items-center justify-between py-2 px-3 text-gray-300 hover:text-white hover:bg-black hover:bg-opacity-20 rounded-md transition-colors"
//               onClick={onItemClick}
//             >
//               <span>{category.name}</span>
//               <span className="text-sm text-xaidez-accent font-medium">{category.itemCount}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </li>
// );

// export default CategoryMobileDropdown;
