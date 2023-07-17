// 'use client';

// import { useCharacters } from "@/api";
// import { Character } from '@/types';

// export const StrangeSelector = () => {
//   const { characters: locations } = useCharacters(
//     (characters) => characters.map((char) => char.location.name.toUpperCase()),
//   );

//   const { characters: length } = useCharacters(
//     (characters) => characters.length,
//   );

//   console.log('locations=', locations)

//   return (
//     <div>
//       <h2>Strange Selector</h2>
//       <span>{`Character's ${length}`}</span>
//       <ul>
//         {locations.map((loc) => (
//           <li key={loc}>
//             {loc}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
