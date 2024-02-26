import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/email";
import "react-social-icons/whatsapp";
import { useWindowSize } from "@react-hook/window-size";

const MemberCard = ({ member, isHead, flag }) => {
  // const [width] = useWindowSize();
  return (
    <div
      className="mr-4 mb-8 rounded-xl mainBackdrop"
      style={{
        width: `${
          flag
            ? "calc(100% - 1rem)"
            : isHead
            ? "calc(25% - 1rem)"
            : "calc(20% - 1rem)"
        }`,
        minWidth: `${flag ? "25rem" : ""}`,
        border: "1px solid white",
      }}
    >
      <div className="relative">
        <img
          src={member.imagePath}
          alt={member.name}
          className="w-full h-auto rounded-t-xl"
        />
        <div className="member-details text-center my-2">
          <p className="font-bold text-2xl">{member.name}</p>
          {member.email && (
            <>
              <p className="text-gray-200">{member.title}</p>
              <div className="social-icons flex justify-center my-1">
                <SocialIcon
                  network="whatsapp"
                  bgColor="transparent"
                  fgColor="rgb(255 255 255)"
                  url={`tel:+91${member.phoneNumber}`}
                  target="_blank"
                  style={{ height: 30, width: 30, margin: "0 0.5rem" }}
                />
                <SocialIcon
                  network="linkedin"
                  bgColor="transparent"
                  fgColor="rgb(255 255 255)"
                  url={member.linkedin}
                  target="_blank"
                  style={{ height: 30, width: 30, margin: "0 0.5rem" }}
                />
                <SocialIcon
                  network="email"
                  bgColor="transparent"
                  fgColor="rgb(255 255 255)"
                  url={`mailto:${member.email}`}
                  target="_blank"
                  style={{ height: 30, width: 30, margin: "0 0.5rem" }}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .mainBackdrop {
            backdrop-filter: blur(20px);
          }
        `}
      </style>
    </div>
  );
};

export default MemberCard;
