// components/TeamCard.js
import React from 'react';
import MemberCard from './MemberCard';
import { useWindowSize } from "@react-hook/window-size";

const TeamCard = ({ teamName, teamInfo }) => {
  const [ width ] = useWindowSize();
  return (
    <div className="my-16">
      <h2 className="text-4xl lg:text-5xl font-bold mb-10 justify-center flex flex-wrap font-azonix text-center" id={teamName}>{teamName}</h2>
      
      {/* Head members */}
      {/* <div className={`flex ${window.innerWidth <= 768 ? 'overflow-x-auto' : 'flex-wrap justify-center'}`}>
        {teamInfo.heads.map((head, index) => (
          <MemberCard key={index} member={head} isHead={true} />
        ))}
      </div> */}
      
      {/* Team members */}
      {/* <div className={`${window.innerWidth <= 768 ? 'flex overflow-x-auto' : 'flex flex-wrap justify-center'}`}>
        {teamInfo.members.map((member, index) => (
          <MemberCard key={index} member={member} isHead={false} />
        ))}
      </div> */}

      <div className='flex overflow-x-auto md:hidden'>
        {teamInfo.heads.map((head, index) => (
          <MemberCard key={index} member={head} isHead={true} flag={true} />
        ))}
      </div>
      <div className='md:flex flex-wrap justify-center hidden'>
        {teamInfo.heads.map((head, index) => (
          <MemberCard key={index} member={head} isHead={true} flag={false} />
        ))}
      </div>

      <div className='flex overflow-x-auto md:hidden'>
        {teamInfo.members.map((member, index) => (
          <MemberCard key={index} member={member} isHead={false} flag={true}/>
        ))}
      </div>
      <div className='md:flex flex-wrap justify-center hidden'>
        {teamInfo.members.map((member, index) => (
          <MemberCard key={index} member={member} isHead={false} flag={false}/>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
