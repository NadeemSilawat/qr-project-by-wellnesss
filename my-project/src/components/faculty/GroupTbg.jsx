import React from 'react';
import { Leaf, User, Hash } from 'lucide-react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

// Mock data for the students
const students = [
  {
    name: 'Rajni Bohra',
    regNo: 'Faculty',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Anshu Mathur',
    regNo: 'Faculty',
    bgColor: 'bg-emerald-500/10',
  },    
];

// Individual Student Card Component

const avatarBgColors = [deepOrange[500], deepPurple[500], '#009688', '#1976d2', '#c62828'];

const StudentCard = ({ student, index }) => {
  return (
    <div
      className={`
        ${student.bgColor}
        backdrop-blur-md border border-white/20 
        rounded-2xl shadow-lg 
        p-6 w-full max-w-sm 
        flex flex-col items-center text-center
        transition-all duration-300 ease-in-out
        hover:shadow-2xl hover:-translate-y-2 hover:border-white/40
      `}
    >
      <Stack direction="row" spacing={1}>
        {student.avatar ? (
          <Avatar
            alt={student.name}
            src={student.avatar}
            sx={{ width: 56, height: 56, bgcolor: avatarBgColors[index % avatarBgColors.length] }}
          />
        ) : (
          <Avatar sx={{ bgcolor: avatarBgColors[index % avatarBgColors.length], width: 56, height: 56 }}>
            {student.name.charAt(0)}
          </Avatar>
        )}
      </Stack>
      <h3 className="text-xl font-semibold text-white tracking-wide">
        {student.name}
      </h3>
      <div className="flex items-center mt-2 space-x-2 text-green-100/80">
        <Hash size={16} />
        <p className="text-sm font-mono">{student.regNo}</p>
      </div>
    </div>
  );
};

// Main App Component
export default function GroupTbg() {
  return (
    <div
      className="
        min-h-screen w-full 
        bg-cover bg-center bg-fixed
        flex flex-col items-center justify-center 
        p-4 sm:p-6 md:p-8
        relative
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="bg-black/40 absolute inset-0 -z-10"></div>

      <div className="text-center mb-12">
         <h1
            className="text-5xl sm:text-5xl md:text-5xl font-bold text-yellow-400 tracking-wider"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
            }}
          >
            Grow -  A Plantation Drive By Wellness Club 
          </h1><sub className="text-yellow-400 ">28/July/2025 Monday</sub>
        <div className="flex items-center justify-center space-x-3">
          <Leaf className="text-green-300 h-10 w-10" />
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
            }}
          >
            Group L
          </h1>
          <Leaf className="text-green-300 h-10 w-10" />
        </div>
        <p className="text-green-200/90 mt-4 text-lg">
          Protect nature, protect our future.
        </p>
      </div>

     <div
        className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-8 w-full max-w-7xl
      "
      >
        {students.map((student, index) => (
          <StudentCard key={index} student={student} index={index} />
        ))}
      </div>
    </div>
  );
}
